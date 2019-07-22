<template>
<div style="padding-bottom:50px;">
<top></top>
<swipe class="swipe"></swipe>
<video src="../../assets/cake.mp4" controls autoplay loop></video>
<product></product>
</div>
</template>
<script>
import Top from "./Top.vue";
import Swipe from "./Swipe.vue";
import Product from "./Product.vue";
 import myIndex from "./Index.vue"
export default {
data() {
return {
};
},
components: {
"top":Top,
"swipe":Swipe,
"product":Product,
}
};
</script>
<style scoped>
.swipe{
   padding-top:60px;
    height:160px;
}
video{
    width:100%;
}

</style>



