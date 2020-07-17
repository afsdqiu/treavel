<template>
    <div>
        <!-- <div class="scrrol_btn" v-show="showTop" @click="goTop">top</div> -->
        <nut-backtop
        :distance="400"
        ></nut-backtop>
    </div>
</template>

<script>
import Vue from 'vue';
import { BackTop } from '@nutui/nutui';
BackTop.install(Vue);
    export default {
        data() {
            return {
                showTop: false
            }
        },
        // mounted(){
        //     window.addEventListener('scroll', this.handleScroll)
        // },
        // destroyed() {
        //     document.removeEventListener('scroll', this.handleScroll)
        //     document.body.scrollTop = document.documentElement.scrollTop = 0
        // },
        // methods:{
        //     goTop() {
        //         // 回到顶部
        //         var timer = setInterval(function(){
        //             let osTop = document.documentElement.scrollTop || document.body.scrollTop;
        //             let ispeed = Math.floor(-osTop / 5); 
        //             document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
        //             if(osTop === 0){
        //                 clearInterval(timer);
        //             }
        //         },30)
        //         this.showTop = false
        //     },
        //     handleScroll(e) {
        //         // 滚动操作监听
        //         let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        //         // console.log(scrollTop)
        //         let offsetTop = 0
        //         // try {
        //         //     offsetTop = document.querySelector('.main').offsetTop
        //         // } catch (e) {
        //         //     offsetTop = 0
        //         // }
        //         if (scrollTop > offsetTop) {
        //             if (scrollTop > 500) {
        //                 this.showTop = true
        //             } else {
        //                 this.showTop = false
        //             }
        //         } else {
        //             this.showTop = false
        //         }
        //     }
        // }
    }
</script>

<style lang="stylus" scoped>
    .scrrol_btn
        width .8rem
        height .8rem
        position fixed
        right .1rem
        top 10rem
        font-size .16rem
        color #fff
        background #000
        line-height .8rem
        text-align center
</style>