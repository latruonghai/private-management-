<script setup lang="ts">
import ListContent from "../components/contents/list-content.vue";
import { listContent } from "../shared/data";
</script>

<template>
  <main>
    <ListContent :list-item="listContent" />
  </main>
</template>
