<template>
    <div class="banner">
        <div class="banner-box" @click="handClick">
            <img class="banner-img" :src="this.bannerImg">
            <div class="banner-text">{{ this.sightName }}</div>
            <div class="img-number"><span class="iconfont">&#xe62c;</span>{{ this.gallary.length }}</div>
        </div>
        <CommonFade>
            <common-gallary
            :imgs="gallary"
            v-show="showGallary"
            @close="handleGallaryClose"
            ></common-gallary>
        </CommonFade>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary';
import CommonFade from 'common/fade/Fade';
    export default {
        name:"DetailBanner",
        props: {
            bannerImg: String,
            sightName: String,
            gallary: Array
        },
        data() {
            return {
                showGallary:false
            }
        },
        methods:{
            handClick () {
               this.showGallary = true
            },
            handleGallaryClose () {
               this.showGallary = false
            }
        },
        components: {
            CommonGallary,
            CommonFade
        }
    }
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        // overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-text
            position absolute
            bottom 0
            left 0
            padding .2rem
            width 100%
            height .4rem
            line-height .4rem
            font-size .3rem
            color #fff
            background linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,0.5))
        .img-number
            position absolute
            bottom .2rem
            right .2rem
            padding .1rem
            background rgba(0,0,0,0.5)
            font-size .2rem
            color #fff
            border-radius .1rem
            span 
                width .2rem
                margin-right .1rem
                font-size .2rem
</style>