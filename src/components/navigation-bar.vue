<template>
  <nav class="ml-2 w-full">
    <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
        <div class="flex items-center justify-center">
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li v-for="(item, index) in props.valueArr" :key="index">
                    <RouterLink :to="item.path" class="text-gray-900 dark:text-white hover:underline" aria-current="page">{{ item.name }}</RouterLink>
                </li>
                <!-- <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Features</a>
                </li> -->
            </ul>
        </div>
    </div>
</nav>
</template>
<script lang="ts" setup="props">
import  { defineComponent, type PropType } from 'vue';
import type {NavigationProps} from '../typings/props'

import { RouterLink } from 'vue-router';

const props = defineProps<{valueArr: NavigationProps[]}>()
</script>
<style lang="scss" scoped>

</style>