<template>
<main>
<section>
<transition>
<router-view></router-view>
</transition>
</section>
<section v-if="thePath">
<home></home>
</section>
<section>
<img v-if="btnFlag" class="go-top" src="../../assets/top.svg" @click="backTop">
</section>
<footer class="comm-nav">
<router-link :to="{path:'/index'}">
<div class="nav-index" @click="selected(0)">
<div class="nav-img-box">
<img
:src="currentIndex[0].isSelected?require('../../assets/8x.svg'):require('../../assets/8.svg')"
/>
</div>
<div class="nav-index">首页</div>
</div>
</router-link>
<router-link :to="{path:'/new'}">
<div class="nav-new" @click="selected(1)">
<div class="nav-img-box">
<img
:src="currentIndex[1].isSelected?require('../../assets/9x.svg'):require('../../assets/9.svg')"
/>
</div>
<div>消息</div>
</div>
</router-link>
<router-link :to="{path:'/rec'}">
<div class="nav-rec" @click="selected(2)">
<div class="nav-img-box">
<img
:src="currentIndex[2].isSelected?require('../../assets/10x.svg'):require('../../assets/10.svg')"
/>
</div>
<div>推荐</div>
</div>
</router-link>
<router-link :to="{path:'/mine'}">
<div class="nav-mine" @click="selected(3)">
<div class="nav-img-box">
<img
:src="currentIndex[3].isSelected?require('../../assets/11x.svg'):require('../../assets/11.svg')"
/>
</div>
<div>我的</div>
</div>
</router-link>
</footer>
</main>
</template>
<script>
import  Top from "./Top.vue"
import Swipe from "./Swipe.vue";
import Product from "./Product.vue";
import Home from "./Home.vue"
export default {
data() {
return {
btnFlag:false,
thePath: true,
currentIndex: [
{ isSelected: false },
{ isSelected: false },
{ isSelected: false },
{ isSelected: false }
]
};
},
watch: {
$route(to, from) {
var active1 = to.path;
this.change(active1)
}
},
created() {
var active2 = this.$route.path;
this.change(active2)
},
methods: {
selected(n) {
for (var i = 0; i < this.currentIndex.length; i++) {
if (n == i) {
this.currentIndex[i].isSelected = true;
} else {
this.currentIndex[i].isSelected = false;
}
}
},
change(active) {
if (active == "/new") {
this.thePath = false;
this.currentIndex[1].isSelected = true;
} else if (active == "/rec") {
this.thePath = false;
this.currentIndex[2].isSelected = true;
} else if (active == "/mine") {
this.thePath = false;
this.currentIndex[3].isSelected = true;
} else if (active == "/index") {
this.thePath = true;
this.currentIndex[0].isSelected = true;
} 
},
 // 点击图片回到顶部方法，加计时器是为了过渡顺滑
  backTop () {
      let that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
  },
 
  // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
  scrollToTop () {
    let that = this
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    that.scrollTop = scrollTop
    if (that.scrollTop > 80) {
      that.btnFlag = true
    } else {
      that.btnFlag = false
    }
  }
},
mounted () {
  window.addEventListener('scroll', this.scrollToTop)
},
destroyed () {
  window.removeEventListener('scroll', this.scrollToTop)
},

components: {
"top":Top,
"swipe":Swipe,
"product":Product,
"home":Home
}
};
</script>
<style scope>
.comm-nav   {
background:rgba(255, 255, 255, 0.6);
position: fixed;
bottom: 0;
left: 0;
display: flex;
flex-direction: row;
width: 100%;
height:50px;

border-top: 1px solid #f0ebeb;
justify-content: space-around;
font-size: 0.25rem;
color: #3e3e3e;
text-align: center;
}
.comm-nav a {
display: block;
width: 25%;
padding:10px 0;
color:#a8a8a8;
}
.nav-img-box {
height: 0.44rem;
position:relative;
top:10px;
padding:8px;
}
.nav-img-box img{
    position:relative;
    top:-20px;
    width:22px;
    height:22px;
}
.nav-active {
color: #f7c902 !important;
}
.mint-cell-wrapper {
    margin-top: 4px;
    background-color: #fff;
}
.go-top{
position:fixed;
top:70%;
left:90%;
bottom:0%;
z-index:999; 
}
.mint-cell-wrapper {
    margin: 0 !important;
    background-color: #fff;
}
</style>

