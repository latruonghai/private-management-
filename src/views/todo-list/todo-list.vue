<script lang="ts">
import { computed, defineComponent } from '@vue/runtime-core';
import { useToggleModal, useTodoList } from '@/stores';
import { useCompletedToDoItem } from '../../stores/completed-todo-item.store';
import { storeToRefs } from 'pinia';
import { filterObject } from '../../helpers/collection.helpers';
import listViewVue from './task-list/list-view.vue';

export default defineComponent({
  components: {
   'list-view': listViewVue
  },
  setup() {
    // provide("store", {methods, state});
    const toggleModal = useToggleModal();
    const todoListItem = useTodoList();
    const todoItemState = useCompletedToDoItem();
    const { todoListArray } = storeToRefs(todoListItem);
    const { filterTodoList } = storeToRefs(todoItemState);
    // const item = ref<TodoListItem>();
    // const item = ref<TodoListItem[]>(todoListArray.value);y
    // const completedState = ref(false);
    const worksCompleted = computed(() => {
      return filterObject(todoListArray.value, function (o: any) {
        return o.done === true;
      });
    });

    const unCompletedWorks = computed(() => {
      return filterObject(todoListArray.value, function (o: any) {
        return o.done === false;
      });
    });
    // watch
    return {
      toggleModal,
      todoListArray: todoListArray.value,
      completedState: filterTodoList,
      worksCompleted,
      unCompletedWorks
    };
  }
});
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <list-view v-if="completedState === 1" :itemArray="worksCompleted"> </list-view>

  <list-view v-else-if="completedState === 0" :itemArray="unCompletedWorks"> </list-view>
  <list-view v-else :itemArray="todoListArray"> </list-view>

  <!-- <list-view v-else-if="" :itemArray="todoListArray">
        <template #footer>
            <Button
                contentButton="Completed Works"
                :onClickHandler="onClickCompleted"
            ></Button>
        </template>
    </list-view> -->
</template>

