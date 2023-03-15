<script setup lang="ts">
import anime1 from '@/assets/anime1.mp4'
import anime2 from '@/assets/anime2.mp4'
import anime3 from '@/assets/anime3.mp4'
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
import {Debeh} from '@/stores/Debeh'
import Icon from '@/components/atom/Icon.vue'
import SubMenuNav from '@/components/molekuls/SubMenuNav.vue'
import { RouterLink } from 'vue-router'
import { Http } from '@/services/http'
</script>
<script lang="ts">
  export default{
    data(){
      return {
       message:'menu ',
       weejiosbg:[anime1,anime2,anime3],
       debeh:Debeh(),
       session:Debeh().getSession,
       top10:{
          data:{
            username:'',
            score:''
          }
       },
       countinUserStatus:{
          online:'',
          offline:''
       },
       audio:(src:string)=>new Audio(src),
       themes:[theme1,theme2,theme3,theme4,theme5,theme6,theme7,theme8,theme9,theme10,theme11]
      }
    },
    mounted(){
      Http.get('/lobby')
      .then( ({data})=>{
          console.log(data)
          this.top10=data.data
      })
      Http.get('/user/conections/counting')
      .then( ({data})=>{
          console.log(data)
          this.countinUserStatus=data.data
      })
        this.debeh.fetchSession()

        //audio
      const audio=this.getDataAudio
        audio.loop=true 
        audio.play()
    },
    unmounted(){
        //audio
        this.getDataAudio.pause()
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
  <SubMenuNav/>
  <video :src="getWeejioBegeh" loop muted autoplay class="bg-weejio"></video>
  <div>
    <h1 class="app-name bg-[dodgerblue]/50 p-3 rounded">{{ getNameApp }}</h1>
  </div>
  <div class="top3-container">
      <div class="content-container-lobby">
        <h1 class="border-b-2 pl-[16px]">kombatans leaderboards</h1>
        <ol class="list-none flex flex-col gap-1">
          <li>username [score]</li>
          <li v-for="data , i in top10" :class="`border-b-2 ${data.username === session().username ?'border-blue-400':''} hover:text-[dodgerblue] ease-in duration-500`" >
            <RouterLink :to="`/loading/user&${data.username}`">
              {{ Number(i)+1 }}.{{data.username}} [{{data.score}}]
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
            {{countinUserStatus.online}}
          </li>
          <li class="border-b-2 pl-5">
            <Icon :color="' text-rose-600 w-[25px]'" :icon="'circle-fill'"/>  
            {{countinUserStatus.offline}}
          </li>
          <li class="border-b-2 pl-5">
            total :
            {{countinUserStatus.offline + countinUserStatus.online}}
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