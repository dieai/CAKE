<template>
    <div>
        <img :src="focused?selectedImage:normalImage"/>
    </div>
</template>
<script>
export default {
    props:{
         focused:false,
         selectedImage:{default:""},
         normalImage:{default:""}
    },
    data(){
        return{}
    }
}
</script>
<style scoped>
</style>
