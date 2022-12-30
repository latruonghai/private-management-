<script lang="ts">
import { defineComponent } from "vue";
import ListContent from "../components/contents/list-content.vue";
import { listContent } from '../shared/data';
import { useWeather } from '../stores/weather.store';

export default defineComponent({
  components: {
    ListContent
  },
  setup() {
    
    return {listContent}
  }
})
</script>

<template>
  <main>
    <ListContent :list-item="listContent" />
  </main>
</template>
