<template>
  <header class="relative w-full justify-center flex">
    <nav x-ref="tabs" class="flex">
      <RouterLink
        v-for="(item, index) in valueArr"
        :key="index"
        x-spread="tab"
        class="inline-flex items-center justify-center px-8 py-4 text-sm font-medium transition"
        :class="{ 'is-active': activeIndex === index,
                      'is-inactive': activeIndex !== index}"
        :to="item.path"
        @click="clickNavBarHandle(index)"
        >{{ item.name }}</RouterLink
      >
      <!-- <RouterLink x-spread="tab" class="inline-flex items-center justify-center px-8 py-4 text-sm font-medium transition" to="#"
        >Symptoms</RouterLink
      >
      <RouterLink x-spread="tab" class="inline-flex items-center justify-center px-8 py-4 text-sm font-medium transition" to="#"
        >Safety checklist</RouterLink
      >
      <RouterLink x-spread="tab" class="inline-flex items-center justify-center px-8 py-4 text-sm font-medium transition" to="#"
        >Local regulations</RouterLink
      > -->
    </nav>

    <div x-spread="indicator" class="border-t-2 border-indigo-600 absolute left-0 bottom-0 transition-all duration-500"></div>
  </header>
</template>
<script lang="ts">
import { defineComponent, type PropType, ref } from 'vue';
import type { NavigationProps } from '../typings/props';

import { RouterLink } from 'vue-router';

export default defineComponent({
  props: {
    valueArr: {
      type: Object as PropType<NavigationProps[]>,
      default: []
    }
  },
  setup({ valueArr }) {
    const activeIndex = ref(-1);
    const clickNavBarHandle = (index: number) => {
      activeIndex.value = index
    }
    return { valueArr, activeIndex, clickNavBarHandle };
  }
});
</script>
<style lang="scss" scoped>
@tailwind components;

@layer components {
  body {
    .is-active {
      @apply border-b border-pink-300 text-pink-300;
    }
    .is-inactive {
      @apply text-gray-600;
    }
  }
}
</style>
