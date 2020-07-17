<template>
  <ul class="item-ul">
    <li
      v-for="item in letters"
      :key="item"
      :ref="item"
      @click="handClick"
      @touchstart.prevent="handTouchstart"
      @touchmove="handTouchmove"
      @touchend="handTouchend"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: "Initials",
  props: {
    cities: Object
  },
  data() {
    return {
      touchStart: false,
      startY: 0,
      timer: null
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  methods: {
    handClick(e) {
      this.$emit("change", e.target.innerText);
    },
    handTouchstart() {
      this.touchStart = true;
    },
    handTouchmove(e) {
      if (this.touchStart) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 68;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
    },
    handTouchend() {
      this.touchStart = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.item-ul {
  position: absolute;
  right: 0;
  top: 1.9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  li {
    width: 0.4rem;
    text-align: center;
    font-size: 0.18rem;
    color: #18c0c8;
    line-height: 0.4rem;
  }
}
</style>
