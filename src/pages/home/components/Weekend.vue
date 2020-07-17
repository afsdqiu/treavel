<template>
  <div class="element_box">
    <div class="recommend-title">周末游推荐</div>
    <router-link to="/refresh/">
      <div class="travel-box">
        <div class="adv-box border-bottom" v-for="(item,index) in list" :key="item.id" @click="handClick(index,item)">
          <div v-show="item.isShowDetail">
            <div class="adv-box-img" @click.stop="showHide(index)">
              <img class="adv-img" :src="item.imgUrl" />
            </div>
            <div v-if="index != i">
              <p class="adv-title">{{item.title}}</p>
              <p class="adv-native">{{item.desc}}</p>
            </div>
          </div>
        </div>
      </div>
    </router-link>
    <div class="look_more">
      <el-button :plain="true" @click="openHTML" v-preventReClick>查看更多</el-button>
    </div>
  </div>
</template>


<script>
$(function(){
  $('.look_more').click(function(){
    console.log(1);
  })    
});

export default {
  name: "weekend",
  props: {
    list: Array
  },
  data() {
    return {
      i: -1,
      onpresscTime:0  //  阻止短时间内连续点击
    };
  },
  methods: {
    handClick(index,item) {
      item.isShowDetail = !item.isShowDetail
    },
    showHide(index) {
      this.i = index
    },
    openHTML() {
      this.$message({
        customClass: 'message-logout',
        dangerouslyUseHTMLString: true,
        message: '<p>没有更多了~</p>',
      });
       //  两秒后再执行
       //  当前时间和上次点击的时候进行对比，大于2000微秒才执行
      if ((Date.now() - this.onpresscTime) > 2000) {
        this.onpresscTime = Date.now()
      }
    }
  },
};
</script>



<style lang="stylus" scoped>
@import '~styles/varibles.styl';
a {
    text-decoraction: none;
    color #000;
}
.router-link-active {
    text-decoration: none;
    color #000;
}
.recommend-title {
  width: 100%;
  line-height: 0.8rem;
  font-size: 0.34rem;
  text-indent: 0.1rem;
  background-color: #eee;
}

.travel-box {
  width: 100%;
  background-color: #fff;

  .adv-box {
    width: 100%;
  }

  .adv-box-img {
    width: 100%;
    overflow: hidden;
    height: 0;
    padding-bottom: 30.4%;

    /* padding-bottom的值为图片的height/width的值 */
    /* 此图尺寸为240*160故padding-bottom为160/240=66.67% */
    .adv-img {
      width: 100%;
      padding: 0.1rem;
      box-sizing: border-box;
    }
  }

  .adv-title {
    font-size: 0.24rem;
    margin-left: 0.2rem;
    padding-top: 0.15rem;
    ellipsis();
  }

  .adv-native {
    font-size: 0.24rem;
    margin-left: 0.2rem;
    padding-top: 0.15rem;
  }
}
.look_more{
  width 2rem;
  margin 0 auto;
}
</style>

<style>
  .el-message__icon{
    display: none;
  }
  .message-logout {
    min-width: 3rem;
    background: rgba(0, 0, 0, .6) none repeat scroll 0 0 !important;/*实现FF背景透明，文字不透明*/
    border: none;
    padding: .2rem;
  }
  .el-message p{
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: .25rem;
  }
  .el-button{
    width: 2rem;
    font-size: .25rem;
    padding: .3rem;
  }
</style>