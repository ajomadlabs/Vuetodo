import Vue from 'vue'
import Router from 'vue-router'
import TodoComponent from '@/components/TodoComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: TodoComponent
    }
  ]
})
