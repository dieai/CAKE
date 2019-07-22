<template>
    <div>
 <mt-swipe :auto="4000">
  <mt-swipe-item  v-for="(item,i) of list" :key="i">
      <img :src="'http://127.0.0.1:3000/'+item.img"/></mt-swipe-item>
 </mt-swipe>
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
        this.carousel1();
    },
    methods:{
  carousel1(){
      this.axios.get("carousel").then(result=>{
          console.log(result)
          this.list=result.data;
      })
  }
    }

    }
</script>
<style scoped>
.mint-swipe{
    height:160px;
    }
img{
    width:100%;
    height:160px;
}
</style>

