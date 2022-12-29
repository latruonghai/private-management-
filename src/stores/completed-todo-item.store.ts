import { defineStore } from 'pinia';
import type { NumberState } from '../typings/store';

interface StateItem {
  filterTodoList: NumberState;
}
export const useCompletedToDoItem = defineStore('completedTodoItem', {
  state: (): StateItem => {
    return {
      filterTodoList: -1
    };
  },
  actions: {
    setFilterState(state: NumberState): void {
      this.filterTodoList = state;
    }
  }
});
