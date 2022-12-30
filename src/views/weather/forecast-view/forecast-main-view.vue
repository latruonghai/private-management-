<template>
  <div>
    <div class="weather-information-location">
      <div>
        <h5 class="weather-information-city">
          {{ weatherItem.name }}
        </h5>
        <h6 class="weather-information-date">
          {{ weatherDay }}
        </h6>
      </div>
      <div class="weather-information-icon">
        <img :src="weatherIcon" alt="" class="icon" />
        <strong class="weather-information-state">{{ mainWeather }}</strong>
      </div>
      <div class="weather-information-temp">
        <h3 class="detail-temp">
          <span>{{ mainTemp }}°</span>
        </h3>
      </div>
    </div>
    <div class="temp-detail">
      <!-- <div>{{ acceptedPropertiesValue }}</div> -->
      <div class="temp-detail-section" v-for="(value, index) in acceptedPropertiesValue" :key="index">
        <div class="temp-detail-title">
          <span>{{ t(Object.keys(value)[0]) }}</span>
          <template v-if="Object.keys(value)[0] === 'pressure'">
            <small class="temp-detail-text"
              >{{Object.values(value)[0]&nbsp;
              }}
              mb</small
            >
          </template>
          <template v-else-if="Object.keys(value)[0] === 'humidity'">
            <small class="temp-detail-text"
              >{{Object.values(value)[0]&nbsp;

              }}
              %</small
            >
          </template>
          <template v-else>
            <small class="temp-detail-text"
              >{{Object.values(value)[0]&nbsp;

              }}
              °</small
            >
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { standardizeDate } from '../../../helpers/date.helpers';
import { useI18n } from 'vue-i18n';
import { computed, reactive } from 'vue';
import { getIconWeatherString, lowerCase } from '../../../helpers/string.helpers';

export default {
  data() {
    return {
      acceptedPropertiesArr: ['temp', 'feels_like', 'temp_min', 'temp_max', 'pressure', 'humidity']
    };
  },

  props: {
    weatherItem: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  setup({ weatherItem }) {
    console.log("🚀 ~ file: forecast-main-view.vue:77 ~ setup ~ weatherItem", weatherItem);
    const weatherDay = computed(() => standardizeDate(weatherItem?.dt, 'vi', weatherItem?.timezone));

    const { t, locale } = useI18n({ useScope: 'global' });
    const acceptedPropertiesArr = reactive([
                'temp',
                'feels_like',
                'temp_min',
                'temp_max',
                'pressure',
                'humidity'
            ])
    const weatherIcon = computed(() => {
      return getIconWeatherString(weatherItem?.weather ? weatherItem?.weather[0].icon : '01d');
    });
    const mainWeather = computed(() => weatherItem?.weather?.[0]?.description);

    function checkIfPropertyExists(property) {
      return acceptedPropertiesArr.includes(property);
    }
    const mainTemp = computed(() => Number.parseInt(weatherItem?.main?.temp));

    const acceptedPropertiesValue = computed(() => {
      let acceptedPropertiesArr = [];
      for (let key in weatherItem?.main) {
        if (checkIfPropertyExists(key)) {
          acceptedPropertiesArr.push({
            [lowerCase(key)]: weatherItem?.main[key]
          });
        }
      }
      return acceptedPropertiesArr;
    });
    return {
      acceptedPropertiesValue,
      weatherDay,
      weatherIcon,
      mainTemp,
      mainWeather,
      checkIfPropertyExists,
      t,
      locale
    };
  }
};
</script>
<style lang="scss">
@tailwind components;

@layer components {
  body {
    .weather {
      &-information {
        &-location {
          @apply flex mb-4 justify-between items-center;
        }
        &-city {
          @apply mb-0 font-mono text-xl text-red-300 font-bold;
        }
        &-date {
          @apply mb-0 italic font-medium text-sm text-red-200;
        }
        &-state {
          @apply text-xl text-yellow-200 italic capitalize;
        }
        &-temp {
          @apply text-right;
        }
        &-icon {
          @apply shadow-md m-auto;
        }
      }
    }
  }
}
</style>
