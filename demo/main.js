import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import plugin from '../src/index'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(plugin)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes
})

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
}).$mount('#app')
