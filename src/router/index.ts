import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',name: 'home',component: HomeView,meta:{title:'home'}
    },
    {
      path: '/reset',name: 'reset',component:()=>import('../views/ResetView.vue') ,meta:{title:'reset'}
    },
    {
      path: '/register',name: 'register',component:()=>import('../views/RegisterView.vue'),meta:{title:'register'}
    },
    {
      path: '/404',name: 'not found',component: NotFoundView,meta:{title:'not found'}
    },
    {
        path:'/:pathMatch(.*)*',redirect(to) {
          return {path:'/404',name: 'not found'}
        },
    },
  ]
})

router.beforeEach((to,from,next)=>{
    document.title=`todo list | ${to.meta.title}`
    next()
})

export default router
