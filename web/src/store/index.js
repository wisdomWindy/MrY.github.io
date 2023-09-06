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
    },{
      label:'工具',
      path:'/tool'
    }],
    test: ''
  },
  mutations: {
    setTest(state, payload) {
      console.log('store', state, payload);
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