<template>
<div>
     <div class="reg_container">
        <div class="header">
        <div class="back" style="margin-left:4px;" @click="back"><img src="../../assets/1.svg" alt=""></div>
    <div class="reg">
        <img src="../../resource/03.png" alt="">
        <span>注册</span>
    </div>
        </div>
    </div>
    <div class="reg_input">
     <div class="reg_content">
         <mt-field label="用户名" placeholder="请输入用户名" 
         :attr="{maxlenght:10}" v-model="uname" class="my_input"></mt-field>
          <mt-field label="密码" placeholder="请输入密码" 
         :attr="{maxlenght:10}" v-model="upwd" class="my_input" type="password"></mt-field>
         <mt-field label="邮箱" placeholder="请输入邮箱" 
         :attr="{maxlenght:10}" v-model="email" class="my_input" type="email"></mt-field>
         <mt-button size="large" style="border-radius:25px;width:90%;margin:auto;margin-top:5px;"
          class="my_button" @click="reg">注册</mt-button>
    </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
        uname:"",
        upwd:"",
        email:""
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
    reg(){
        var u_name=this.uname; 
          var u_pwd=this.upwd;
          var u_email=this.email;
          console.log(u_name,u_pwd,u_email)
          var reg_name=/^[a-z0-9_]{3,12}$/i;
          var reg_pwd=/^[a-z0-9_]{6,8}$/i
          var email=/^[0-9A-Za-z][\.-_0-9A-Za-z]*@[0-9A-Za-z]+(\.[0-9A-Za-z]+)+$/i;
          if(!reg_name.test(u_name)){
              this.$toast("用户名格式错误");
              return;
          }
          if(!reg_pwd.test(u_pwd)){
              this.$toast("密码格式错误");
              return;
        }
          if(!email.test(u_email)){
              this.$toast("邮箱格式错误");
              return;
        }
            var url="reg_name";
            var obj={uname:u_name,upwd:u_pwd,email:u_email};
            this.axios.get(url,{params:obj}).then(result=>{
                console.log(result)
            if(result.data.code>0){
                this.$toast("用户名可用")
                }else{
                    this.$messagebox("用户名不可用")
                }
                 });
            var url="cake_reg";
            var obj={uname:u_name,upwd:u_pwd,email:u_email};
            this.axios.get(url,{params:obj}).then(result=>{
                console.log(result)
            if(result.data.code==1){
                this.$toast("注册成功")
                this.$router.push("/Login")
                }else{
                    this.$messagebox("注册失败")
                }
                 });
    }
    }
}
</script>
<style scoped>
.reg_container{
width:100%;
display: flex;
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
.reg{
    display: flex;
    margin:auto;
    align-items: center;
    color:#7a5c29;
}
.reg img{
  width:26px;
  height:26px;
  margin-left:-6px;
}
.reg_input{
width:100%;
background-image:url(../../assets/55.jpg);
background-repeat: no-repeat;
height:610px;
 background-size:cover;
}
.my_input{
margin:auto;
width:90%;
}
.reg_content{
    padding-top:10%;
}
</style>


