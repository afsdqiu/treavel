<template>
    <div>
       <nut-cell title="我是标题" desc="描述文字" @click-cell="clickEvnt" to="/"></nut-cell>
        <nut-button 
            small
            @click="btnClick"
        >
            去结算
        </nut-button>
    </div>
</template>

<script>
import Vue from 'vue';
import { Cell,Button,Dialog } from '@nutui/nutui';
Cell.install(Vue);
Button.install(Vue);
Dialog.install(Vue);
    export default {
        data() {
            return {
                
            }
        },
        methods:{
            clickEvnt(){
                console.log(1);
            },
            btnClick(){
                this.$dialog({
                    title: "确定删除此订单？",
                    content: "删除后将从你的记录里消失，无法找回",
                    onOkBtn(event) {  //确定按钮点击事件
                        this.$toast.text('提示信息');
                        this.close(); //关闭对话框
                    },
                });
            }
        }
    }
</script>

<style lang="stylus" scoped>
/deep/.nut-tab-item
    padding 0
</style>