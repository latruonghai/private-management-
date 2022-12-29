<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  props: {
    extraClassName: String,
    labelName: {
      type: String,
      default: 'Label'
    },

    placeholderString: String,
    inputType: String,
    inputName: String,
    typeName: String,
    inputValue: {
      type: String,
      default: ''
    },
    idName: String
  },

  setup(props) {
    return { props };
  }
});
</script>

<template>
  <div class="input-area">
    <label :for="props.inputName" :class="`input-label ${props.extraClassName}`">{{ props.labelName }} </label>
    <input
      :type="props.typeName"
      :class="`input-section ${props.extraClassName}`"
      :placeholder="props.placeholderString"
      :name="props.inputName"
      :value="props.inputValue"
      :id="props.idName"
    />
  </div>
</template>

<style lang="scss">
@tailwind components;
@layer components {
  body {
    .input {
      &-area {
        @apply w-4/5 flex items-center;
      }
      &-section {
        @apply w-4/5;
      }
      &-label {
        @apply text-black font-bold capitalize font-serif;
      }
      &-form {
        @apply flex-shrink-0 flex ml-1;
      }
    }
  }
}
</style>
