<template>
    <div>
      <div class="header">
        <div class="back" style="margin-left:4px;" @click="back"><img src="../../assets/1.svg" alt=""></div>
    <div class="details">
        <span>新品上市了</span>
    </div>
        </div>
        <h4 style="color:#7a5c29;margin:0;padding:6px;">新品推荐</h4>
        <div class="details_content">
            <img src="../../assets/11.png" alt="">
            <div class="goods">
        <div class="new_goods" v-for="(item,i) of list" :key="i">
        <img :src="'http://127.0.0.1:3000/img/'+item.img"/>
        <p>{{item.title}}</p>
        <p>￥{{item.price}}</p>
      <mt-button @click="cart_btn" size="small" style="border-radius:20px;
      height:20px;background:#eccab1;font-size:12px;margin-left:50%;">立即购买</mt-button>   
        </div>
    </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
    list:[]
        }
    },
    created(){
    this.axios.get("cake_new").then(result=>{   
    this.list=result.data;
    })
    },
    methods:{
        back(){
       this.$router.go(-1);
    },
    cart_btn(){
    this.$router.push("/Cart")
    }  
    }
  
}
</script>
<style>
.login_container{
  display:flex; 
  }
  .header{
    display:flex;
    align-items: center;
    width:100%;
    height:60px;
    background-image: linear-gradient(90deg,#fab3b3,#ffbcb3 73%,#ffcaba);
    font-size:16px;
    text-align: center;
}
.details{
    display: flex;
    margin:auto;
    align-items: center;
}
.details span{
    color:#7a5c29;
}
.details_content img{
    width:100%;
    height:100px;
}
.goods{
color:#7a5c29;
padding:10px;
text-align: center;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
}
.goods .new_goods{
   width:49%;
}
.goods img{
    width:100%;
}
.goods p{
    margin:0;
    padding:1px;
}
</style>


