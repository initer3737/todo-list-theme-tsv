<script setup lang="ts">
import anime1 from '@/assets/anime1.mp4'
import anime2 from '@/assets/anime2.mp4'
import anime3 from '@/assets/anime3.mp4'
import {Debeh} from '@/stores/Debeh'
import Icon from '@/components/atom/Icon.vue'
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
          const randmize=Math.ceil(Math.random()*this.weejiosbg.length-1);
        return this.weejiosbg[randmize]
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
  <div class="menu-container">
      <RouterLink :to="'/loading/register'" class="text-white hover:text-[dodgerblue] ease-in duration-500  border-solid border-r-[2px] border-[#000]">
            user info
      </RouterLink>
      <RouterLink :to="'/loading/register'" class="text-white hover:text-[dodgerblue] ease-in duration-500  border-solid border-r-[2px] border-[#000]">
            credit lists
      </RouterLink>
      <RouterLink :to="'/loading/register'" class="text-white hover:text-[dodgerblue] ease-in duration-500">
            play
      </RouterLink>
      <RouterLink :to="'/loading/register'" class="text-white hover:text-[dodgerblue] ease-in duration-500  border-solid border-l-[2px] border-[#000]">
            galeries
      </RouterLink>
      <RouterLink :to="'/loading/register'" class="text-white hover:text-[dodgerblue] ease-in duration-500 border-solid border-l-[2px] border-[#000]">
            lobby
      </RouterLink>
      <RouterLink :to="'/loading/register'" class="text-white hover:text-[dodgerblue] ease-in duration-500 border-solid border-l-[2px] border-[#000]">
            settings
      </RouterLink>
      <RouterLink :to="'/loading/register'" class="text-white hover:text-[dodgerblue] ease-in duration-500 border-solid border-l-[2px] border-[#000]">
        <Icon :color="'[white]'" :icon="'power'"/>
      </RouterLink>
  </div>
  <video :src="getWeejioBegeh" loop muted autoplay class="bg-weejio"></video>
  <div>
    <h1 class="app-name bg-[dodgerblue]/50 p-3 rounded">{{ getNameApp }}</h1>
  </div>
  <div class="top3-container">
      <h1>top 3 kombatans</h1>
    <ol class="list-none">
      <li>1.yotsusan machi</li>
      <li>2.initer3737</li>
      <li>3.yotsuba nakano</li>
    </ol>
  </div>
</template>
<style scoped>
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