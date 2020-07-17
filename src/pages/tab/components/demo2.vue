<template>
    <div>
        <nut-drag
        :boundary="{ top: 10, left: 9, bottom: bottom(), right: right() }"
        :attract="false"
        >
            <div class="touch-dom">拖动我</div>
        </nut-drag>
        
    </div>
</template>

<script>
import Vue from 'vue';
import { Drag } from '@nutui/nutui';
Drag.install(Vue);
    export default {
        methods: {
            right() {
                return document.documentElement.clientWidth - 300 - 9;
            },
            bottom() {
                return document.documentElement.clientHeight - 601;
            },
        },
    };
</script>

<style lang="stylus" scoped>

</style>