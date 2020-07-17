<template>
    <div>
        <nut-tab @tab-switch="tabSwitch">
            <nut-tab-panel tab-title="页签1">
                <demo1></demo1>
            </nut-tab-panel>
            <nut-tab-panel tab-title="页签2">
                <demo2></demo2>
            </nut-tab-panel>
            <nut-tab-panel tab-title="页签3">
                <demo3></demo3>
            </nut-tab-panel>
        </nut-tab>
        <!-- <ul class="chose_mouth_ul">
            <li v-for="(title,index) in tabTitle" @click="cur=index" :key="index" :class="{active:cur==index}">
               <router-link :to="{{tabMain}}">{{title}}</router-link>
            </li>
            <router-link tag="li" :class="{chose_mouth_on:cur==1}" @click="cur=1" to="/demo1">商品</router-link>
			<router-link tag="li" :class="{chose_mouth_on:cur==2}" @click="cur=2" to="/demo2">评价</router-link>
			<router-link tag="li" :class="{chose_mouth_on:cur==3}" @click="cur=3" to="/demo3">商家</router-link>
            <li :class="{chose_mouth_on:cur==1}" @click="cur=1" to="/demo1">商品</li>
			<li :class="{chose_mouth_on:cur==2}" @click="cur=2" to="/demo2">评价</li>
			<li :class="{chose_mouth_on:cur==3}" @click="cur=3" to="/demo3">商家</li>
        </ul> -->
        <!-- <div class="tab-content">
            <div v-for="(m,index) in tabMain" :key="index" v-show="cur==index">{{m}}</div>
        </div> -->

        <!-- 路由匹配到的组件将显示在这里 -->
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
import Vue from 'vue';
import { Tab,TabPanel } from '@nutui/nutui';
Tab.install(Vue);
TabPanel.install(Vue);
import demo1 from './demo1'
import demo2 from './demo2'
import demo3 from './demo3'
    export default {
        name:"tablist",
        components:{
            demo1,
            demo2,
            demo3
        },
        data() {
            return {
                tabTitle: ['标题一', '标题二', '标题三'],
                tabMain: ["/demo1", "/demo2", "/demo3"],
                cur: 1, //默认选中第一个tab
                // backgroundDiv: {

                //     backgroundImage:'url(' + require('@/img/line.png') + ')',

                //     backgroundRepeat:'no-repeat',

                //     backgroundSize:'.65rem .05rem'

                // }
            }
        },
        methods: {
            tabSwitch:function(index,event){
                console.log(index+'--'+event);
            }
        },
    }
</script>

<style lang="stylus" scoped>
/deep/.nut-tab-part .nut-tab-item
    padding 0
    border none
/deep/.nut-tab-part .nut-tab
    padding 0
    border none
/* 个人信息 */
.chose_mouth_ul {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 50px;
	background-color: #fff;
	box-sizing border-box
}

.chose_mouth_ul li {
	color: #9a9a9a;
	font-size: 16px;
	height: 30px;
	line-height: 30px;
	text-align: center;
}

.chose_mouth_ul .chose_mouth_on {
	color: #161616;
	font-weight: bold;
    background url(../../../img/line.png) bottom center no-repeat
    background-size: 68px 5px;
}
</style>