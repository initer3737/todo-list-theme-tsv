<script setup lang="ts">
import anime1 from '@/assets/anime1.mp4'
import anime2 from '@/assets/anime2.mp4'
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
import image11 from '@/assets/enemy.jpg'
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
import SubMenuNAv from '@/components/molekuls/SubMenuNav.vue'
import type IStory from '@/types/storytypes'
</script>
<script lang="ts">
let sliders=[anime1,anime2,anime3];
  export default{
    data(){
      return {
       message:'menu ',
       weejiosbg:[anime1,anime3],
       animehImages:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11],
       debeh:Debeh(),
       numberIndexweejio:0,
       numberIndeximage:0,
       audio:(src:string)=>new Audio(src),
       themes:[theme1,theme2,theme3,theme4,theme5,theme6,theme7,theme8,theme9,theme10,theme11],
       story:0 //[0,1,2]
      }
    },
    mounted(){
      setInterval(()=>{
              this.numberIndexweejio++
              if(this.numberIndexweejio == sliders.length){
                  this.numberIndexweejio=0
              };
        },20000);
      setInterval(()=>{
              this.numberIndeximage++
              if(this.numberIndeximage == this.animehImages.length){
                  this.numberIndeximage=0
              };
        },5000);
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
      },
      getDataAudio(){
        const randomize=Math.ceil(Math.random()* this.themes.length-1)
        const audio=this.audio(this.themes[randomize])
        return audio
      }
    },
    methods:{
      paginate(){
          return `kombatan${this.story}` 
      }
    }
  }
</script>
<template>
  <SubMenuNAv/>
  <video :src="getWeejioBegeh" loop muted autoplay class="bg-weejio"></video>
  <div>
    <h1 class="app-name bg-[dodgerblue]/50 p-3 rounded">{{ getNameApp }}</h1>
  </div>
  <div class="top3-container h-[650px]">
      <div class="content-container-lobby">
        <h1 class="border-b-2 pl-[16px]">biodata</h1>
        <ol class="list-none flex flex-col gap-1">
          <li class="border-b-2">
            <video :src="sliders[story]" class="transition-all duration-[2000] h-[440px]" autoplay loop></video>
          </li>
          <li class="border-b-2 p-2 flex gap-3 justify-center" v-show="story === 0">
            <a href="https://www.youtube.com/shorts/D5xJuyrUIIA" target="_blank" rel="noopener noreferrer" class="transition-all duration-600 hover:text-purple-700 hover:border-purple-800 border-b-2">sebuah bukti</a>
            <a href="https://youtu.be/oeelWkKPiYw" target="_blank" rel="noopener noreferrer" class="transition-all duration-600 hover:text-purple-700 hover:border-purple-800 border-b-2">sebuah bukti</a>
            <a href="https://internasional.republika.co.id/berita/mkm7ca/invasi-as-ke-irak-semua-demi-minyak" target="_blank" rel="noopener noreferrer" class="transition-all duration-600 hover:text-purple-700 hover:border-purple-800 border-b-2">demi sebuah minyak</a>
          </li>
          <li class="border-b-2 py-2">
              <div class="flex gap-3 justify-center">
                  <button @click="story=0" class="">
                      <Icon  :color="'white'" :icon="`circle${story ===0 ?'-fill':''}`" />
                  </button>
                  <button @click="story=1">
                    <Icon  :color="'white'" :icon="`circle${story ===1 ?'-fill':''}`" />
                  </button>
                  <button @click="story=2">
                    <Icon  :color="'white'" :icon="`circle${story ===2 ?'-fill':''}`" />
                  </button>
              </div>
          </li>
        </ol>
      </div>
  </div>
  <div class="slider-images-container w-[350px]">
      <div class="user-status-containers">
        <h1 class="border-b-2 pl-[16px] py-2">{{debeh.story[`${paginate() as keyof IStory}`].name}}</h1>
        <ol class="list-none flex flex-col gap-5 py-3">
          <li class="border-b-2 pl-5 pb-2">
            {{ debeh.story[`${paginate() as keyof IStory}`].story}}
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
.slider-images-container{
  z-index: 2;
  /* display: grid;
  grid-template-columns: repeat(1,1fr);
  padding: 5px 15px; */
  padding:15px 20px;
  position: absolute;
  top: 250px;
  right: 70px;
  /* backdrop-filter: blur(50px); */
  color: #fff;
  /* box-shadow: 1px 1px 12px 2px white; */
  font-size: 21px;
  background:linear-gradient(15deg,rgba(0, 0, 0,1) 10%,rgba(0, 81, 128, 0.5),rgba(0, 0, 0,1)) ;
  /* animation: kelip-form 1s infinite alternate; */
  cursor: default;
  border-radius: 6px;
  border: 2px solid #fff;
  transition: 2s all;
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