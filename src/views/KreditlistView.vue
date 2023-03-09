<script setup lang="ts">
import anime1 from '@/assets/anime1.mp4'
import anime2 from '@/assets/anime2.mp4'
import anime3 from '@/assets/anime3.mp4'
import {Debeh} from '@/stores/Debeh'
import Icon from '@/components/atom/Icon.vue'
import SubMenuNAv from '@/components/molekuls/SubMenuNav.vue'
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
  <SubMenuNAv/>
  <video :src="getWeejioBegeh" loop muted autoplay class="bg-weejio"></video>
  <div>
    <h1 class="app-name bg-[dodgerblue]/50 p-3 rounded">{{ getNameApp }}</h1>
  </div>
  <div class="top3-container">
      <div class="content-container-lobby">
        <h1 class="border-b-2 pl-[16px]">credit lists</h1>
        <ol class="list-decimal flex flex-col gap-1">
          <li class="border-b-2">
            <a :href="`https://id.pinterest.com/puthutwahyuaji/project-todo-list-theme-tsv/`" target="_blank" class="ease-out duration-600 hover:text-blue-500">
              images
            </a>
          </li>
          <li class="border-b-2">
            <a :href="`https://wallpaperwaifu.com/anime/hk416-girls-frontline-snow-apocalypse-live-wallpaper/`" target="_blank" class="ease-out duration-600 hover:text-blue-500">
              animeshion 1
            </a>
          </li>
          <li class="border-b-2">
            <a :href="`https://moewalls.com/anime/ai-hayasaka-in-military-kaguya-sama-wa-kokurasetai-live-wallpaper/download/`" target="_blank" class="ease-out duration-600 hover:text-blue-500">
              animeshion 2
            </a>
          </li>
          <li class="border-b-2">
            <a :href="`https://moewalls.com/anime/anime-girl-military-live-wallpaper/download/`" target="_blank" class="ease-out duration-600 hover:text-blue-500">
              animeshion 3
            </a>
          </li>
          <li class="border-b-2">
            <a :href="`https://moewalls.com/anime/squad-404-in-a-operation-girls-frontline-live-wallpaper/download/`" target="_blank" class="ease-out duration-600 hover:text-blue-500">
              loading 1
            </a>
          </li>
          <li class="border-b-2">
            <a :href="`https://moewalls.com/anime/ai-hayasaka-in-military-kaguya-sama-wa-kokurasetai-live-wallpaper/download/`" target="_blank" class="ease-out duration-600 hover:text-blue-500">
              loading 2
            </a>
          </li>
          <li class="border-b-2">
            <a :href="`https://moewalls.com/anime/squad-404-in-a-mission-girls-frontline-live-wallpaper/`" target="_blank" class="ease-out duration-600 hover:text-blue-500">
              loading 3
            </a>
          </li>
          <li class="border-b-2">
            <a :href="`https://moewalls.com/anime/st-ar-15-girls-frontline-live-wallpaper/download/`" target="_blank" class="ease-out duration-600 hover:text-blue-500">
              loading 4
            </a>
          </li>
          <li class="border-b-2">
            <a :href="`https://moewalls.com/anime/m4-sopmod-ii-in-a-mission-girls-frontline-live-wallpaper/`" target="_blank" class="ease-out duration-600 hover:text-blue-500">
              loading 5
            </a>
          </li>
          <li class="border-b-2">
            <a :href="`https://moewalls.com/anime/ump-45-in-the-rain-girls-frontline-live-wallpaper/`" target="_blank" class="ease-out duration-600 hover:text-blue-500">
              loading 6
            </a>
          </li>
          <li class="border-b-2">
            <a :href="`https://www.rockpapershotgun.com/counter-strike-global-offensive-launches-panorama-ui`" target="_blank" class="ease-out duration-600 hover:text-blue-500">
              inspireshion ui
            </a>
          </li>
          <li class="border-b-2">
            <a :href="`https://youtu.be/4EDLVlJ66wM?list=PLnWJ9xIgeEsbU0f6AGfSMHt6hizVBdAQp`" target="_blank" class="ease-out duration-600 hover:text-blue-500">
              music themes
            </a>
          </li>
        </ol>
      </div>
  </div>
  <div class="user-status-container">
      <div class="user-status-containers">
        <h1 class="border-b-2 pl-[16px] py-2">message</h1>
        <ol class="list-none flex flex-col gap-5 py-3">
          <li class="border-b-2 pl-5">
            <Icon :color="'green-600 w-[25px]'" :icon="'circle-fill'"/>
            thanks for download this source code
          </li>
          <li class="border-b-2 pl-5">
            <Icon :color="'rose-600 w-[25px]'" :icon="'circle-fill'"/>  happy learning
          </li>
          <li class="border-b-2 pl-5">
            i hope u can have a good day and have nice friends family
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
  padding:15px 20px;
  position: absolute;
  top: 450px;
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