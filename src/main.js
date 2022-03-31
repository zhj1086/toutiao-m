import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
// 引入vant组件库
import Vant from 'vant'
// 引入vant组件库样式
import 'vant/lib/index.css'
// 注册并使用vant组件
Vue.use(Vant)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
