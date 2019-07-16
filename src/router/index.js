import Vue from 'vue'
import Router from 'vue-router'
import Contains from '../components/Contains'
import Main from '../components/Main'
import Main1 from '../components/Main1'
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
      },
      {
        path: '/main1',
        name: 'Main1',
        component: Main1
      },
    ]
    }
    
  ]
})
