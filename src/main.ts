import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.scss';
import buttonVue from './components/utils/button.vue';
import commonInputVue from './components/utils/common-input.vue';
import modalVue from './components/utils/modal.vue';
import PureForm from '@/components/form/pure-form.vue';

const app = createApp(App);

app
  .component('app-button', buttonVue)
  .component('app-input', commonInputVue)
  .component('app-modal', modalVue)
  .component('app-form', PureForm);
app.use(createPinia());
app.use(router);

app.mount('#app');
