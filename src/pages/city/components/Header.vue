<template>
  <div class="city-title">
    
    <router-link to="/"><div class="iconfont header-left">&#xe606;</div></router-link>
  </div>
</template>

<script>
export default {
  name: "CityHeader"
};
</script>

<style lang="stylus" scoped>
.city-title 
  position relative  
  width: 100%;
  height: 0.86rem;
  line-height: 0.86rem;
  background-color: #17c0c8;
  color: #fff;
  font-size: 0.32rem;
  text-align: center;
  z-index 3
  .header-left
    position absolute
    left 0.2rem
    top 0
    font-size: 0.16rem;
    color #fff

</style>