import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
// import CreateView from '../views/Create.vue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path:'/home',
      name:'home',
      component: HomeView
    },
    {
      path:'/create',
      name:'create',
      component: () => import ('../components/Create.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/responses',
      name: 'responses',
      component: () => import('../views/ResponseView.vue')
    },
    {
      path: '/submit-response/:name/:slug',
      name: 'submit',
      component: () => import('../views/SubmitView.vue'),
      props: true
    },
    {
      path: '/form/:name/:description/:slug',
      name: 'form-detail',
      component: () => import('../components/Detail.vue'),
      props: true
    },
  ]
})

export default router
