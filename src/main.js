import Vue from 'vue'
//import App from './App.vue'
import search from './search.vue'
import './quasar'
// import Router from 'vue-router'
import './styles/iconfont.css'

Vue.config.productionTip = false



new Vue({
  render: h => h(search),
}).$mount('#app')

// export default new Router({
//   routes:[
//     {
//       path:'/',
//       name:'App',
//       component:App
//     },
//     {
//       path:'/search',
//       name:'search',
//       component:search
//     }
//   ]
// })