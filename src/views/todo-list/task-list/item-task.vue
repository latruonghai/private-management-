<script lang="ts">
// import useTodoList from '../store/todolistItem';
import { computed, defineComponent } from '@vue/runtime-core';
import type { PropType } from 'vue';
import type { TaskItem } from '../../../typings/props';
import { useTodoList, useToggleModal } from '@/stores';
import { useCompletedToDoItem } from '../../../stores/completed-todo-item.store';
import { findIndexObjectByProperties } from '../../../helpers/collection.helpers';
import { dayFrom, getRelativeDay } from '../../../helpers/date.helpers';

export default defineComponent({
  inheritAttrs: false,
  props: {
    itemContent: {
      type: Object as PropType<TaskItem>,
      default: 'Todo'
    },
    order: Number,
    idName: String
  },
  mounted(){
   // console.log(this)
   console.log("🚀 ~ file: item-task.vue:23 ~ mounted ~ this", this);
  },
  setup(props: any) {
    const todoListStore = useTodoList();
    console.log('🚀 ~ file: item-task.vue:23 ~ setup ~ todoListStore', todoListStore);
    const toggleModal = useToggleModal();
    const { setFilterState } = useCompletedToDoItem();
    const { toggleModalAction } = toggleModal;
    const { removeTodoItem, setDoneItem, setCurrentItem } = todoListStore;
    const indexOfElement = computed(() => {
      return findIndexObjectByProperties(todoListStore.todoListArray, {
        order: props.order
      });
    });

    const removeItemHandler = () => {
      removeTodoItem(indexOfElement.value);
      setFilterState(-1);
    };

    const setDoneItemHandler = () => {
      setDoneItem(indexOfElement.value);
    };

    const onClickEdit = () => {
      setCurrentItem(props.itemContent);
      toggleModalAction(true);
    };
    const doneStatus = computed(() => {
      return props.itemContent.done ? 'done' : '';
    });
    const todoInformation = computed(() => {
      return `${props.itemContent.todoWorks} on ${props.itemContent.dayComplete}`;
    });
    const dayExpiration = computed(() => {
      const dayString = (<TaskItem>props.itemContent).dayComplete as string;

      const dayRelative = getRelativeDay(dayFrom(dayString));
      // const dayCreated = normalizeDate(dayString);
      return dayRelative === '' ? dayString : dayRelative;
    });
    return {
      removeItemHandler,
      setDoneItemHandler,
      dayExpiration,
      doneStatus,
      toggleModalAction,
      setCurrentItem,
      onClickEdit,
      todoInformation
    };
  }
});
</script>

<template>
  <div class="work-counter">
    <span>{{ itemContent.numOfWorks }}</span>
  </div>
  <div :id="`cart-${order}`" :title="todoInformation" class="cart-item">
    <!-- <input :type="'checkbox'" v-model="getStatus" @change="
        "/> -->
    <p :class="`cart-content ${doneStatus}`">
      {{ itemContent.todoWorks }}<span class="comma"> | </span>
      <span class="title">{{ dayExpiration }}</span>
    </p>
    <!-- <p v-else  class="cart-content done" >{{itemContent.todoWorks}}</p> -->
    <app-button
      :contentButton="doneStatus ? 'Not Done' : 'Done'"
      :extraClassName="'edit'"
      :onClickHandler="setDoneItemHandler"
      :titleString="doneStatus ? 'Make it not done' : 'Make it done'"
    />
    <app-button
      v-if="!itemContent.done"
      titleString="Edit todo list information"
      contentButton="Edit"
      :extraClassName="'remove'"
      :onClickHandler="onClickEdit"
    />
    <app-button
      v-else
      titleString="Remove todo list"
      contentButton="Remove"
      :extraClassName="'remove'"
      :onClickHandler="removeItemHandler"
    />
  </div>
</template>

<style lang="scss">
@tailwind components;

@layer components {
  body {
    .cart {
      &-item {
        @apply my-2 p-1 flex items-center ml-2;
      }
      &-content {
        @apply w-full text-gray-600 text-left font-mono;
      }
    }
    .done {
      @apply line-through text-red-500;
    }
    .title {
      @apply text-red-500;
    }
    .work-counter {
      @apply rounded-md items-center relative w-1/12
            bg-green-500 font-bold justify-center;
      transform: translateY(35%);
      display: flex;
    }
    .comma {
      @apply text-gray-500 font-bold;
    }
  }
}
</style>
