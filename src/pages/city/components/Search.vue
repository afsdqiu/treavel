<template>
  <div>
    <div class="search">
      <input type="text" v-model="keyword" placeholder="请输入城市名称" class="search-input" />
    </div>
    <div ref="search" v-show="keyword">
      <ul class="search-ul">
        <li
          class="border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handClick(item.name)"
        >{{item.name}}</li>
        <li v-show="hasNodata">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import { mapMutations } from "Vuex";
export default {
  name: "Search",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  computed: {
    hasNodata() {
      return !this.list.length;
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  methods: {
    handClick(city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  }
};
</script>

<style lang="stylus" scoped>
.search {
  position: relative;
  height: 0.72rem;
  padding: 0 0.1rem;
  background-color: #17c0c8;
  z-index: 3;

  .search-input {
    display: block;
    width: 100%;
    height: 0.62rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.1rem;
    box-sizing: border-box;
    padding: 0 0.1rem;
    background-color #fff;
  }
}

.search-ul {
  position: absolute;
  top: 1.59rem;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: #eee;

  li {
    width: 100%;
    line-height: 0.6rem;
    font-size: 0.35rem;
    background-color: #fff;
  }
}
</style>