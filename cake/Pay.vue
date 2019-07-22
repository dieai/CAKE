<template>
    <div class="pay">
           <div class="header">
        <div class="back" style="margin-left:4px;" @click="back"><img src="../../assets/1.svg" alt=""></div>
    <div class="pay_html">
        <span>支付</span> 
    </div>
     <div class="index" @click="index"><span>返回首页</span></div>
        </div>
        <div class="pay_success">
    <img src="../../assets/success.svg" alt="">
    <span>支付成功!</span>
        </div>
        
        <div>
            <p @click="rec">还想看看</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
      back(){
       this.$router.go(-1);
      },
      rec(){
        this.$router.push('/rec')
      },
      index(){
       this.$router.push('/index')   
      }
    } 
}
</script>
<style scoped>
.pay_success{
    display: flex;
    justify-content: center;
    align-items: center;
    padding:10px;

}
 .header{
    display:flex;
    align-items: center;
    width:100%;
    height:60px;
    background-image: linear-gradient(90deg,#fab3b3,#ffbcb3 73%,#ffcaba);
    font-size:16px;
    justify-content:space-between;
}
.pay_html{
    display: flex;
    align-items: center;
    color:#7a5c29;
    font-weight:900;   
}
p{
color:#7a5c29;
font-weight:900;
padding:10px; 
}
.index{
color:#7a5c29;
margin-right:4px;
}
</style>


