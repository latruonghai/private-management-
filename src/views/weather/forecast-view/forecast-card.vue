<template>
  <div>
    <div class="weather-section">
      <div class="weather-wrapper">
        <div class="card-section">
          <div class="card-wrapper">
            <div class="card-header">
              <forecast-main-view :weatherItem="weatherItem" />
            </div>
            <div class="card-body">
              <span class="card-body-title"
                ><small>{{ $t('forecast') }}</small></span
              >
            </div>
            <!-- <div class="card-footer">
              <forecast-footer v-show="!usingChart" :weatherHourly="weatherHourly" />
              <BaseChart :dataChart="dataChart" v-show="usingChart" />
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ForecastMainView from './forecast-main-view.vue'
export default {
  name: 'ForecastCard',
  components: {
    // SearchInput
    'forecast-main-view': ForecastMainView,
  },
  mounted() {
    // console.log(this.weatherItem)
    console.log("🚀 ~ file: forecast-card.vue:37 ~ mounted ~ this.weatherItem", this.weatherItem);
  },
  props: {
    // usingChart: {
    //   type: Boolean,
    //   required: true,
    //   default: false
    // },

    weatherItem: {
      type: Object
    }
  },
};
</script>
<style lang="scss">
@tailwind base;

@layer base {
  .weather {
    &-section {
      @apply mx-auto p-4 bg-purple-400 h-screen flex justify-center;
    }
    &-wrapper {
      @apply flex flex-wrap;
    }
  }
  .card {
    &-section {
      @apply w-full px-2;
    }
    &-wrapper {
      @apply bg-gray-900 text-white relative min-w-0 break-words rounded-lg 
 overflow-hidden shadow-sm mb-4 w-full;
    }
    &-header {
      @apply px-6 py-6 relative;
    }
    &-body {
      @apply divide-x table mx-2 text-center bg-transparent whitespace-nowrap;
      &-title {
        @apply text-red-400 text-xl font-sans font-bold inline-block px-3;
      }
    }
    &-footer {
      @apply px-6 py-6 relative max-h-96 overflow-auto;
    }
  }
  .detail-temp {
    @apply font-bold text-4xl mb-0;
  }
  .temp {
    &-detail {
      @apply block sm:flex justify-between items-center flex-wrap border-t-2 border-gray-700 border-b-2;
      &-section {
        @apply w-full sm:w-1/2 mt-2 font-mono border-l-2 border-gray-500;
      }
      &-title {
        @apply flex mb-2 justify-between items-center font-bold ml-2;
      }
      &-text {
        @apply px-2 inline-block text-sm text-gray-400;
      }
    }
  }

  .icon {
    @apply h-2/5 rounded-full m-auto;
  }
}
</style>
