import Vue from 'vue'
import App from './App.vue'
import "font-awesome/css/font-awesome.min.css"
import VueRouter from 'vue-router'
import Routes from './Routes'
import VueCookies from 'vue-cookies'
 
 
 Vue.use(VueCookies)
 Vue.use(VueRouter)
 // set default config
 Vue.$cookies.config('7d')
 // set global cookie
 Vue.$cookies.set('theme', 'default');
 Vue.$cookies.set('hover-time', '1s');


 const router = new VueRouter({
   routes: Routes,
   mode: 'history'

 })

//defined as global component
Vue.component(
  "VueFontawesome",
  require("vue-fontawesome-icon/VueFontawesome.vue").default
);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')



window.addEventListener("load", () => {
  let checkbox = document.getElementsByTagName('input');
  let notif = document.getElementById('nav-not');

  // check if at least one of the checkboxes on the DOM is checked
  const checkboxCheck = () => {
    for (let i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        return true;
      }
    }
    return false;
  }

  // set red dot
  const setNotif = () => {
    if (checkboxCheck()) {
      // console.log('true');
      notif.style.visibility = 'visible';
      notif.style.opacity = '1';
    } else {
      // console.log('false');
      notif.style.visibility = 'hidden';
      notif.style.opacity = '0';
    }
  }

  // check once if red dot is needed
  setNotif();

  // watch any change
  document.addEventListener('click', setNotif);

});