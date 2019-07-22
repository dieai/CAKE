//router.js 引入路由
import Vue from 'vue'
import Router from 'vue-router'
//自定义组件
import New from "./components/cake/New.vue"
//1.引入头部组件
import Top from "./components/cake/Top.vue"
//2.引入轮播组件
import Swipe from "./components/cake/Swipe.vue"
//3.引入面板组件
import Container from "./components/cake/Container.vue"
//4.引入我的组件
import Mine from "./components/cake/Mine.vue"
//5.引入登录组件
import Login from "./components/cake/Login.vue"
//6.引入注册组件
import Reg from "./components/cake/Reg.vue"
//7.引入产品组件
import Product from "./components/cake/Product.vue"
//8.引入购物车组件
import Cart from "./components/cake/Cart.vue"
//9.引入主页组件
import Index from "./components/cake/Index.vue"
import TabbarIcon from "./components/cake/TabbarIcon.vue"
import Rec from "./components/cake/Rec.vue"
import Home from "./components/cake/Home.vue"
import Details from "./components/cake/Details.vue"
import About from "./components/cake/About.vue"
import Pay from "./components/cake/Pay.vue"
import Store from "./components/cake/Store.vue"
Vue.use(Router)
//2.配置路径
export default new Router({
  routes: [
    {path:'/index',name:'index',component:Index,
    children:[
      {path:'/new',name:'New',component:New},
      {path:'/rec',name:'Rec',component:Rec},
      {path:'/mine',name:'Mine',component:Mine} 
    ]},
    {path:'/Home',component:Home},
    {path:'/Top',component:Top},
    {path:'/Swipe',component:Swipe},
    {path:'/Container',component:Container},
    {path:'/Login',name:'login',component:Login} ,
    {path:'/About',component:About},
    {path:'/Reg',component:Reg,meta:{requireAuth:true}},
    {path:'/Product',component:Product},
    {path:'/Cart',name:'cart',component:Cart},
    {path:'/TabbarIcon',name:'tabbaricon',component:TabbarIcon},
    {path:'/Details',name:'details',component:Details},
    {path:'/pay',name:'pay',component:Pay},
    {path:'/Store',name:'store',component:Store}
  ]
})
 
