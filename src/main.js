import Vue from 'vue'
import App from './App'
import router from './router'
// jq使用方法
import $ from 'jquery'
// 手机点击延迟插件
// import fastClick from 'fastclick'
// banner轮播
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import store from './store'
import 'styles/reset.css'
// 线条样式
import 'styles/border.css'
// icon图标css
import 'styles/iconfont.css'
// banner轮播样式
import 'swiper/css/swiper.css'
// rem单位
// import './rem'
// px转rem插件
import 'lib-flexible/flexible'
// 防止连续点击
import preventReClick from './plugins.js'
// 饿了么ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {Toast} from '@nutui/nutui';
Toast.install(Vue);
Vue.config.productionTip = false
// fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.use(preventReClick)
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
