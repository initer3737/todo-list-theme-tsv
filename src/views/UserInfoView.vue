<script setup lang="ts">
import anime1 from '@/assets/anime1.mp4'
import anime3 from '@/assets/anime3.mp4'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.jpeg'
import image3 from '@/assets/image3.jpeg'
import image4 from '@/assets/image4.jpeg'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import image7 from '@/assets/image7.jpeg'
import image8 from '@/assets/image8.jpeg'
import image9 from '@/assets/image9.jpeg'
import image10 from '@/assets/image10.jpeg'
import {Debeh} from '@/stores/Debeh'
import Icon from '@/components/atom/Icon.vue'
import SubMenuNAv from '@/components/molekuls/SubMenuNav.vue'
import { Http } from '@/services/http'
import { useRoute } from 'vue-router'
</script>
<script lang="ts">
  export default{
    data(){
      return {
       message:'menu ',
       weejiosbg:[anime1,anime3],
       animehImages:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10],
       debeh:Debeh(),
       numberIndexweejio:0,
       numberIndeximage:4,
       tooltip:false,
       userInfo:{
          data:{
            avatar:'',
            country:'',
            emblem:'',
            gender:'',
            name:'',
            ranking:'',
            score:'',
            status:'',
            user_conections:'',
            username:'',
          }
       },
       param:useRoute()
      }
    },
    mounted(){
      // console.log(this.param.params)
      Http.get(`/user/${this.param.params.username}`)
      .then(res=>{
          console.log(res.data)
          this.userInfo=res.data
      }).catch(err=>{
        console.log(err)
      })
    },
    computed:{
      getNumberIndexSlider(){
        return this.numberIndexweejio
      },
      getNumberIndexAnimehImage(){
        return this.numberIndeximage
      },
      getWeejioBegeh(){
        const randomize= Math.ceil(Math.random()*this.weejiosbg.length -1);
        return this.weejiosbg[randomize]
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
  <div class="top3-container h-[670px]">
      <div class="content-container-lobby">
        <h1 class="border-b-2 pl-[16px] pb-2 pl-[120px]">
          <Icon :icon="'info-circle-fill'" :color="'white'"/>
          user information
        </h1>
        <ol class="list-none flex flex-col gap-1">
          <li class="border-b-2 p-5">
            <Icon :icon="'person-bounding-box'" :color="'white'"/> 
            {{ userInfo.data.name}}
          </li>
          <li class="border-b-2 p-5">
            <Icon :icon="'flag-fill'" :color="'white'"/> 
            {{ userInfo.data.country}}
          </li>
          <li class="border-b-2 p-5">
            <Icon :icon="'fan'" :color="'white'"/>
            {{ userInfo.data.score}}
          </li>
          <li class="border-b-2 p-5">
            <Icon :icon="'diagram-3'" :color="'white'"/>
            {{ userInfo.data.ranking}}
          </li>
          <li class="border-b-2 p-5">
            <Icon :icon="'award-fill'" :color="'white'"/>
            {{ userInfo.data.emblem}}
          </li>
          <li class="border-b-2 p-5">
            <div class=" status-cut" @mouseenter="()=>{
                tooltip=true
            }"  
            @mouseleave="()=>{
                tooltip=false
            }"
            >
            <Icon :icon="'pencil-square'" :color="'white'"/>
              {{ userInfo.data.status.substring(0,10)}}+'...hover me!
            </div>
          </li>
        </ol>

      </div>
  </div>
  <div class="slider-images-container ">
      <div class="user-status-containers">
        <h1 class="border-b-2 pl-[16px] py-2">
          {{ userInfo.data.username}} |
          <Icon :icon="'gender-male'" :color="'white'"/> |
          <Icon :icon="'circle-fill'" :color="` ${userInfo.data.user_conections === 'online'?'text-green-600':'text-red-600'} `"/> 
        </h1>
        <ol class="list-none flex flex-col gap-5 py-3">
          <li class="border-b-2 pl-5 pb-2">
            <img :src="userInfo.data.avatar !== null?debeh.getAvatar+userInfo.data.avatar:animehImages[getNumberIndexAnimehImage]" alt="image slider" srcset="" class="ease-out duration-600 object-center w-[350px] h-[350px]">
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
  <div :class="`user-status-uncut-container ${tooltip === false?'opacity-undefine':'opacity-define'} w-[750px] ` ">
      <div class="user-status-containers">
        <h1 class="border-b-2 pl-[16px] py-2">status</h1>
        <ol class="list-none flex flex-col gap-5 py-3">
          <li class="border-b-2 pl-5">
            {{ userInfo.data.status}}
          </li>
        </ol>
      </div>
  </div>
</template>
<style scoped>

.status-cut{
  z-index: 45;
  opacity: 1;
}
/* .status-cut:hover {
  opacity: 1;
} */
.slider-images-container{
  z-index: 2;
  /* display: grid;
  grid-template-columns: repeat(1,1fr);
  padding: 5px 15px; */
  padding:15px 20px;
  position: absolute;
  top: 250px;
  right: 70px;
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
.user-status-uncut-container{
  backdrop-filter: brightness(20%);
  z-index: 90;
  /* display: grid;
  grid-template-columns: repeat(1,1fr);
  padding: 5px 15px; */
  padding:15px 20px;
  position: absolute;
  top: 150px;
  left: 250px;
  color: #fff;
  font-size: 21px;
  /* background:linear-gradient(45deg,rgba(0, 0, 0,1) 10%,rgba(0, 81, 128, 0.5),rgba(0, 0, 0,1)) ; */
  /* animation: kelip-form 1s infinite alternate; */
  cursor: default;
  border-radius: 6px;
  border: 2px solid #fff;
  transition: all 2s;
}
.user-status-container{
  z-index: 1;
  /* display: grid;
  grid-template-columns: repeat(1,1fr);
  padding: 5px 15px; */
  padding:15px 20px;
  position: absolute;
  top: 150px;
  right: 150px;
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
.user-status-container:hover{
  z-index: 3;
  transition: ease 2s;
  /* backdrop-filter: blur(5px); */
  backdrop-filter: brightness(20%);
  /* backdrop-filter: contrast(40%); */
  /* backdrop-filter: drop-shadow(4px 4px 10px blue); */
  /* backdrop-filter: grayscale(30%); */
  /* backdrop-filter: hue-rotate(120deg); */
  /* backdrop-filter: invert(70%); */
  /* backdrop-filter: opacity(20%); */
  /* backdrop-filter: sepia(90%); */
  /* backdrop-filter: saturate(10%); */
}
.content-container-lobby{
  display: grid;
  grid-template-columns: repeat(1,1fr);
  padding: 5px 15px;
}
.top3-container{
  z-index: 2;
  width: 900px;
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