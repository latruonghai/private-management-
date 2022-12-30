import type { TaskItem } from '../typings/props';
import { defineStore } from 'pinia';
// import TodoListItemArray
import { checkExistElement, findExistElementByProperties } from '../helpers/array.helpers';
import type { TodoListItemArray } from '../typings/store';
import { getToday } from '../helpers/date.helpers';
import API from '../services/http.interceptor';


const useTodoList = defineStore('todoListItem', {
  state: (): TodoListItemArray => {
    return {
      todoListArray: [],
      currentItem: {
        todoWorks: '',
        numOfWorks: 0,
        done: false,
        dayCreated: getToday(),
        dayComplete: '',
        order: 0,
        timeStamp: Date.now()
      }
    };
  },
  getters: {
    getStatus(): boolean {
      return this.todoListArray[0].done as boolean;
    }
  },
  actions: {
    addTodoItem(todoItem: TaskItem): void {
      const todoWorks = todoItem.todoWorks;
      if (!checkExistElement(this.todoListArray, todoWorks, 'todoWorks')) {
        this.todoListArray.push(todoItem);
        // sortByDay(arr, )
      } else {
        const item = findExistElementByProperties(this.todoListArray, todoWorks, 'todoWorks');
        item.numOfWorks += 1;
      }
    },

    removeTodoItem(index: number): void {
      this.todoListArray.splice(index, 1);
    },
    setDoneItem(index: number): void {
      const stateItem = this.todoListArray[index].done as boolean;
      this.todoListArray[index].done = !stateItem;
    },
    setCurrentItem(todoItem: TaskItem): void {
      this.currentItem = todoItem;
    },
    updateTodoListItem(todoItem: TaskItem, index: number): void {
      this.todoListArray[index] = todoItem;
    }
  }
});

export { useTodoList };
