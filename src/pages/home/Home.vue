<template>
  <div>
    <Header></Header>
    <home-swiper :list="swiperList"></home-swiper>
    <HomeIcon :list="iconList"></HomeIcon>
    <HomeRecommend :list="recommendList"></HomeRecommend>
    <HomeWeekend :list="weekendList"></HomeWeekend>
    <ScrollBtn></ScrollBtn>
  </div>
</template>

<script>
import Header from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcon from "./components/Icon";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import ScrollBtn from 'common/scrollToTop/scrollToTop';
import axios from "axios";
import { mapState } from 'Vuex';
export default {
  name: "Home",
  components: {
    Header,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend,
    ScrollBtn
  },
  data() {
    return {
      lastCity:'',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  computed:{
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json?city=" + this.city).then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    }
  },
  mounted() {
    this.lastCity = this.city
    this.getHomeInfo();
  },
  // 修改缓存城市
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo();
    }
  }
};
</script>

<style>
</style>