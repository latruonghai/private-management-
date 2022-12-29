<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

// import Vue from 'vue'
export default defineComponent({
  inheritAttrs: false,
  props: {
    extraClassName: {
      type: String,
      default: ''
    },
    typeName: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },

    onChange: {
      type: Function,
      default: (event: any) => console.log(event)
    },
    idName: {
      type: String,
      default: ''
    }
  }
});
</script>

<template>
  <input
    :id="idName"
    class="input-section"
    :class="extraClassName"
    :type="typeName"
    :placeholder="placeholder"
    @change="onChange($event)"
  />
</template>

<style lang="scss">
@tailwind components;

@layer components {
  body {
    .input-section {
      @apply w-full shadow-sm border-pink-400 focus:text-black
      appearance-none border rounded-md py-2 px-3 mr-4;
    }
  }
}
</style>
