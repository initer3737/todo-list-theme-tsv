<script setup lang="ts">
import loading1 from '@/assets/loading1.mp4'
import loading2 from '@/assets/loading2.mp4'
import loading3 from '@/assets/loading3.mp4'
import loading4 from '@/assets/loading4.mp4'
import loading5 from '@/assets/loading5.mp4'
import loading6 from '@/assets/loading6.mp4'
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
import { useRouter,useRoute } from 'vue-router'
import {Debeh} from '@/stores/Debeh'
</script>
<script lang="ts">
  export default{
    data(){
      return {
       message:'loading...',
       weejiosbg:[loading1,loading2,loading3,loading4,loading5,loading6],
       route:useRouter(),
       param:useRoute(),
       debeh:Debeh(),
       audio:(src:string)=>new Audio(src),
       themes:[theme1,theme2,theme3,theme4,theme5,theme6,theme7,theme8,theme9,theme10,theme11]
      }
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
    mounted(){
      setTimeout(()=>{
          const param=this.param.params.url
          if(param == 'login'){
            this.route.push(`/`)
          }else{
                const params=param.toString().replace('&','/')
              this.route.push(`/${params}`)
          }
      },9000)
      //audio
      const audio=this.getDataAudio
        audio.loop=true 
        audio.play()
    },
    unmounted(){
      //audio
      this.getDataAudio.pause()
    }
  }
</script>
<template>
  <div class="text-container">
    <h1>{{ message }}</h1>
  </div>
  <video :src="getWeejioBegeh" loop muted autoplay class="bg-weejio"></video>
  <div>
    <h1 class="app-name bg-[dodgerblue]/50 p-3 rounded">{{ getNameApp }}</h1>
  </div>
</template>
<style scoped>
.app-name{
  position: absolute;
  top:50px;
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
.text-container{
  z-index: 99;
  background:linear-gradient(45deg,rgba(0, 0, 255,.5),rgba(128, 0, 128,.5)) ;
  position: absolute;
  top: 50vh;
  left: 50vw;
  font-size: 25px;
  padding: 15px;
  box-shadow: 1px 1px 12px 6px whitesmoke;
  animation: kelip-not-found infinite 4s alternate;
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