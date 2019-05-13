import Vue from 'vue'
import Router from 'vue-router'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Nav',
      component: Nav,
      children:[{
        path: '/sidebar',
        name: 'Sidebar',
        component: Sidebar
      }]
    }
    
  ]
})
