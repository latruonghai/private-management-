import { defineStore } from 'pinia';
export const useStatusApp = defineStore('loading', {
  state: () => {
    return {
      $isLoading: false,
      $tabIndex: 0
    };
  },
  getters: {
    loadingState(): boolean {
      return this.$isLoading;
    },
    tabIndex(): number {
      return this.$tabIndex;
    }
  },
  actions: {
    setLoading(state: boolean) {
      this.$isLoading = state;
    },
    setTabIndex(newIndex: number) {
      this.$tabIndex = newIndex;
    }
  }
});
