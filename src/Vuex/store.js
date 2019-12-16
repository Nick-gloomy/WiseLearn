import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 引入模块
import a from './modules/a/a'

const store = new Vuex.store ({
    
    modules:{
        a:a
    }

})

export default store.a