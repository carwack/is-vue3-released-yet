import Vue from 'vue'
import App from './App.vue'
import VueGtag from "vue-gtag";

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: { id: 'UA-134282149-5' }
});

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
