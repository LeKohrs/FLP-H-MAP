import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Questions from './components/Questions.vue'
import ThankYou from '@/components/ThankYou.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "admin" */ './views/Admin.vue')
    },
    {
      path: '/admin/:slug',
      name: 'clientHmap',
      component: Home
    },
    {
      path: '/client',
      name: 'client',
      component: () => import(/* webpackChunkName: "admin" */ './views/Client.vue'), 
      props: true     
    },
    {
      path: '/add-questions/:slug',
      name: 'AddQuestions',
      component: Questions
    },
    {
      path: '/admin/:thanks',
      name: 'ThankYouAdmin',
      component: ThankYou
    },
    {
      path: '/client/:thanks',
      name: 'ThankYouClient',
      component: ThankYou
    }
  ]
})
