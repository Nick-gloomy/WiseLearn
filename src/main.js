import Vue from 'vue'

// 引入 App
import App from './App.vue'

// 引入Element
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

// 引入 Router
import router  from './router' 


// 引入 axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios , axios)


// 引入 echarts
import echarts from 'echarts'
Vue.use(echarts)


// 引入Vuex
// import store from './Vuex/store'




Vue.config.productionTip = false

new Vue({

  render: h => h(App),
  router,
  // store,

}).$mount('#app')
