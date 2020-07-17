<template>
    <div>
        <DetailBanner 
        :bannerImg="bannerImg" 
        :sightName="sightName"
        :gallary="gallary"
        ></DetailBanner>
        <DetailHeader></DetailHeader>
        <DetailList :list="list"></DetailList>
        <div class="bank">{{this.$route.params.id}}----{{this.$route.params.num}}</div>
    </div>
</template>

<script>
    import DetailBanner from './components/Banner';
    import DetailHeader from './components/Header';
    import DetailList from './components/List';
    import axios from "axios";
    export default {
        name:"Detail",
        components: {
            DetailBanner,
            DetailHeader,
            DetailList
        },
        data() {
            return {
               bannerImg:'',
               sightName:'',
               gallary:[],
               list:[],
            }
        },
        methods: {
            getDetailInfo () {
                axios.get('/api/detail.json',{
                    params: {
                        id:this.$route.params.id
                    }
                }).then(this.handleGetDataSucc)
            },
            handleGetDataSucc (res) {
                res = res.data
                if (res.ret && res.data) {
                    const data = res.data
                    this.sightName = data.sightName
                    this.list = data.categoryList
                    this.bannerImg = data.bannerImg
                    this.gallary = data.gallaryImgs
                }
            }
        },
        mounted() {
            this.getDetailInfo()
        },
    }
</script>

<style lang="stylus" scoped>
.bank
    height 20rem
</style>