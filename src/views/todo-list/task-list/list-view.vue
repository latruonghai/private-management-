<template>
  <div class="h-full">
    <app-modal v-show="isShow">
      <template #body>
        <BasicForm :itemSelected="stateTodoList.currentItem" />
      </template>
    </app-modal>
    <div class="todo-list-form">
      <div class="todo-list-section">
        <span class="display-date">{{ today }}</span>
        <div class="todo-list-content">
          <h1 class="todo-list-title">Todo List</h1>
          <div class="todo-list-input-section">
            <app-input :idName="'todo-item-content'" placeholder="Add Todo" />
            <app-input typeName="date" idName="todo-item-date" />
            <app-button
              contentButton="Add"
              :extraClassName="'add'"
              :onClickHandler="addTodoHandler"
              titleString="Add new work into todo list"
            ></app-button>
          </div>
          <div class="cart-section">
            <item-task
              v-for="(item, index) in arrayCart"
              :key="index"
              :idName="`cart-${item.order}`"
              :itemContent="item"
              :done="item.done"
              :order="item.order"
            />
          </div>
        </div>
        <div class="todo-list-footer">
          <slot v-if="isHasItem" name="footer">
            <app-button
              extraClassName="show-all"
              contentButton="All Works"
              :onClickHandler="() => onClickCompleted(-1)"
              :isDisable="matchValue(-1)"
              titleString="Show all works"
            />

            <app-button
              extraClassName="completed"
              contentButton="Completed Works"
              :onClickHandler="() => onClickCompleted(1)"
              :isDisable="matchValue(1)"
              titleString="Show completed works"
            />
            <app-button
              extraClassName="uncompleted"
              contentButton="Uncompleted Works"
              :onClickHandler="() => onClickCompleted(0)"
              :isDisable="matchValue(0)"
              titleString="Show uncompleted works"
            />
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from 'vue';
import type { TaskItem } from '../../../typings/props';
// import my-button from '../components/my-button.vue';
import ItemTask from './item-task.vue';
import { storeToRefs } from 'pinia';
import { useToggleModal, useTodoList } from '@/stores';
import { useCompletedToDoItem } from '../../../stores/completed-todo-item.store';
import { getToday, normalizeDate, sortByDay, toTimeStamp } from '../../../helpers/date.helpers';
import { getElementInputContent } from '../../../helpers/dom.helpers';
import { standardizeString } from '../../../helpers/string.helpers';
import { numberOfExistObjectElement } from '../../../helpers/array.helpers';
export default defineComponent({
  name: 'TodoList',
  inheritAttrs: false,
  components: {
    // my-button,

    'item-task' : ItemTask
  },
  props: {
    itemArray: {
      type: Array as PropType<TaskItem[]>,
      default: () => []
    }
  },
  setup({ itemArray }) {
    const { isShow } = storeToRefs(useToggleModal());
    const stateTodoList = useTodoList();
    const { addTodoItem } = stateTodoList;
    const { currentItem, todoListArray } = storeToRefs(stateTodoList);
    const completeTodoList = useCompletedToDoItem();
    const { setFilterState } = completeTodoList;
    const { filterTodoList } = storeToRefs(completeTodoList);
    const today = getToday();

    const onClickCompleted = (value: any) => {
      setFilterState(value);
    };

    const matchValue = (value: any) => {
      return filterTodoList.value === value;
    };
    // console.log('current', currentItem);
    const arrayCart = computed(() => {
      return sortByDay(itemArray);
    });

    const addTodoHandler = () => {
      const content = getElementInputContent('todo-item-content');
      const dateValueContent = getElementInputContent('todo-item-date');

      const dayComplete = (dateValueContent && normalizeDate(dateValueContent)) || today;

      if (content.length > 0) {
        const item: TaskItem = {
          todoWorks: standardizeString(content),
          done: false,
          numOfWorks: numberOfExistObjectElement(stateTodoList.todoListArray, content, 'todoWorks') + 1,
          dayCreated: today,
          dayComplete: dayComplete,
          order: todoListArrayLength.value,
          // : getToday(),
          timeStamp: toTimeStamp(dayComplete)
        };

        addTodoItem(item);
        setFilterState(-1);
      }
    };

    const isHasItem = computed((): boolean => {
      return todoListArrayLength.value > 0;
    });

    const todoListArrayLength = computed(() => {
      return todoListArray.value.length;
    });

    return {
      stateTodoList,
      addTodoHandler,
      arrayCart,
      todoListArrayLength,
      isShow,
      currentItem: currentItem.value,
      today,
      isHasItem,
      onClickCompleted,
      matchValue
    };
  }
});
</script>
<style lang="scss">
@tailwind components;

@layer components {
  body {
    .display-date {
      @apply font-thin text-gray-500 float-right italic;
    }
    .todo-list {
      &-title {
        @apply text-2xl font-black mb-2;
      }
      &-section {
        @apply bg-white rounded p-6 m-4 w-full lg:w-3/4 lg:max-w-2xl shadow-lg;
      }
      &-form {
        @apply w-full flex flex-col items-center justify-center font-sans;
      }
      &-content {
        @apply mb-6 left-0;
      }
      &-input-section {
        @apply flex mt-1;
      }

      &-button {
        @apply ml-2 rounded-xl bg-white border-teal-400 text-teal-600 cursor-pointer flex-shrink-0 p-2 hover:text-teal-800 hover:border-teal-600;
      }
    }
    .cart-section {
      @apply m-4 flex-col shadow-lg overflow-auto;
    }
  }
}
</style>

