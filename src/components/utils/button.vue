<template>
 <button
     @click="
         (e) => {
             onClickHandler();
         }
     "
     :class="'btn ' + extraClassName"
     :title="titleString"
     :disabled="isDisable"
 >
     {{ contentButton }}
 </button>
 
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
 name: 'app-button',
 props: {
     extraClassName: {
         type: String,
         default: ''
     },
     onClickHandler: {
         type: Function,
         default: () => {
             console.log('There is no action here.');
         }
     },
     contentButton: {
         type: String,
         default: 'Hello'
     },
     titleString: {
         type: String,
         default: 'Hello'
     },
     isDisable: {
         type: Boolean,
         default: false
     }
 }
});
</script>

<style lang="scss">
@tailwind components;

@layer components {
 body {
     .btn {
         @apply flex-shrink-0 p-2 border-blue-400 bg-white text-blue-400
         rounded-md cursor-pointer hover:bg-blue-400 hover:border-blue-600 
         hover:text-white hover:font-bold ml-2 disabled:hover:bg-orange-500
         disabled:bg-orange-500 disabled:text-white disabled:font-bold disabled:scale-105;
     }
     .add {
         @apply text-pink-500 border-pink-500 hover:text-pink-400 
         hover:border-pink-600 bg-white border hover:bg-pink-500 hover:text-white;
     }
     .edit {
         @apply border-green-500 text-green-400 hover:border-green-600
         hover:text-white bg-white hover:font-bold hover:bg-green-600 ml-4 mr-2 border;
     }
     .remove {
         @apply border-red-500 bg-white text-red-500 hover:font-bold
         hover:border-red-600 hover:bg-red-500 hover:text-white hover:shadow-lg;
     }
     .uncompleted {
         @apply border-gray-500 bg-white text-gray-500 hover:font-bold
         hover:border-gray-600 hover:bg-gray-500 hover:text-white hover:shadow-lg;
     }
     .completed {
         @apply border-red-500 bg-white text-red-500 hover:font-bold
         hover:border-red-600 hover:bg-red-500 hover:text-white hover:shadow-lg;
     }
 }
}
</style>