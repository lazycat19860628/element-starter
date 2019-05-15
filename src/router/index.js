import Vue from 'vue'
import Router from 'vue-router'
import Contains from '../components/Contains'
import Main from '../components/Main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Contains',
      component: Contains,
      children:[{
        path: '/main',
        name: 'Main',
        component: Main
      }]
    }
    
  ]
})
