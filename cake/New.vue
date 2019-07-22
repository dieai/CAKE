<template>
    <div>
    <div class="message_top">
        <h3 style="color:#7a5c29;">消息</h3>
    </div>
    <div class="new">
    <div class="new_list" v-for="(item,i) of list" :key="i">
        <img :src="'http://127.0.0.1:3000/img/'+item.img"/>
    <div class="title">
    <h4>{{item.title}}</h4>
    <p @click="see">{{item.subtitle}}</p>
    </div>
    <div class="time">
    <p>{{item.time}}</p>
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
    methods:{
    see(){
        this.$router.push("/Details")
    }
    },
    created(){
  this.axios.get("cake_msg").then(result=>{   
    this.list=result.data;
    })
    }
    
}
</script>
<style scoped>
.message_top{
display:flex;
width:100%;
height:60px;
background-image:linear-gradient(90deg,#ffcaba,#ffcaba 73%,pink);
justify-content: center;
}

.new_list{
    border-bottom:1px solid#000;
    display:flex;
    padding:10px;
    justify-content: space-between;
    position: relative;
    }
.new_list img{
width:60px;
 height:60px;
}
.new_list p,.new_list h4{
    margin:0;
}
.title h4{
 text-align:left;
}
.title{
    position: absolute;
    left:75px;
    top:20px;
}
</style>


