<script setup lang="ts">
import anime1 from '@/assets/anime1.mp4'
import anime2 from '@/assets/anime2.mp4'
import anime3 from '@/assets/anime3.mp4'
import {Debeh} from '@/stores/Debeh'
import Icon from '@/components/atom/Icon.vue'
import SubMenuNav from '@/components/molekuls/SubMenuNav.vue'
import { RouterLink } from 'vue-router'
</script>
<script lang="ts">
  export default{
    data(){
      return {
       message:'menu ',
       weejiosbg:[anime1,anime2,anime3],
       debeh:Debeh()
      }
    },
    computed:{
      // getUsername(){
      //   return this.formdata.username
      // },
      getWeejioBegeh(){
        return this.weejiosbg[0]
      },
      getNameApp(){
        return this.debeh.appName
      }
    },
    methods:{
      
    }
  }
</script>
<template>
  <SubMenuNav/>
  <video :src="getWeejioBegeh" loop muted autoplay class="bg-weejio"></video>
  <div>
    <h1 class="app-name bg-[dodgerblue]/50 p-3 rounded">{{ getNameApp }}</h1>
  </div>
  <div class="top3-container">
      <div class="content-container-lobby">
        <h1 class="border-b-2 pl-[16px]">kombatans leaderboards</h1>
        <ol class="list-none flex flex-col gap-1">
          <li>name [score]</li>
          <li class="border-b-2 border-blue-400 hover:text-[dodgerblue] ease-in duration-500">
            <RouterLink :to="`/user/what`">
              1.yotsusan machi [1060]
            </RouterLink>
          </li>
          <li class="border-b-2 hover:text-[dodgerblue] ease-in duration-500">
            <RouterLink :to="`/user/what`">
              2.initer3737 [960]
            </RouterLink>
          </li>
          <li class="border-b-2 hover:text-[dodgerblue] ease-in duration-500">
            <RouterLink :to="`/user/what`">
              3.yotsuba nakano [860]
            </RouterLink>
          </li>
          <li class="border-b-2 hover:text-[dodgerblue] ease-in duration-500">
            <RouterLink :to="`/user/what`">
              4.miku nakano [760]
            </RouterLink>
          </li>
          <li class="border-b-2 hover:text-[dodgerblue] ease-in duration-500">
            <RouterLink :to="`/user/what`">
              5.yotsuba nakano [660]
            </RouterLink>
          </li>
          <li class="border-b-2 hover:text-[dodgerblue] ease-in duration-500">
            <RouterLink :to="`/user/what`">
              6.yotsuba nakano [560]
            </RouterLink>
          </li>
          <li class="border-b-2 hover:text-[dodgerblue] ease-in duration-500">
            <RouterLink :to="`/user/what`">
              7.yotsuba nakano [460]
            </RouterLink>
          </li>
          <li class="border-b-2 hover:text-[dodgerblue] ease-in duration-500">
            <RouterLink :to="`/user/what`">
              8.yotsuba nakano [360]
            </RouterLink>
          </li>
          <li class="border-b-2 hover:text-[dodgerblue] ease-in duration-500">
            <RouterLink :to="`/user/what`">
              9.yotsuba nakano [260]
            </RouterLink>
          </li>
          <li class="border-b-2 hover:text-[dodgerblue] ease-in duration-500">
            <RouterLink :to="`/user/what`">
              10.yotsuba nakano [160]
            </RouterLink>
          </li>
        </ol>
      </div>
  </div>
  <div class="user-status-container">
      <div class="user-status-containers">
        <h1 class="border-b-2 pl-[16px]">kombatans</h1>
        <ol class="list-none">
          <li class="border-b-2 pl-5">
            <Icon :color="' text-green-600 w-[25px]'" :icon="'circle-fill'"/>
            230
          </li>
          <li class="border-b-2 pl-5">
            <Icon :color="' text-rose-600 w-[25px]'" :icon="'circle-fill'"/>  450
          </li>
          <li class="border-b-2 pl-5">
            total : 680
          </li>
        </ol>
      </div>
  </div>
</template>
<style scoped>
.user-status-container{
  /* display: grid;
  grid-template-columns: repeat(1,1fr);
  padding: 5px 15px; */
  padding: 20px;
  position: absolute;
  top: 150px;
  right: 20px;
  backdrop-filter: blur(50px);
  color: #fff;
  /* box-shadow: 1px 1px 12px 2px white; */
  font-size: 21px;
  /* background:linear-gradient(45deg,rgba(0, 0, 0,1) 10%,rgba(0, 81, 128, 0.5),rgba(0, 0, 0,1)) ; */
  /* animation: kelip-form 1s infinite alternate; */
  cursor: default;
  border-radius: 6px;
  border: 2px solid #fff;
}
.content-container-lobby{
  display: grid;
  grid-template-columns: repeat(1,1fr);
  padding: 5px 15px;
}
.top3-container{
  padding: 50px;
  position: absolute;
  top: 20px;
  left: 150px;
  backdrop-filter: blur(50px);
  color: #fff;
  /* box-shadow: 1px 1px 12px 2px white; */
  font-size: 21px;
  /* background:linear-gradient(45deg,rgba(0, 0, 0,1) 10%,rgba(0, 81, 128, 0.5),rgba(0, 0, 0,1)) ; */
  /* animation: kelip-form 1s infinite alternate; */
  cursor: default;
  border-radius: 6px;
  border: 2px solid #fff;
}
.app-name{
  position: absolute;
  top:70px;
  right:50px;
  color: #fff;
  font-size: 21px;
  box-shadow: 1px 1px 12px 2px white;
  animation: kelip-form 4s infinite alternate-reverse;
}
@keyframes kelip-form {
  from{}
  to{
    box-shadow: 1px 1px 12px 2px dodgerblue;
  }
}
button{
    font-size: 21px;
    color: #fff;
    border: none !important;
}
button:hover{
    font-size: 21px;
}
@keyframes kelip-not-found {
  from{}
  to{
    box-shadow: 1px 1px 12px 6px blue;
  }
}
h1{
  color:#fff;
}
</style>