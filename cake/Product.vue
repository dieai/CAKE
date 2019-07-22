<template>
<div>
    <div class="product">
    <p style="font-size:14px;">HOT PRODUCTS</p>
    <h3>当季热卖</h3>
    </div>
   <div class="product_app" 
  v-infinite-scroll="load"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
       <div class="goods-item" v-for="(item,i) of list" :key="i">
           <img :src="'http://127.0.0.1:3000/img/'+item.img_url"/>
           <h4>{{item.title}}</h4>
           <p>{{item.subtitle}}</p>
           <div class="info">
             <span class="now">￥{{item.price}}</span>
           </div>
           <div class="cart">
        <mt-button @click="cart_btn" size="small" style="border-radius:20px;height:20px;
        background:#eccab1;font-size:12px;">立即购买</mt-button>
           </div>
       </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           list:[],
           pno:0,//页码
           ps:4,//页数
           loading:false
        }
    },
    methods:{
 cart_btn(){
    this.$router.push("/Cart")
        },
  loadMore(){
      var url="product";
      this.pno++;
      var obj={pno:this.pno,pageSize:this.ps};
      this.axios.get(url,{params:obj}).then(result=>{
        //   this.list=result.data.data//数据覆盖
        var rows = this.list.concat(result.data.data);
        this.list = rows;
      })
        },
    load() {
  this.loading = true;
var t=setTimeout(() => {
 this.loading = false
 this.loadMore()
  }, 2500);
  
}
    },
    created(){
      this.loadMore();
      this.load();
    },
}
</script>
<style scoped>
.product{
 display:flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 color:#7a5c29;}
 .product p{
     margin-bottom:0;
 }
.product_app{
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between ;
    padding:4px; 
    }
.product_app .goods-item{
    width:49%;
    box-sizing: border-box;
    margin:2px 0;
    padding:10px;
    display:flex;
    flex-direction: column;
    min-height:247px;
    border-radius:5px;
    align-items: center;
}
.goods-item{
    background-color:#ffe9eb;
    color:#7a5c29;
}
.product_app .goods-item img{
    width:100%;
}
.goods-item p{
    font-size:12px;
    margin-top:0;
}
.goods-item h4{
    margin-top:8px;
    margin-bottom:0;
}
.now{
    font-weight:800;
    color:#ff5f5f;
}
.cart{
    margin-left:48%;
}
</style>


