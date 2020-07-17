<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="list-title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wepper">
            <div class="button"  @click="handClick(currCity)">{{this.currCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="list-title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wepper"
            v-for="(item,idx) in hotCity"
            :key="item.id"
            @click="handClick(item.name,idx)"
          >
            <div :class="idx==index?'chose':'button'">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
        <div class="list-title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="cityItem in item"
            :key="cityItem.id"
            @click="handClick(cityItem.name)"
          >{{cityItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import { mapState, mapMutations } from "Vuex";
export default {
  name: "CityList",
  props: {
    hotCity: Array,
    cities: Object,
    letter: String,
  },
  data() {
    return {
      index:0
    }
  },
  computed:{
    ...mapState({
      currCity:'city'
    })
  },
  methods: {
    handClick(city,idx) {
      console.log(city,idx);
      this.changeCity(city)
      this.$router.push('/')
      this.index=idx
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper, {click: true})
  }
};
</script>

<style lang="stylus" scoped>
.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.list {
  position: absolute;
  top: 1.58rem;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;

  .area {
    width: 100%;
    background-color: #fff;

    .list-title {
      padding: 0.1rem 0.2rem;
      font-size: 0.28rem;
      color: #000;
      background: #eee;
    }

    .button-list {
      overflow: hidden;
      padding: 0.1rem 0.5rem 0.1rem 0.1rem;
      display:flex;
      flex-wrap:wrap;
      .button-wepper {
        width: 33.33%;
        .button {
          padding: 0.1rem 0;
          text-align: center;
          font-size: 0.24rem;
          border: 0.02rem solid #ccc;
          border-radius: 0.06rem;
          margin: 0.1rem;
        }
        .chose{
          padding: 0.1rem 0;
          text-align: center;
          font-size: 0.24rem;
          border-radius: 0.06rem;
          margin: 0.1rem;
          background-color:#45b6ee;
          color:#fff;
        }
      }
      
    }

    .item-list {
      .item {
        padding: 0.2rem 0.2rem;
        font-size: 0.2rem;
      }
    }
  }
}
</style>