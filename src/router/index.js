import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/Layout'
import Instance from '@/components/Instance'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Helloworld',
      component: HelloWorld
    },
    {
      path: '/ecs',
      name: 'ECS',
      component: Layout,
      children: [
        {
          path: '/ecs/instance',
          name: 'Instance',
          component: Instance
        }
      ]
    }
  ]


})
