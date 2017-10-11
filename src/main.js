/**
 * Entry-point module for the vue js application
 * 
 * @author Riyaz Ali
 */

// Library imports
import Vue from "vue";

window['$app'] = new Vue({
  render: h => h('h1', ['Hello World!'])
}).$mount("#application-mount");
