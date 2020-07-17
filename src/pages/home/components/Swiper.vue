<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper_img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        loop: true
      }
    };
  },
  computed: {
    showSwiper() {
      return this.list.length;
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper {
  width: 100%;
  overflow: hidden;
  height: 0;
  padding-bottom: 32.25%;

  .swiper_img {
    width: 100%;
  }
}

// 穿透 所有在.wrapper下面的.swiper-pagination-bullet-active更改小圆点的背景颜色
.wrapper>>> .swiper-pagination-bullet-active {
  background: #fff;
}
</style>