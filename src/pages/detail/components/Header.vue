<template>
  <div>
    <router-link class="abs-back" v-show="showAbs" to="/">
      <div class="iconfont abs-back-arrow">&#xe606;</div>
    </router-link>
    <div class="city-title" v-show="!showAbs" :style="opacityStyle">
      景点详情
      <router-link to="/">
        <div class="iconfont header-left">&#xe606;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll() {//顶部渐隐渐显效果
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
	},
	//组件创建最初始
  activated() {
    window.addEventListener("scroll", this.handleScroll);//滑动插件
	},
	//页面替换新页面时
	deactivated() {
		window.removeEventListener("scroll", this.handleScroll);//解绑滑动插件
	},
};
</script>

<style lang="stylus" scoped>
.abs-back {
  position: absolute;
  top: 0.3rem;
  left: 0.3rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 1rem;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;

  .abs-back-arrow {
    color: #fff;
    font-size: 0.2rem;
    line-height: 0.5rem;
  }
}

.city-title {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 0.86rem;
  line-height: 0.86rem;
  background-color: #17c0c8;
  color: #fff;
  font-size: 0.32rem;
  text-align: center;
  z-index: 3;

  .header-left {
    position: absolute;
    left: 0.2rem;
    top: 0;
    font-size: 0.16rem;
    color: #fff;
  }
}
</style>
