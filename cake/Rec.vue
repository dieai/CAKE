<template>
<div class="rec_goods" style="padding-bottom:50px;">
    <div class="rec_top">
       <h3 style="color:#7a5c29;">推荐</h3>
    </div> 
    <div class="rec_find">
    <h4 style="color:#7a5c29;margin:0;padding:6px;">发现好物</h4>
    <img class="find_img" src="../../assets/09.png" alt="">
    <div class="goods">
        <div class="find_goods" v-for="(item,i) of list" :key="i">
        <img :src="'http://127.0.0.1:3000/img/'+item.img_url"/>
        <p>{{item.title}}</p>
        <p>￥{{item.price}}</p>
      <mt-button @click="cart_btn" size="small" style="border-radius:20px;
      height:20px;background:#eccab1;font-size:12px;margin-left:50%;">立即购买</mt-button>   
        </div>
    </div>
    <img class="find_img" src="../../assets/07.png" alt="">
      <div class="goods">
        <div class="find_goods" v-for="(item,i) of list1" :key="i">
        <img :src="'http://127.0.0.1:3000/img/'+item.img"/>
        <p>{{item.title}}</p>
        <p>￥{{item.price}}</p>
      <mt-button @click="cart_btn" size="small" style="border-radius:20px;
      height:20px;background:#eccab1;font-size:12px;margin-left:50%;">立即购买</mt-button>   
        </div>
    </div>
    </div>
    <img class="find_img" src="../../assets/08.png" alt="">
     <div class="goods"> 
        <div class="find_goods" v-for="(item,i) of list2" :key="i">
        <img :src="'http://127.0.0.1:3000/img/'+item.img"/>
        <p>{{item.title}}</p>
        <p>￥{{item.price}}</p>
      <mt-button @click="cart_btn" size="small" style="border-radius:20px;
      height:20px;background:#eccab1;font-size:12px;margin-left:50%;">立即购买</mt-button>   
        </div>
    </div>
    <img class="find_img" src="../../assets/11.png" alt="">
    <div class="goods"> 
        <div class="find_goods" v-for="(item,i) of list3" :key="i">
        <img :src="'http://127.0.0.1:3000/img/'+item.img"/>
        <p>{{item.title}}</p>
        <p>￥{{item.price}}</p>
      <mt-button @click="cart_btn" size="small" style="border-radius:20px;
      height:20px;background:#eccab1;font-size:12px;margin-left:50%;">立即购买</mt-button>   
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        list:[],
        list1:[],
        list2:[],
        list3:[]
    }
    },
    created(){
     this.axios.get("rec3").then(result=>{   
    this.list3=result.data;
    }),
    this.axios.get("rec2").then(result=>{   
    this.list2=result.data;
    }),
    this.axios.get("rec1").then(result=>{   
    this.list1=result.data;  
    }),    
    this.axios.get("rec").then(result=>{   
    this.list=result.data;
    })
    },   
    methods:{
        cart_btn(){
    this.$router.push("/Cart")
    }  
}
}
</script>
<style>
.rec_top{
display:flex;
width:100%;
height:60px;
background-image:linear-gradient(90deg,#ffcaba,#ffcaba 73%,pink);
justify-content: center;
}
h4{
text-align: center;
}
.goods{
color:#7a5c29;
padding:10px;
text-align: center;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
}
.goods .find_goods{
   width:49%;
}
.goods img{
    width:100%;
}
.goods p{
    margin:0;
    padding:1px;
}
.find_img{
    width:100%;
    height:80px;
}
</style>


