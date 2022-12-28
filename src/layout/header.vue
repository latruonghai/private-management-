<template>
  <div class="flex justify-between py-2 mx-2 bg-gray-50 dark:bg-gray-700">
    <header class="cursor-pointer">
      <a href="/"><img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="64" height="64" /></a>
    </header>
    <NavigationBar :value-arr="valueArr"></NavigationBar>
  </div>
</template>
<script lang="ts" setup>
import Vue from 'vue';
import NavigationBar from '../components/navigation-bar.vue';
import { valueArr } from '../shared/data';
</script>
