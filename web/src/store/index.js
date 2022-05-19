import { createStore } from 'vuex';
import home from './modules/home';
export default createStore({
  state: {
    webTitle: 'website',
    menuList: [{
      label: '首页',
      path: '/home'
    }, {
      label: '关于',
      path: '/about'
    }],
  },
  mutations: {

  },
  actions: {

  },
  getters: {

  },
  modules: {
    home
  }
})