<template>
    <div>
<div class="header">
    <div class="back" style="margin-left:4px;" @click="back"><img src="../../assets/1.svg" alt=""></div>
<div class="store">
        <span>我的收藏
        </span>
    </div>
   </div>
   <div class="mine_store">
<div class="store_content">
<img class="store_img" src="../../assets/s1.jpg" alt="">
<div style="padding:6px;">
<p style="font-size:20px;font-weight:700;">松鼠小胖</p>
<video style="width:300px;hieght:120px;" src="../../assets/video1.mp4" autoplay controls loop></video>
</div>
</div>
<div style="padding-left:30px;">
<h3>哈林哈顿工艺蛋糕</h3>
<h6>传统的工艺,手工烘培，最优质的美味
    <span>07-19</span></h6>

</div>
<div class="store_content1"  v-for="(item,i) of list" :key="i">
<div>
<img class="store_img" :src="'http://127.0.0.1:3000/img/'+item.img" alt="">
</div>
<div style="padding:4px;">
<p style="font-size:20px;font-weight:700;">{{item.title}}</p>
<img class="store_img_url" :src="'http://127.0.0.1:3000/img/'+item.img_url" />
</div>
<div class="store_info">
    <p>{{item.subtitle}}</p>
    <p style="font-size:12px;width:50%;text-align:center">{{item.time}}</p>
</div>
<img @click="delete_store" :data-id="item.id" src="../../assets/delete.svg" alt="">
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
   this.loadMore();
    },
    methods:{
    loadMore(){
        var url="cake_store";
      this.axios.get(url).then(result=>{
        this.list = result.data;
      })
    },
     back(){
     this.$router.go(-1);
    },
    delete_store(e){
        //1.获取当前商品id
        var id=e.target.dataset.id;
        console.log(id)
        //2.显示交互确认框
         this.$messagebox.confirm("是否删除指定数据").then(action=>{
             var url="delete";
             var obj={id};
             this.axios.get(url,{params:obj}).then(result=>{
                 this.loadMore();
                 console.log(result)
             })
           console.log(action)
         }).catch(err=>{
             return;
           console.log(err)
         })
           
        },
    }
    }
</script>
<style scoped>
.header{
    display:flex;
    align-items: center;
    width:100%;
    height:60px;
    background-image: linear-gradient(90deg,#fab3b3,#ffbcb3 73%,#ffcaba);
    font-size:16px;
    text-align: center;
}
.store{
    display: flex;
    margin:auto;
    align-items: center;
    color:#7a5c29;
}
.store_img{
    width:40px;
    height:40px;
    border-radius:50%;
}
.store_content,.store_content1{
    display:flex;
    padding:10px;
     justify-content:space-between;
}
p,h3,h6{
    margin:0;
}
.store_img_url{
    width:100px;
    height:100px;
}
.store_info{
 display: flex;
 justify-content:space-between;
 align-items:center;

}
</style>


