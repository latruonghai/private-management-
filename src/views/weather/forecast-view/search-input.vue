<script lang="ts">
import tmalogo from '@/assets/icons/tma.svg';
import { ref, type Ref } from 'vue';
import { useWeather } from '../../../stores/weather.store';
import { stringWithoutSpaces } from '../../../helpers/string.helpers';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchInput',
  //   ...mapActions(['getWeather']),
  //   ...mapMutations(['setQueryParams', 'setIsLoading']),
  computed: {
    // ...mapGetters(['paramsQuery', 'queryString'])
  },
  setup() {
    const weatherStore = useWeather();
    const { getWeather } = weatherStore;
    const search: Ref<string> = ref('');
    const getWeatherInformation = (city: string) => {
      getWeather({
        q: stringWithoutSpaces(city)
      });
    };
    const setSearch = (inputTarget: EventTarget) => {
      const searchValue = (inputTarget as HTMLTextAreaElement).value;
      console.log('🚀 ~ file: search-input.vue:25 ~ setSearch ~ searchValue', searchValue);
      search.value = searchValue;
    };
    const onClick = () => {
      getWeatherInformation(search.value);
      // this.search="";
    };
    return { search, getWeatherInformation, onClick, setSearch, tmalogo };
  },
  methods: {
    // getWeatherInformation(city: any) {
    //   // this.$store.commit('setQueryParams');
    //   // const queryParams = ;
    //   // this.$store.commit('setIsLoading', true);wq
    //   this.$store.dispatch('getWeather', {
    //     // url: queryParams,
    //     action: 'setWeather',
    //     paramsString: {
    //       q: stringWithoutSpaces(city)
    //     }
    //   });
    //   this.setSearch('');
    // },
  }
});
</script>
<template>
  <div>
    <div class="search-wrapper">
      <div class="header-search">
        <img :src="tmalogo" class="logo" alt="" />
      </div>
      <div class="search-section">
        <div class="input-section">
          <input
            class="search-input-form"
            type="text"
            :placeholder="$t('search.placeholder')"
            v-model="search"
            @input="setSearch($event.target)"
            @keyup.enter="getWeatherInformation(search)"
          />
        </div>
        <button class="btn-search" @click="onClick">
          {{ $t('search.text') }}
        </button>
      </div>
      <!-- <Selection /> -->
      <!-- <Dropdown /> -->
    </div>
    <!-- <h3 class="error-text">Your city name should be more than 3 characters</h3> -->
  </div>
</template>

<style lang="scss">
@tailwind components;

@layer components {
  .logo {
    @apply w-24 h-24;
  }
  .search-wrapper {
    @apply m-3 w-full flex justify-between items-center static;
  }
  .search-section {
    @apply box-content justify-center flex;
  }
  .btn {
    @apply ml-2;
  }
  .input-section {
    @apply w-auto flex-row;
  }
  .error-text {
    @apply m-auto italic text-xs text-red-400;
  }
}
</style>
