import { createStore } from 'vuex';
import home from './modules/home';
export default createStore({
  state: {
    webTitle: 'website',
    menuList: [{
      label: '首页',
      path: '/home'
    },{
      label:'工具',
      path:'/tool'
      }, {
        label: '关于',
        path: '/about'
      }],
    test: ''
  },
  mutations: {
    setTest(state, payload) {
      state.test = payload;
    }       
  },
  actions: {

  },
  getters: {

  },
  modules: {
    home
  }
})