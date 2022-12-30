import { defineStore } from 'pinia';
import { getQueryString } from '../helpers/string.helpers';
import ApiService, { API } from '../services/http.interceptor';
import type { WeatherCurrentResponse } from '../typings/http-response';

export const useWeather = defineStore('weather', {
  state: () => {
    return {
      $weather: {
        $weatherCurr: {} as WeatherCurrentResponse,
      },
      $addictionInformation: {
        $lat: -1,
        $lon: -1,
        $dt: 0,
        $units: 'metric'
      },
      $paramsQuery: {
        q: 'London,uk',
        units: 'metric',
        lang: 'vi'
      },
      $usingChart: false
    };
  },
  getters: {
    weather(): any {
      return this?.$weather?.$weatherCurr as any;
    },
    usingChart(): boolean {
      return this?.usingChart;
    },
    paramsQuery(): any {
      return this.$paramsQuery;
    },
  },
  actions: {
    async getWeather(params: any) {
      console.log("🚀 ~ file: weather.store.ts:39 ~ getWeather ~ params", params);
      // const url = `${payload.url}`;
      // const url = getQueryString();
      // console.log('getQueryString', getQueryString);

      const newParams = {params: {...this.paramsQuery, ...params}}
      let response;
      try {
        response = await API.get('/foo/weather', newParams);
      } catch (err) {
        console.log('🚀 ~ file: weather.store.ts:57 ~ getWeather ~ err', err);
      }
      this.$weather.$weatherCurr = response?.data

      // commit
    }
    // async getWeatherHourly({ commit }, payload) {
    //     commit('setIsLoading', true);
    //     const url = `${payload.url}`;
    //     console.log('url', url);
    //     let response;
    //     try {
    //         response = await axios.get(url);
    //     } catch {
    //         Swal.fire('Error', `The city's name was not found`, 'error');
    //         commit('setIsLoading', false);
    //     }
    //     console.log('response.data', response.data);
    //     commit(payload.action, response.data);
    //     commit('setIsLoading', false);
    // }
  }
});
