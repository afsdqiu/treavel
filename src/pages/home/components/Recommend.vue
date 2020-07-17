<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <div class="travel-box">
      <router-link tag="div" class="adv-box border-bottom" v-for="item in list" :key="item.id" :to="{name: 'Detail', params:{id: item.id,num: num}}">
        <img class="adv-img" :src="item.imgUrl" />
        <p class="adv-title">{{item.title}}</p>
        <p class="adv-native">{{item.desc}}</p>
        <p class="adv-money"><span>¥</span>{{item.money}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend",
  props: {
    list: Array,
  },
  data() {
    return {
      num:"123"
    };
  },
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.recommend-title {
  width: 100%;
  line-height: 0.8rem;
  font-size: 0.34rem;
  text-indent: 0.1rem;
  margin-top: 0.2rem;
  background-color: #eee;
}

.travel-box {
  width: 100%;
  background-color: #fff;

  .adv-box {
    width: 100%;
    overflow: hidden;
    height: 0;
    padding-bottom: 22%;
    /* padding-bottom的值为图片的height/width的值 */
    /* 此图尺寸为240*160故padding-bottom为160/240=66.67% */
  }

  .adv-img {
    width: 2.2rem;
    float: left;
    padding: 0.1rem;
  }

  .adv-title {
    font-size: 0.24rem;
    margin-left: 2.3rem;
    padding-top: 0.15rem;
    ellipsis();
  }

  .adv-native {
    font-size: 0.24rem;
    margin-left: 2.3rem;
    padding-top: 0.15rem;
  }

  .adv-money {
    font-size: 0.24rem;
    margin-left: 2.3rem;
    color: #ff7400;
    padding-top: 0.15rem;
    font-weight: bold;
  }
}
</style>