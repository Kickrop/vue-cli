import Vue from 'vue'
import App from './App.vue'
// import Home from './Home.vue'
// // using global components
  // import Header from './components/Header.vue'
  // import ListGroup from './components/ListGroup.vue'
  // import ServerDetails from './components/ServerDetails.vue'
  // import Footer from './components/Footer.vue'
  // Vue.component('app-header', Header);
  // Vue.component('app-list-group', ListGroup);
  // Vue.component('app-server-details', ServerDetails);
  // Vue.component('app-footer', Footer);
// Vue.component('app-servers', Home);

new Vue({
  el: '#app',
  render: h => h(App)
})
