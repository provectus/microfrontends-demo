import Vue from 'vue';
import Orders from './Orders.vue';
import singleSpaVue from 'single-spa-vue';

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: h => h(Orders),
    el: '#vue-content'
  },
});
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;