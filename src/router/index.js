import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//内容区域
import red from '@/components/page/red'
import blue from '@/components/page/blue'
import yellow from '@/components/page/yellow'
import gold from '@/components/page/gold'
import green from '@/components/page/green'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path:'red',
          name:'red',
          component:red
        },
        {
          path:'yellow',
          name:'yellow',
          component:yellow
        },
        {
          path:'blue',
          name:'blue',
          component:blue
        },

        {
          path:'gold',
          name:'gold',
          component:gold
        },
        {
          path:'green',
          name:'green',
          component:green
        }
      ]
    },

  ]
})
