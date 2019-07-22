<template>
<div class="navbar">
<div class="content-left">
    <img src="../../assets/5.svg" alt="">
</div>
<div class="search_input">
  <mt-field placeholder="请输入内容" ></mt-field>
</div>
<div class="content-right">
    <img @click="Rec"  src="../../assets/3.svg" alt="">
    <img @click="Cart" src="../../assets/4.svg" alt="">
</div>
</div>
</template>
<script>
export default {
    data(){
        return{
      value:""
        }
    },
    methods:{
        Cart(){
      this.$router.push("/Cart");     
        },
        Rec(){
      this.$router.push("/Rec")
        }
    }
}
</script>
<style scoped>
.navbar{
display:flex;
background-color: #fff;
position: fixed;
width: 100%;
z-index: 99;
height:60px;
justify-content:space-around;
background:pink;
}
.search_input{
    margin-left:4px;   
}
.mint-cell{
    min-height:34px;
    margin-top:10px;
}
.content-right{
display:flex;
justify-content:center;
margin-left:7px;
}
.content-left img{
padding-top:15px;
padding-left:5px;
}
.content-right img{
    padding:10px;

}
</style>


