import {createStore} from 'vuex';

export default createStore({
  state:{
    webTitle:'website',
      menuList:[{
        label:'首页',
        path:'/home'
      },{
        label:'关于',
        path:'/about'
      }],
  },
  mutations:{

  },
  actions:{

  },
  getters:{

  },
  modules:{

  }
})