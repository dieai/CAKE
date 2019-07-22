import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入有序
//第三方组件库在下方引入
//1.完整引入mint-ui
import MintUI from "mint-ui"
//2.单独引入mint-ui样式
import'mint-ui/lib/style.css'
//3.将mint-ul注册vue
Vue.use(MintUI);
//4.引入图标字体样式文件
import "./font/iconfont.css"
//5.引入axios.js
import axios from "./axios.js"
//6.引入vuex
import Vuex from "vuex"
//7.注册vuex组件
Vue.use(Vuex)
//8.创建store
var store=new Vuex.Store({
  //vuex中全局共享的数据
  state:{
    cartCount:0,
    islogin:''
  },
  //修改vuex中全局共享数据
  mutations:{
    //购物车数量加1
    increment(state){
      state.cartCount++;
    },
    updateCount(state,c){
      state.cartCount+=c;
    },
    clear(state){
      state.cartCount=0;
    },
    login:(state,n) => {
      //传入登录状态islogin
      let islogin = JSON.parse(n);
      localStorage.setItem('islogin',JSON.stringify(islogin));
      console.log(islogin);
      state.islogin = islogin;
    }
  },
  //获取vuex中全局共享的数据
  getters:{
    getCartCount:function(state){
      return state.cartCount;
    }
  }
})
//9.将store保存vue实例中
Vue.config.productionTip=false
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
/*全局守卫*/ 
router.beforeEach((to,from,next)=>{
  var un=localStorage.getItem("uname")
  var up=localStorage.getItem("upwd")
  if(to.name=="pay"||to.name=="store"||to.name=="cart"){
    if(un&&up){
      next();
    }else{
      router.push({path:"/Login"});
      next(false)
    }
  }else{
    next();}
})
