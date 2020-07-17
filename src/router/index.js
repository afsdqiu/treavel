import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Refresh from '@/pages/refresh/Refresh'
import Tabhome from '@/pages/tab/Tabhome'
import demo1 from '@/pages/tab/components/demo1'
import demo2 from '@/pages/tab/components/demo2'
import demo3 from '@/pages/tab/components/demo3'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/city',
    name: 'City',
    component: City
  },{
    path: '/detail/:id:num',
    name: 'Detail',
    component: Detail
  },{
    path: '/refresh',
    name: 'Refresh',
    component: Refresh
  },{
    path: '/tab/:id',
    name: 'Tabhome',
    component: Tabhome,
    redirect: '/demo1',
    children:[
      {
        path: '/demo1',
        name: 'demo1',
        component: demo1
      },
      {
        path: '/demo2',
        name: 'demo2',
        component: demo2
      },
      {
        path: '/demo3',
        name: 'demo3',
        component: demo3
      }
    ]
  }],
  // 滚动行为
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
