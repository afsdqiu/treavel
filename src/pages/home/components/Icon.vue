<template>
  <div class="icons">
    <swiper :options="swiperOptions" v-if="list.length">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <router-link tag="div" class="icon-box" v-for="item in page" :key="item.id" :to="'/tab/' + item.id">
          <img class="icon-img" :src="item.imgUrl" />
          <p>{{item.desc}}</p>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "icons",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOptions: {
        // 设置自动轮播
        autoplay: false,
        // 设置轮播可循环
        loop: false
      }
    };
  },
  computed: {
    showSwiper() {
      return this.list.length;
    },
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        console.log(page);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.icons {
  width: 100%;
  padding-bottom: 50%;
  overflow: hidden;
  height: 0;

  .icon-box {
    width: 25%;
    overflow: hidden;
    float: left;

    .icon-img {
      display: block;
      width: 76%;
      margin: 0 auto;
    }

    p {
      width: 100%;
      font-size: 0.28rem;
      text-align: center;
      line-height: 0.45rem;
      ellipsis();
    }
  }
}
</style>