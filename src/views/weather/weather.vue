<template>
  <div>
    <div id="app">
      <search-input />

      <app-forecast-card :weatherItem="weatherComp" />
    </div>
  </div>
</template>

<script lang="ts">
// import ForecastCarde from './components/Forecast/ForecastCarde.vue';
// import SearchInput from './components/SearchForm/SearchInput.vue';
// import Spinner from './components/ui/Spinner.vue';
import { reactive } from 'vue';
import { storeToRefs } from 'pinia';
import ForecastCard from '@/views/weather/forecast-view/forecast-card.vue';
import searchInputVue from './forecast-view/search-input.vue';
import { defineComponent, computed } from '@vue/runtime-core';
import { useWeather } from '../../stores/weather.store';
// import Spinner from './components/ui/Spinner.vue';
export default defineComponent({
  name: 'App',
  // ...mapActions(['getWeather', 'getWeatherHourly']),
  // ...mapState(['usingChart']),
  mounted() {
    this.getWeatherInformation();
  },
  setup() {
    const weatherStore = useWeather();

   
    const { weather, paramsQuery } = storeToRefs(weatherStore);
    const weatherComp = computed(() => weatherStore.weather)

    const { getWeather } = weatherStore;
    const getWeatherInformation = () => {
      getWeather(paramsQuery);
    };
    return {
      getWeatherInformation,
      weatherComp
    };
  },
  components: {
    'app-forecast-card': ForecastCard,
    'search-input': searchInputVue
    // Spinner
  }
});
</script>

<style lang="scss" scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply font-sans;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  button {
    @apply py-1 border-2 border-red-400 text-red-400 bg-white rounded-md
      hover:border-red-600 hover:text-white hover:bg-red-600 text-center px-2;
  }
  input {
    @apply border-2 mr-2 border-blue-400 rounded-lg shadow-sm text-center py-1;
  }
}
</style>
