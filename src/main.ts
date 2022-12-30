import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.scss';
import buttonVue from '@/components/utils/button.vue';
import Spinner from '@/components/utils/spinner.vue'
import commonInputVue from '@/components/utils/common-input.vue';
import modalVue from '@/components/utils/modal.vue';
import PureForm from '@/components/form/pure-form.vue';
import i18n from './i18n';

const app = createApp(App);

app
  .component('app-button', buttonVue)
  .component('app-input', commonInputVue)
  .component('app-modal', modalVue)
  .component('app-form', PureForm)
  .component('app-spinner', Spinner);
app.use(createPinia());
app.use(router);
app.use(i18n)

app.mount('#app');
