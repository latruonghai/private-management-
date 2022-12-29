<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { TaskItem } from '../../typings/props';
import { useTodoList, useToggleModal } from '@/stores';
import { getElementInputContent } from '../../helpers/dom.helpers';
import { checkIfStringHave, standardizeString, toUpperCase, toKebabCase } from '../../helpers/string.helpers';
import { computed } from '@vue/runtime-core';
import InputForm from './input-form.vue'



export default defineComponent({
  name: 'Form',

  props: {
    itemSelected: {
      type: Object as PropType<TaskItem>,
      default: {}
    }
  },
  setup(props) {
    const RENDERED_LABELS = ['todoWorks', 'dayComplete'];
    const todoList = useTodoList();
    const { toggleModalAction } = useToggleModal();

    // console.log("Item selected", props.itemSelected);
    const { todoListArray, updateTodoListItem, setCurrentItem } = todoList;

    const checkValidLabel = (label: string): boolean => {
      // console.log("label", label);
      return RENDERED_LABELS.includes(label, 0);
    };

    const onSaveHandler = () => {
      const textValue = getElementInputContent('todo-works-input');

      const newItem: TaskItem = {
        ...props.itemSelected,
        todoWorks: standardizeString(textValue),
        dayComplete: props.itemSelected.dayComplete
      };
      setCurrentItem(newItem);
      updateTodoListItem(newItem, props.itemSelected.order as number);
      alert('Update Successfully');

      toggleModalAction(false);
    };
    const checkDayString = (strDay: string) => {
      return checkIfStringHave(strDay, 'day');
    };
    const listAccepted = computed(() => {
      return Object.keys(props.itemSelected).filter((label: string) => checkValidLabel(label));
    });

    return {
      toUpperCase,
      props,
      todoListArray,
      listAccepted,
      standardizeString,
      toKebabCase,
      onSaveHandler,
      checkDayString
    };
  },
  components: { InputForm }
});
</script>

<template>
  <div class="form-section">
    <div class="form-header">
      <h1 class="form-title">This is Form</h1>
    </div>

    <div class="form-body">
      <div class="input-area">
        <InputForm
          v-for="(name, index) in listAccepted"
          :key="index"
          :label-name="standardizeString(toUpperCase(name))"
          :inputValue="(itemSelected as any)[name]"
          :id-name="`${toKebabCase(name)}-input`"
        />
      </div>
    </div>
    <div class="form-footer">
      <app-button :contentButton="'Save'" :onClickHandler="onSaveHandler" />
    </div>
  </div>
</template>

<style lang="scss">
@tailwind components;

@layer components {
  body {
    .form {
      &-section {
        @apply w-5/6 overflow-auto flex-col items-center m-auto
                border-2 rounded-md;
      }
      &-header {
        @apply left-1;
      }
      &-title {
        @apply text-blue-600 font-mono items-start;
      }
      &-body {
        @apply flex flex-row space-y-4;
      }
      &-footer {
        @apply flex flex-row space-y-4 mt-3 items-center;
      }
    }
  }
}
</style>
