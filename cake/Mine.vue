<template>
 <div>
    <div class="mine_top">
      <h3 style="color:#7a5c29;">我的</h3>
    </div> 
    <div>
    <div class="mine">
    <div class="mine_login" @click="my_login">
        <img src="../../assets/12.svg" alt="">
        <span>我的登录</span>
    </div>
    <div class="mine_order" @click="my_order">
        <img src="../../assets/13.svg" alt="">
        <span>我的订单</span>
    </div>
    <div class="mine_store" @click="my_store">
        <img src="../../assets/14.svg" alt="">
        <span>我的收藏</span>
    </div>
    <div class="mine_we" @click="my_mine">
        <img src="../../assets/16.svg" alt="">
        <span>关于我们</span>
    </div>
    <div class="install" @click="my_install">
        <img src="../../assets/15.svg" alt="">
        <span>设置</span>
    </div>
    </div>
    </div>
 </div>
</template>
<script>

export default {
    data(){
        return{}
    },
    methods:{
        my_login(){
            this.$router.push("/Login")
        },
        my_order(){
        
        },
        my_store(){
            this.$router.push("/Store")

        },
        my_install(){

        },
        my_mine(){
        this.$router.push("/About")
        }
    }
}
</script>
<style>
.mine_top{
display:flex;
width:100%;
height:60px;
background-image:linear-gradient(90deg,#ffcaba,#ffcaba 73%,pink);
justify-content: center;
}
.mine div{
    display: flex;
    border:1px solid #ccc;
    padding:10px;
}
.mine div span{
    padding-left:6px;
}
.mine div img{
    width:24px;
    height:24px;
}
.mine{
    width:100%;
    background-image: url(../../assets/39.jpg);
    background-repeat: no-repeat;
    height:617px;
}
</style>

