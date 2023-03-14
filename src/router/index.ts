import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import { useToken } from '@/services/token';
//=============== importirovat
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',name: 'home',component: HomeView,meta:{title:'home',auth:false}
    },
    {
      path: '/reset',name: 'reset',component:()=>import('../views/ResetView.vue') ,meta:{title:'reset',auth:false}
    },
    {
      path: '/register',name: 'register',component:()=>import('../views/RegisterView.vue'),meta:{title:'register',auth:false}
    },
    {
      path: '/menu',name: 'menu',component:()=>import('../views/MenuView.vue'),meta:{title:'menu',auth:true}
    },
    {
      path: '/lobby',name: 'lobby',component:()=>import('../views/LobbyView.vue'),meta:{title:'lobby',auth:true}
    },
    {
      path: '/kreditlist',name: 'kreditlist',component:()=>import('../views/KreditlistView.vue'),meta:{title:'kredit lists',auth:true}
    },
    {
      path: '/user/:username',name: 'user',component:()=>import('../views/UserInfoView.vue'),meta:{title:'user information',auth:true}
    },
    {
      path: '/play',name: 'play',component:()=>import('../views/PlayView.vue'),meta:{title:'gameplay',auth:true}
    },
    {
      path: '/setting',name: 'setting',component:()=>import('../views/SettingView.vue'),meta:{title:'user setting',auth:true}
    },
    {
      path: '/galery',name: 'galery',component:()=>import('../views/GaleryView.vue'),meta:{title:'galeries',auth:true}
    },
    {
      path: '/loading/:url',name: 'loading',component:()=>import('../views/LoadingView.vue'),meta:{title:'loading',auth:false}
    },
    {
      path: '/404',name: 'not found',component: NotFoundView,meta:{title:'not found',auth:false}
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
      const Token=useToken()
    if(to.meta.auth === true && Token.checkTokenIsEmpty() ){
      next('/')
    }else{
      next()
    }

})

export default router
