<script setup lang="ts">
import anime1 from '@/assets/anime1.mp4'
import anime2 from '@/assets/anime2.mp4'
import anime3 from '@/assets/anime3.mp4'
import {Debeh} from '@/stores/Debeh'
import Icon from '@/components/atom/Icon.vue'
import SubMenuNAv from '@/components/molekuls/SubMenuNav.vue'
import theme1 from '@/assets/theme-game1.mp3'
import theme2 from '@/assets/theme-game2.mp3'
import theme3 from '@/assets/theme-game3.mp3'
import theme4 from '@/assets/theme-game4.mp3'
import theme5 from '@/assets/theme-game5.mp3'
import theme6 from '@/assets/theme-game6.mp3'
import theme7 from '@/assets/theme-game7.mp3'
import theme8 from '@/assets/theme-game8.mp3'
import theme9 from '@/assets/theme-game9.mp3'
import theme10 from '@/assets/theme-game10.mp3'
import theme11 from '@/assets/theme-game11.mp3'
</script>
<script lang="ts">
  export default{
    data(){
      return {
       message:'menu ',
       weejiosbg:[anime1,anime2,anime3],
       debeh:Debeh(),
       audio:(src:string)=>new Audio(src),
       themes:[theme1,theme2,theme3,theme4,theme5,theme6,theme7,theme8,theme9,theme10,theme11]
      }
    },
    unmounted(){
      //audio
      this.getDataAudio.pause()
    },
    mounted(){
      //audio
      const audio=this.getDataAudio
        audio.loop=true 
        audio.play()
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
      },
      getDataAudio(){
        const randomize=Math.ceil(Math.random()* this.themes.length-1)
        const audio=this.audio(this.themes[randomize])
        return audio
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
            <a :href="`https://youtu.be/_yhEcxY4GQo`" target="_blank" class="ease-out duration-600 hover:text-blue-500">
              war theme
            </a>
          </li>
          <li class="border-b-2">
            <a :href="`https://www.rockpapershotgun.com/counter-strike-global-offensive-launches-panorama-ui`" target="_blank" class="ease-out duration-600 hover:text-blue-500">
              inspireshion ui
            </a>
          </li>
          <li class="border-b-2">
            <a :href="`https://pixabay.com/vectors/bullet-gun-rifle-war-159442/`" target="_blank" class="ease-out duration-600 hover:text-blue-500">
              bullet
            </a>
          </li>
          <li class="border-b-2">
            <a :href="`https://pixabay.com/vectors/sniper-cross-hairs-rifle-crosslines-155485/`" target="_blank" class="ease-out duration-600 hover:text-blue-500">
              target
            </a>
          </li>
          <li class="border-b-2">
            <a :href="`https://pixabay.com/vectors/rifle-gun-grey-blood-trigger-7149105/`" target="_blank" class="ease-out duration-600 hover:text-blue-500">
              weapon
            </a>
          </li>
          <li class="border-b-2">
            <a :href="`https://pixabay.com/vectors/ink-red-splatter-abstract-paint-303244/`" target="_blank" class="ease-out duration-600 hover:text-blue-500">
              blood splatter
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
  padding:15px 50px;
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