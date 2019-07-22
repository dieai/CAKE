<template>
	<div>
		<div>454</div>
		<div>454</div>
		<div>454</div>	
		<div>454</div>
		<div>454</div>
		<div>454</div>
		<div>454</div>
		<div>454</div>
		<div>454</div>
		<div>454</div>
		<div>454</div>
		<div>454</div>
		<div>454</div>
		<div>454</div><div>454</div>
		<div>454</div>
		<div>454</div><div>454</div><div>454</div>
		<hr>
		<hr>
		<div>454</div>

		<div>454</div>
		<div>454</div>
		<div>454</div>
		<div>454</div>
		<div>454</div>
		<div>454</div>
		<hr>
		<hr>
		<div>454</div>
		<div>454</div>
		<div>454</div>
		<div>ewewewew</div>
		<div>sddsds</div>
		<div>454</div>
		<div>454</div>
		<img v-if="btnFlag" class="go-top" src="../../assets/9.svg" @click="backTop">
	</div>
</template>
<script>
export default {
	data(){
		return{
			btnFlag:false
		}
	},
	mounted () {
  window.addEventListener('scroll', this.scrollToTop)
},
destroyed () {
  window.removeEventListener('scroll', this.scrollToTop)
},
 
 
methods: {
  // 点击图片回到顶部方法，加计时器是为了过渡顺滑
  backTop () {
      let that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
  },
 
  // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
  scrollToTop () {
    let that = this
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    that.scrollTop = scrollTop
    if (that.scrollTop > 80) {
      that.btnFlag = true
    } else {
      that.btnFlag = false
    }
  }
}
}
</script>

