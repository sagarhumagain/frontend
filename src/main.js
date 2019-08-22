import Vue from 'vue'
import App from './App.vue'

// bootstrap-vue

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/js/dist/alert.js'

//vue-router
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/*Defining all the routes*/
let routes = [
  { path: '/login', component: require('./components/login.vue').default},
  { path: '/register', component: require('./components/register.vue').default},
  { path: '/dashboard', component: require('./components/dashboard.vue').default},
  { path: '/profile', component: require('./components/profile.vue').default},
  { path: '/uploadfile', component: require('./components/uploadfile.vue').default},
  { path: '/test', component: require('./components/test.vue').default},





  
]
const router = new VueRouter({
  mode: 'history',
  routes, // short for `routes: routes`
  linkActiveClass: 'active'
});
//vform
import { Form, HasError, AlertError } from 'vform'; //form validation
window.Form = Form;

Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
// css file
import 'bootstrap/dist/css/bootstrap.min.css'
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/dist/css/adminlte.css'

//font-awesome
import "font-awesome/css/font-awesome.css"
import "font-awesome/css/font-awesome.min.css"
import "@fortawesome/fontawesome-free/css/solid.css"
import "@fortawesome/fontawesome-free/css/fontawesome.css"
import "@fortawesome/fontawesome-free/css/brands.css"




//js
import 'bootstrap'
import 'jquery/dist/jquery.min.js'
import 'jquery/dist/jquery.js'

/*Start of Progress Bar*/
// Progress bar include
import VueProgressBar from 'vue-progressbar';
/*Define Options for progress bar*/
const options = {
    color: '#bffaf3',
    failedColor: '#874b4b',
    thickness: '5px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
};
/*End of defination*/
/*Call the progress bar*/
Vue.use(VueProgressBar, options)
/*End of Progress Bar*/


/*Sweet alert start*/
import Swal from "sweetalert2";
window.swal = require('sweetalert2') // added here

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

window.Toast = Toast;
/*End of sweet alert*/

/*Start of Custom Event Listner Vue - Fires an event after a change*/
let Fire = new Vue();
window.Fire = Fire;
//axios




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  
}).$mount('#app')
