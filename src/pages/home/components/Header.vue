<template>
  <div class="header">
    <div class="head-left">
      <div class="iconfont arrow-left">&#xe606;</div>
    </div>
    <div class="head-input">
      <span class="iconfont" @click="handClick">&#xe60c;</span>
        <input type="text" class="input-demo" placeholder="请输入内容" maxlength="11" 
        v-model="pageIndex"
        @input="inputChange"
        >
    </div>
    <router-link to="/City">
    <div>
       <div class="head-right">{{this.city}}</div>
    </div>
       
    </router-link>
  </div>
</template>

<script>
import { mapState } from "Vuex";
export default {
  name: "Header",
  data() {
    return {
      pageIndex: ''
    }
  },
  methods: {
    // 点击搜索
    handClick() {
      let phone = this.pageIndex
      let reg = /^1[3456789]\d{9}$/
      // 验证手机号
      if (phone == '' || phone.length <= 10 || !reg.test(phone)) {
          alert('no')
          return false
      }else{
          alert('yes')
      }
    },
    inputChange() { //输入框值改变
        this.pageIndex = this.pageIndex.replace(/[^\d]/g, '')
    },
    
  },


  computed:{
    ...mapState(['city'])
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  display: flex;
  line-height: 0.86rem;
  color: #fff;
  background: $greed;
  font-size: 0.14rem;

  .head-left {
    width: 0.64rem;
    float: left;

    .arrow-left {
      text-align: center;
      font-size: 0.3rem;
      width .5rem;
    }
  }

  .head-input {
    flex: 1;
    display flex;
    justify-content flex-start;
    align-items center;
    height: 0.64rem;
    margin-top: 0.12rem;
    line-height: 0.64rem;
    color: #ccc;
    background: #fff;
    border-radius: 0.1rem;
    padding-left: 0.2rem;
    .input-demo{
      width 5rem;
      color #000;
      font-size .25rem;
    }
      
  }

  .head-right {
    width: 1rem;
    float: right;
    text-align: left;
    padding-left: 0.2rem;
    color #fff;
    font-size .3rem;
    &:after {
      content: '';
      width: 0px;
      height: 0px;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid #fff;
      position: absolute;
      top: 0.35rem;
      right: 0.1rem;
    }
  }
}
</style>