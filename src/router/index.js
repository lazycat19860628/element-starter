import Vue from 'vue'
import Router from 'vue-router'
import Contains from '../components/Contains'
import Sidebar from '../components/Sidebar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Contains',
      component: Contains,
      children:[{
        path: '/sidebar',
        name: 'Sidebar',
        component: Sidebar
      }]
    }
    
  ]
})
