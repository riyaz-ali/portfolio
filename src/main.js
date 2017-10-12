/**
 * Entry-point module for the vue js application
 * 
 * @author Riyaz Ali
 */

// Library imports
import Vue from "vue";

// root application component
import App from "./App.vue";

window['$app'] = new Vue({
  render: h => h(App)
}).$mount("#application-mount");
