import '../src/assets/main.scss';
import {app} from '@storybook/vue3'
import Modal from '../src/components/utils/modal.vue';
import Button from '../src/components/utils/button.vue'
import { createPinia } from 'pinia';


app.component('app-modal', Modal).component('app-button', Button).use(createPinia());
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
