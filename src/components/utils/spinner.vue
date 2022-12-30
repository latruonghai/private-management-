<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'app-spinner'
});
</script>
<template>
  <div class="spinner-loader">
    <div class="spinner-wrapper">
      <div class="loading"></div>
    </div>
  </div>
</template>
<style lang="scss">
@tailwind components;

@layer components {
  body {
    .spinner {
      &-loader {
        @apply flex-col space-y-4 h-screen max-h-full fixed left-0 top-0 flex justify-center 
                items-center inset-0 z-50 outline-none 
                focus:outline-none bg-opacity-100 bg-gray-100;
      }
      &-wrapper {
        @apply flex justify-center items-center w-full h-full;
      }
    }
    .loading {
      @apply flex justify-center;
    }
    .loading::after {
      content: '';
      width: 200px;
      height: 200px;
      // background: red;
      @apply rounded-full;
      border: 10px solid #dddddd;
      border-top-color: #009579;
      border-bottom-color: #009579;
      animation: loading 1s linear infinite;
    }

    @keyframes loading {
      to {
        transform: rotate(1turn);
      }
    }
  }
}
</style>
