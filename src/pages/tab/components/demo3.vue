<template>
    <div>
        <nut-noticebar
            :closeMode="true"
            text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"
        ></nut-noticebar>
        <nut-cell :is-link="true" :show-icon="true" @click-cell="cellClick">
            <span slot="title">我是主标题</span>
            <span slot="sub-title">我是副标，我们都是通过Slot分发的</span>
            <span slot="desc">我是描述</span>
        </nut-cell>
        <nut-datepicker 
            :is-visible="isVisible"
            type="date"
            title="请选择日期" 
            :is-show-chinese="false"
            @close="switchPicker('isVisible')"
            @choose="setChooseValue"
        >
        </nut-datepicker>
    </div>
</template>

<script>
import Vue from 'vue';
import { Cell,NoticeBar,Icon,DatePicker } from '@nutui/nutui';
Cell.install(Vue);
NoticeBar.install(Vue);
Icon.install(Vue);
DatePicker.install(Vue);
    export default {
        data() {
            return {
                isVisible: false,
                date: null,
            }
        },
        methods: {
            cellClick(){
                this.isVisible = true
            },
            switchPicker(param) {
                this[`${param}`] = !this[`${param}`];
            },
            setChooseValue(param) {
                this.date = param[3];
                console.log(this.date);
            },
        },
    }
</script>

<style lang="stylus" scoped>

</style>