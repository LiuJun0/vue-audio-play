import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'reset-css'; // eslint-disable-line
import 'element-ui/lib/theme-chalk/index.css' // eslint-disable-line

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
