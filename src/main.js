import { VueFire, VueFireAuth } from 'vuefire';
import { firebaseApp } from './config/firebase';
import { plugin, defaultConfig } from '@formkit/vue';
import theme from '../formkit.config';
import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
});
app.use(plugin, defaultConfig(theme));

app.mount('#app');
