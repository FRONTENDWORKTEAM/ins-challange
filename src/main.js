import Vue from 'vue';

import 'bootstrap';

import App from './App.vue';
import router from './router';
import store from './store';

import Icon from './components/shareds/Icon.vue';

Vue.component('Icon', Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
