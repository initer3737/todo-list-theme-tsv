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
      path: '/menu',name: 'menu',component:()=>import('../views/MenuView.vue'),meta:{title:'menu'}
    },
    {
      path: '/lobby',name: 'lobby',component:()=>import('../views/LobbyView.vue'),meta:{title:'lobby'}
    },
    {
      path: '/kreditlist',name: 'kreditlist',component:()=>import('../views/KreditlistView.vue'),meta:{title:'kredit lists'}
    },
    {
      path: '/user/:username',name: 'user',component:()=>import('../views/UserInfoView.vue'),meta:{title:'user information'}
    },
    {
      path: '/play',name: 'play',component:()=>import('../views/PlayView.vue'),meta:{title:'gameplay'}
    },
    {
      path: '/setting',name: 'setting',component:()=>import('../views/SettingView.vue'),meta:{title:'user setting'}
    },
    {
      path: '/galery',name: 'galery',component:()=>import('../views/GaleryView.vue'),meta:{title:'galeries'}
    },
    {
      path: '/loading/:url',name: 'loading',component:()=>import('../views/LoadingView.vue'),meta:{title:'loading'}
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
