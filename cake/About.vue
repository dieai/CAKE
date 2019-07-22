<template>
    <div>
        <div class="header">
        <div class="back" style="margin-left:4px;" @click="back"><img src="../../assets/1.svg" alt=""></div>
    <div class="about">
        <span>关于我们
        </span>
    </div>
   </div>
   <div class="about_content">
        面向无界零售的未来，京东积极扩展线上线下的融合模式。京东旗下生鲜超市7FRESH一直致力于全球生鲜供应链的打造、不断强化原产地的直采能力，通过线上线下相结合为消费者创造最佳客户体验。目前生鲜SKU超32万，覆盖海鲜水产、水果、蔬菜、肉禽蛋品等丰富的品类，可为消费者提供超过50个国家和地区的生鲜产品。

京东新通路打造创新型智能门店——京东便利店，为品牌商打造透明可控、精准高效的销售新通路，为全国中小门店提供正品货源和京东的品牌、模式及管理，让优质商品和服务直达零售终端。

京东企业业务为政府、企事业单位提供智能化、定制化采购解决方案，提高采购效率，合理管控成本，目前拥有超700万活跃企业客户，在企业采购电商化市场中份额达51.2%。

京东数字科技集团：科技助力产业数字化
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods:{
    back(){
     this.$router.go(-1);
    }
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
.about{
    display: flex;
    margin:auto;
    align-items: center;
    color:#7a5c29;
}
.about_content{
    padding:10px;
}
</style>



