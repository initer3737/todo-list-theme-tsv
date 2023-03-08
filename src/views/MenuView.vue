<script setup lang="ts">
import anime1 from '@/assets/anime1.mp4'
import anime2 from '@/assets/anime2.mp4'
import anime3 from '@/assets/anime3.mp4'
import {Debeh} from '@/stores/Debeh'
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