<script setup lang="ts">
import anime1 from '@/assets/anime3.mp4'
import Input from '@/components/atom/Input.vue';
import { RouterLink } from 'vue-router'
import {Debeh} from '@/stores/Debeh'
import { useToken } from '@/services/token';
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
        formdata:{
          username:'',
          password:''
        },
        Token:useToken(),
        debeh:Debeh(),
       audio:(src:string)=>new Audio(src),
       themes:[theme1,theme2,theme3,theme4,theme5,theme6,theme7,theme8,theme9,theme10,theme11]
      }
    },
    updated(){},
    created(){},
    mounted(){
      this.Token.declare()
      if( !this.Token.checkTokenIsEmpty() ){
          this.$router.push('/menu')
      }
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
      getUsername(){
        return this.formdata.username
      },
      getPassword(){
        return this.formdata.password
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
      onChange(e: Event){
          const target=(<HTMLInputElement>e.target)
            this.formdata={...this.formdata,[target.id]:target.value}
      }
    }
  }
</script>
<template>
  <video :src="anime1" loop muted autoplay class="bg-weejio"></video>
  <div>
    <h1 class="app-name bg-[dodgerblue]/50 p-3 rounded">{{ getNameApp }}</h1>
  </div>
  <div class="link-container bg-[dodgerblue]/50 p-2 rounded">
    <RouterLink :to="'/loading/menu'" class="text-white hover:text-[blue] ease-in duration-500 underline">
      menuju game menu
    </RouterLink>
  </div>
    <div class="forms-data bg-[dodgerblue]/50 p-3 rounded">
        <Input  :onChange="onChange" :placeholder="'username'" :id="'username'" label="username"/>
        <Input  :onChange="onChange" :placeholder="'password'" :id="'password'" label="password" type="password"/>
        <button @click="">login</button>
        <div class="flex gap-3 justify-around">
          <RouterLink :to="'/loading/register'" class="text-white hover:text-[blue] ease-in duration-500 underline">
            register
          </RouterLink>
          <RouterLink :to="'/loading/reset'" class="text-white hover:text-[blue] ease-in duration-500 underline">
            reset
          </RouterLink>
        </div>
    </div>
</template>
<style scoped>
.link-container{
  position: absolute;
  top:20%;
  right: 50px;
}
.app-name{
  position: absolute;
  top:50px;
  left:15px;
  color: #fff;
  font-size: 21px;
  box-shadow: 1px 1px 12px 2px white;
  animation: kelip-form 4s infinite alternate-reverse;
}
.forms-data{
  position: absolute;
  top: 40%;
  right: 23px;
  gap: 5px;
  display: flex;
  flex-flow: nowrap column;
  box-shadow: 1px 1px 12px 2px white;
  animation: kelip-form 2s infinite alternate;
}
@keyframes kelip-form {
  from{}
  to{
    box-shadow: 1px 1px 12px 2px dodgerblue;
  }
}
</style>