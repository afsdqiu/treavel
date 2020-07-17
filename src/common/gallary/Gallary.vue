<template>
    <div class="gallary" @click="handGallaryclick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item, index) in imgs" :key="index">
                    <img class="swiper_img" :src="item" />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name:"CommonGallary",
        props: {
            imgs: {
                type: Array,
                default () {
                    return []
                }
            },
        },
        data() {
            return {
                swiperOptions: {
                    pagination: ".swiper-pagination",
                    paginationType: 'fraction',
                    // 解决轮播显示隐藏bug自我刷新
                    observeParents: true,
                    observer: true
                },
            }
        },
        methods: {
            handGallaryclick () {
                this.$emit('close')
            }
        }

    }
</script>

<style lang="stylus" scoped>
    .gallary >>> .swiper-container
        overflow inherit
    .gallary
        display flex
        flex-direction column
        justify-content center
        z-index 99
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        background-color #000
        .wrapper
            width 100%
            .swiper_img
                width 100%
        .swiper-pagination
            font-size .25rem
            color #fff
            bottom -.2rem
</style>