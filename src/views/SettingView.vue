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
import Input from '@/components/atom/Input.vue'
import SubMenuNAv from '@/components/molekuls/SubMenuNav.vue'
</script>
<script lang="ts">
let formdatas={
    avatar:''
}
  export default{
    data(){
      return {
       message:'menu ',
       weejiosbg:[anime1,anime3],
       animehImages:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10],
       debeh:Debeh(),
       numberIndexweejio:0,
       numberIndeximage:0,
       tooltipUserStatus:false,
       tooltipUserInfo:false,
       formdata:formdatas,
      }
    },
    mounted(){
      
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
      getElement(el:string){
          return document.getElementById(el)
      },
      modalAvatar(){
        this.getElement('avatar')?.click()
      },
      readImage(e:Event){
          const target=(<HTMLInputElement>e.currentTarget)
            // this.formdatas.avatar=target.files[0]
            this.formdata={...this.formdata,[target.id]:target.files![0]}
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
  <div class="top3-container h-[670px]">
      <div class="content-container-lobby">
        <h1 class="border-b-2 pl-[16px] pb-2 pl-[120px] cursor-pointer" @click="()=>{
                tooltipUserInfo=!tooltipUserInfo
            }">
          <Icon :icon="'info-circle-fill'" :color="'white'"/>
          user setting
        </h1>
        <ol class="list-none flex flex-col gap-1">
          <li class="border-b-2 p-2 flex items-center gap-3">
            <Icon :icon="'pencil-square person-bounding-box'" :color="'white'"/> 
           <div class="flex flex-col">
             <Input :label="'username'" :placeholder="'username'" :id="'username'"/>
           </div>
          </li>
          <li class="border-b-2 p-2 flex items-center gap-3">
            <Icon :icon="'pencil-square flag-fill'" :color="'white'"/> 
           <div class="flex flex-col">
             <Input :label="'name'" :placeholder="'name'" :id="'name'" />
           </div>
          </li>
          <li class="border-b-2 p-2 flex items-center gap-3">
            <Icon :icon="'pencil-square flag-fill'" :color="'white'"/> 
           <div class="flex flex-col">
             <Input :label="'country'" :placeholder="'country'" :id="'country'" />
           </div>
          </li>
          <li class="border-b-2 p-2 flex items-center gap-3">
            <Icon :icon="'pencil-square flag-fill'" :color="'white'"/> 
           <div class="flex flex-col">
             <Input :label="'status'" :placeholder="'status'" :id="'status'" />
           </div>
          </li>
          <li class="border-b-2 p-2 flex items-center gap-3">
            <Icon :icon="'pencil-square flag-fill'" :color="'white'"/> 
           <div class="flex flex-row gap-3">
            <select name="" id="gender">
                <option value="">gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
            </select>
           </div>
          </li>
          <li class="border-b-2 p-2 flex items-center gap-3">
            <Icon :icon="'pencil-square flag-fill'" :color="'white'"/> 
           <div class="flex flex-col">
             <Input :label="'password'" :placeholder="'password'" :id="'password'" :type="'password'"/>
           </div>
          </li>
          <li class="border-b-2 p-2 flex items-center gap-3">
            <Icon :icon="'pencil-square flag-fill'" :color="'white'"/> 
           <div class="flex flex-col">
             <Input :label="'password_confirm'" :placeholder="'password confirm'" :id="'password_confirm'" :type="'password'" />
           </div>
          </li>
          <li class="border-b-2 p-2 flex items-center gap-3 hidden">
            <Icon :icon="'pencil-square flag-fill'" :color="'white'"/> 
           <div class="flex flex-col">
             <Input :label="'avatar'" :placeholder="'avatar'" :id="'avatar'" :type="'file'" :Accept="'image/*'" :onchange="readImage"/>
           </div>
          </li>
          <li class="border-b-2 p-2 flex justify-center items-center gap-3">
            <div class="cursor-pointer">
              <button>submit</button>
            </div>
          </li>
        </ol>

      </div>
  </div>
  <div class="slider-images-container ">
      <div class="user-status-containers">
        <h1 class="border-b-2 pl-[16px] py-2">
          yotsusan machi |
          <Icon :icon="'gender-male'" :color="'white'"/> |
          <button @click="modalAvatar()">ganti gambar <Icon v-show="formdatas.avatar.trim() != ''" :color="' text-pink-400'" :icon="'instagram'"/> </button>
        </h1>
        <ol class="list-none flex flex-col gap-5 py-3">
          <li class="border-b-2 pl-5 pb-2">
            <img :src="animehImages[getNumberIndexAnimehImage]" alt="image slider" srcset="" class="ease-out duration-600 object-center w-[350px] h-[350px]">
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
  <div :class="`user-status-uncut-container ${tooltipUserInfo === false?'opacity-undefine user-info-untogled':'opacity-define user-info-togled'} w-[750px]` ">
      <div class="user-status-containers">
        <h1 class="border-b-2 pl-[16px] py-2">user informasi</h1>
        <ol class="list-none flex flex-col gap-1">
          <li class="border-b-2 p-5">
            <Icon :icon="'person-bounding-box'" :color="'white'"/> yotsu
          </li>
          <li class="border-b-2 p-5">
            <Icon :icon="'flag-fill'" :color="'white'"/> indonesia
          </li>
          <li class="border-b-2 p-5">
            <Icon :icon="'fan'" :color="'white'"/> password
          </li>
          <li class="border-b-2 p-5">
            <Icon :icon="'diagram-3'" :color="'white'"/> status
          </li>
          <li class="border-b-2 p-5">
            <Icon :icon="'gender-male'" :color="'white'"/> male
          </li>
          <li class="border-b-2 p-5">
            <div class=" status-cut" @mouseenter="()=>{
              if(tooltipUserInfo ==  true)tooltipUserStatus=true
            }"
            @mouseleave="()=>{
              tooltipUserStatus=false
            }">
            <Icon :icon="'pencil-square'" :color="'white'"/> {{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid nam magni, optio, sapiente natus voluptates dicta non consequuntur quidem sint? Eligendi earum pariatur odit.'.substring(0,10)+'...hover me!' }}
            </div>
          </li>
        </ol>
      </div>
  </div>
  <div :class="`user-status-tooltip ${tooltipUserStatus === false?'opacity-undefine element-invisible':'opacity-define element-visible'} w-[750px] ` ">
      <div class="user-status-containers">
        <h1 class="border-b-2 pl-[16px] py-2">status</h1>
        <ol class="list-none flex flex-col gap-5 py-3">
          <li class="border-b-2 pl-5">
            voluptas corporis eligendi perspiciatis voluptatem sit maiores perferendis, nesciunt maxime itaque qui architecto enim doloremque praesentium reiciendis, incidunt commodi veniam sint unde repellat repellendus! Nobis quaerat, a totam consequatur laborum at esse sunt assumenda, quod officiis minima odit incidunt ad quos blanditiis sapiente laboriosam saepe voluptas explicabo 
          </li>
        </ol>
      </div>
  </div>
</template>
<style scoped>

.element-visible{
  z-index: 900 !important;
}
.element-invisible{
  z-index: -900 !important;
}

.user-info-togled{
  position: absolute;
  top: 50px;
  right: 150px;
  z-index: 900 !important;
}
.user-info-untogled{
  position: absolute;
  top: -1550px;
  right: 350px;
  z-index: -900 !important;
  overflow: hidden;
}
.user-status-tooltip{
  /* backdrop-filter: blur(30px); */
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
  background:linear-gradient(45deg,rgba(0, 0, 0,1) 10%,rgba(0, 81, 128, 0.8),rgba(0, 0, 0,1)) ;
  animation: kelip-form 3s infinite alternate-reverse;
  cursor: default;
  border-radius: 6px;
  border: 2px solid #fff;
  transition: all 2s;
  box-shadow: 1px 1px 6px 6px #fff;
}

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