<script setup lang="ts">
import loading1 from '@/assets/loading1.mp4'
import loading2 from '@/assets/loading2.mp4'
import loading3 from '@/assets/loading3.mp4'
import loading4 from '@/assets/loading4.mp4'
import loading5 from '@/assets/loading5.mp4'
import loading6 from '@/assets/loading6.mp4'
import { useRouter,useRoute } from 'vue-router'
</script>
<script lang="ts">
  export default{
    data(){
      return {
       message:'loading...',
       weejiosbg:[loading1,loading2,loading3,loading4,loading5,loading6],
       route:useRouter(),
       param:useRoute(),
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
    },
    mounted(){
      setTimeout(()=>{
          const param=this.param.params.url
          if(param == 'login'){
            this.route.push(`/`)
          }else{
            this.route.push(`/${param}`)
          }
      },5000)
    }
  }
</script>
<template>
  <div class="text-container">
    <h1>{{ message }}</h1>
    
  </div>
  <video :src="getWeejioBegeh" loop muted autoplay class="bg-weejio"></video>
</template>
<style scoped>
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