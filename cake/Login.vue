<template>
<div>
    <div class="login_container">
        <div class="header">
        <div class="back" style="margin-left:4px;" @click="back"><img src="../../assets/1.svg" alt=""></div>
    <div class="login">
        <img src="../../resource/02.png" alt="">
        <span>登录</span>
    </div>
        </div>
    </div>
    <div class="login_input">
         <mt-field label="用户名" placeholder="请输入用户名" 
         :attr="{maxlenght:10}" v-model="uname" class="myinput"></mt-field>
          <mt-field label="密码" placeholder="请输入密码" 
         :attr="{maxlenght:10}" v-model="upwd" class="myinput" type="password"></mt-field>
         <mt-button size="large" style="border-radius:25px;width:90%;margin:auto;margin-top:5px;" class="mybutton" @click="login">登录</mt-button>
    <div class="reg1">
        <span @click="reg1">立即注册</span>
    </div>
    <div class="login-type">
    <div class="quick-login">
        <h4>其他登录方式</h4>
    </div>
    <div class="qq_wx">
         <a href="">
        <img src="../../assets/6.svg" alt="">
    <p>QQ</p>
    </a>
    <a href="">
        <img src="../../assets/7.svg" alt="">
        <p>微信</p>
    </a> 
    </div>
    </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
           uname:"",
           upwd:""
        }
    },
    methods:{
        login(){
          var u_name=this.uname; 
          var u_pwd=this.upwd;
          var reg=/^[a-z0-9_]{3,12}$/i;
          if(!reg.test(u_name)){
              this.$toast("用户名格式错误");
              return;
          }
          if(!reg.test(u_pwd)){
              this.$toast("密码格式错误");
              return;
        }
            var url="login";
            var obj={uname:u_name,upwd:u_pwd};
            this.axios.get(url,{params:obj}).then(result=>{
                console.log(result)
            if(result.data.code>0){
       localStorage.setItem("uname",u_name)
       localStorage.setItem("upwd",u_pwd);
                this.$toast("登录成功")
                this.$router.push("/Cart");
                }else{
                    this.$messagebox("用户名密码格式错误")
                }
                 });
    },
    back(){
       this.$router.go(-1);
    },
    reg1(){
        this.$router.push("/reg")
    }
    }
}
</script>
<style scoped>
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
.login{
    display: flex;
    margin:auto;
    align-items: center;
    color:#7a5c29;
}
.login img{
  width:26px;
  height:26px;
  margin-left:-6px;
}
.login_input{
padding-top:20px;
width:100%;
background-image:url(../../assets/38.jpg);
background-repeat: no-repeat;
background-size:cover;
height:600px;
}
.reg1{
    display: flex;
    margin-top:20px;
    justify-content:flex-end;
    padding-right:16px;
}
.login-type{
    margin-top:88px;
}
.quick-login {
    height: .8rem;
    position: relative;
    padding: .245rem 0 0;
    border-top: 1px solid #efefef;
}
.quick-login h4 {
    font-size: .12rem;
    font-weight: 400;
    position: absolute;
    left: 50%;
    color: #ccc;
    transform: translateX(-50%);
    top:-25px;
}
a{
    text-decoration:none !important;
}
.quick-login a {
    position: relative;
    width: .48rem;
    height: .48rem;
    color: #616161;
    margin: 0 .15rem;
    font-size: .14rem;
}
a img{
    width:28px;
    height:28px;
}
.qq_wx{
  display: flex;
  justify-content: center;
}
.qq_wx a{
    margin:40px;
}
.qq_wx p{
    margin:0;
    color:#999;
}
.myinput{
    width:90%;
    margin:auto;
    margin-top:4px;
}
</style>

