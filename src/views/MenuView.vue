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
import { RouterLink } from 'vue-router'
import { Http } from '@/services/http'
import { useToken } from '@/services/token';
</script>
<script lang="ts">
  export default{
    data(){
      return {
       message:'menu ',
       weejiosbg:[anime1,anime2,anime3],
       debeh:Debeh(),
       Token:useToken(),
       index:1,
       top3info:{
        data:{username:''}
       },
       audio:(src:string)=>new Audio(src),
       themes:[theme1,theme2,theme3,theme4,theme5,theme6,theme7,theme8,theme9,theme10,theme11],
       isLogout:false
      }
    },
    mounted(){
        Http.get('/top3/players/info')
        .then(res=>{
           console.log(res)
           if(res.status === 401){
                  this.Token.clear()
                  this.$router.push('/loading/login')
              }  
            this.top3info={...res.data.data} 
        })
        //audio
        const audio=this.getDataAudio
        audio.loop=true 
        audio.play()
        
    },
    unmounted(){
      //audio
      this.getDataAudio.pause()
        // audio.pause()
    },
    computed:{
      // getUsername(){
      //   return this.formdata.username
      // },
      getWeejioBegeh(){
          const randmize=Math.ceil(Math.random()*this.weejiosbg.length-1);
        return this.weejiosbg[randmize]
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
      logout(){
          Http.get('/logout')
          .then(res=>{
              console.log('logout response',res)
              // if(res.status === 200){
                  this.Token.clear()
                  this.$router.push('/loading/login')
              // }
          })
      }
    }
  }
</script>
<template>
  <div class="menu-container">
      <RouterLink :to="`/loading/user&${debeh.getSession()['username']}`" class="text-white hover:text-[dodgerblue] ease-in duration-500  border-solid border-r-[2px] border-[#000]">
            user info
      </RouterLink>
      <RouterLink :to="'/loading/kreditlist'" class="text-white hover:text-[dodgerblue] ease-in duration-500  border-solid border-r-[2px] border-[#000]">
            credit lists
      </RouterLink>
      <RouterLink :to="'/loading/play'" class="text-white hover:text-[dodgerblue] ease-in duration-500">
            play
      </RouterLink>
      <RouterLink :to="'/loading/galery'" class="text-white hover:text-[dodgerblue] ease-in duration-500  border-solid border-l-[2px] border-[#000]">
            galeries
      </RouterLink>
      <RouterLink :to="'/loading/lobby'" class="text-white hover:text-[dodgerblue] ease-in duration-500 border-solid border-l-[2px] border-[#000]">
            lobby
      </RouterLink>
      <RouterLink :to="'/loading/setting'" class="text-white hover:text-[dodgerblue] ease-in duration-500 border-solid border-l-[2px] border-[#000]">
            settings
      </RouterLink>
     <div class="pl-5 border-solid border-l-[2px] border-[#000]">
        <button class="text-white hover:text-[dodgerblue] ease-in duration-500" @click="isLogout=true">
          <Icon :color="'[white]'" :icon="'power'"/>
        </button>
     </div>
  </div>
  <video :src="getWeejioBegeh" loop muted autoplay class="bg-weejio"></video>
  <div>
    <h1 class="app-name bg-[dodgerblue]/50 p-3 rounded">{{ getNameApp }}</h1>
  </div>
  <div :class="`logout-confirm ${isLogout === true?'opacity-define':'opacity-undefine'}`">
      <h1 class="text-xl">yakin mau logout</h1>
      <div class="flex gap-3 justify-center">
          <button @click="logout()">ya</button>
          <button @click="isLogout=false">tidak</button>
      </div>
  </div>
  <div class="top3-container">
      <h1>top 3 kombatans</h1>
    <ol class="list-none" v-for="data , i in top3info" :key="i">
      <li>{{ Number(i)+1 }}.{{data.username}}</li>
    </ol>
  </div>
</template>
<style scoped>
.logout-confirm button:hover{
  color: blue;
}
.logout-confirm{
  padding: 15px;
  position: absolute;
  top: 20%;
  right: 50%;
  /* backdrop-filter: blur(10px); */
  color: #fff;
  box-shadow: 1px 1px 12px 2px white;
  font-size: 21px;
  background:linear-gradient(45deg,rgba(0, 0, 0,1) 10%,rgba(0, 81, 128, 0.5),rgba(0, 0, 0,1)) ;
  animation: kelip-form 1s infinite alternate;
  cursor: default;
  border-radius: 6px;
}
.top3-container{
  padding: 15px;
  position: absolute;
  top: 20%;
  right: 20px;
  /* backdrop-filter: blur(10px); */
  color: #fff;
  box-shadow: 1px 1px 12px 2px white;
  font-size: 21px;
  background:linear-gradient(45deg,rgba(0, 0, 0,1) 10%,rgba(0, 81, 128, 0.5),rgba(0, 0, 0,1)) ;
  animation: kelip-form 1s infinite alternate;
  cursor: default;
  border-radius: 6px;
}
.app-name{
  position: absolute;
  top:70px;
  left:15px;
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
.menu-container{
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 99;
  background:linear-gradient(20deg,rgba(0, 0, 0,1) 20%,rgba(0, 81, 128, 0.5),rgba(0, 0, 0,1)) ;
  /* background: rgba(0, 0, 0, .2); */
  /* filter: brightness(105%); */
  /* backdrop-filter: blur(10px); */
  position: absolute;
  top: 0;
  font-size: 25px;
  padding: 5px 35px;
  text-transform: capitalize;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}
.menu-container a{
  /* border-left: 2px solid black; */
  padding: 0 23px;
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