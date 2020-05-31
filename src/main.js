import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap';
import "./assets/css/app.css"
import "./assets/vendors/mdi/css/fontawesome.min.css"
import "./assets/vendors/mdi/js/all.js"
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
import 'popper.js';
import moment from 'moment'
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment.utc(value).local().format('DD/MM/YYYY hh:mm');
  }
})
Vue.filter('formatTime', function(value) {
  if (value) {
    var da = value;
    var date = new Date(da * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var time = hours + ':' + minutes.substr(-2);
    return time;
  }
})
Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
