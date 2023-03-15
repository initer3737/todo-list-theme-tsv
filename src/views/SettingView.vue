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
import { Http } from '@/services/http'
</script>
<script lang="ts">
let formdatas={
    avatar:'',
    username:'',
    name:'',
    country:'',
    status:'',
    gender:'',
    password:'',
    password_confirm:''
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
       isUploadFile:false,
       formdata:formdatas,
       settingInfo:{
          data:[{
            avatar:'' ,
            country:"",
            gender:"",
            name:"",
            password:"",
            score:'',
            status:"",
            user_conections: "",
            username:""
          }]
       },
       isSettingUpdate:false,
       errMessage:{
          data:{
            errors:{
              country:[],
              username:[],
              name:[],
              avatar:[],
              status:[],
              password:[],
              password_confirm:[],
            },
            message:''
          }
       }
      }
    },
    mounted(){
      Http.get('/setting/info')
      .then(res=>{
        console.log('res will be',res)
        this.settingInfo=res.data
      }).catch(err=>{
          console.log('err will be',err)
      })
    },
    watch:{
      isSettingUpdate(newValue,oldValue){
            if(newValue === true){
              Http.get('/setting/info')
              .then(res=>{
                console.log('res will be',res)
                this.settingInfo=res.data
              }).catch(err=>{
                  console.log('err will be',err)
              })
            }
      },
      // isUploadFile(newValue,oldValue){
      //     if(newValue === true){
      //         setTimeout(() => {
      //             this.isUploadFile=false
      //         }, 4000);
      //     }
      // }
    },
    updated(){
        if(this.isSettingUpdate === true){
          // Http.get('/setting/info')
          //   .then(res=>{
          //     console.log('res will be',res)
          //     this.settingInfo=res.data
          //   }).catch(err=>{
          //       console.log('err will be',err)
          //   })
        }
        //
        setTimeout(()=>{
            this.errMessage.data.message=''
            this.errMessage.data.errors.username.length=0
            this.errMessage.data.errors.country.length=0
            this.errMessage.data.errors.name.length=0
            this.errMessage.data.errors.status.length=0
            this.errMessage.data.errors.password.length=0
            this.errMessage.data.errors.password_confirm.length=0
            this.errMessage.data.errors.avatar.length=0
        },4000)
    },
    computed:{
      getNumberIndexSlider(){
        return this.numberIndexweejio
      },
      getNumberIndexAnimehImage(){
        const randomize=Math.ceil(Math.random()*this.animehImages.length-1);
        return randomize
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
      OnChangeFile(e:Event){
          const target=(<HTMLInputElement>e.currentTarget)
            // this.formdatas.avatar=target.files[0]
            this.formdata={...this.formdata,[target.id]:target.files![0]}
            this.isUploadFile=true
      },
      OnChange(e:Event){
          const target=(<HTMLInputElement>e.target)
            // this.formdatas.avatar=target.files[0]
            this.formdata={...this.formdata,[target.id]:target.value}
      },
      OnChangeSelect(e:Event){
          const target=(<HTMLSelectElement>e.target)
            // this.formdatas.avatar=target.files[0]
            this.formdata={...this.formdata,[target.id]:target.selectedOptions[0].value}
      },
      sendDataSetting(){
          Http.post('/setting',this.formdata)
          .then(res=>{
              console.log('response success will be',res.status)
              if(res.status === 200){
                    this.isSettingUpdate=true
                setTimeout(()=>{
                  this.isSettingUpdate=false
                  this.isUploadFile=false
                },4000)
              }
          }).catch(({response})=>{
              console.log('err will be ',response)
              this.errMessage=response
          })
          //   this.isSettingUpdate=true
          // setTimeout(()=>{
          //   this.isSettingUpdate=false
          // },1000)
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

<form method="post" @submit.prevent="sendDataSetting">
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
            <h3 class="err-msg" v-show="errMessage.data.message.length > 1">{{errMessage.data.message}}</h3>
             <Input :label="'username'" :placeholder="'username'" :id="'username'" :onChange="OnChange"/>
             <h3 class="err-msg" v-show="errMessage.data.errors?.username !== undefined" v-for="err in errMessage.data.errors?.username">{{err}}</h3>
           </div>
          </li>
          <li class="border-b-2 p-2 flex items-center gap-3">
            <Icon :icon="'pencil-square flag-fill'" :color="'white'"/> 
           <div class="flex flex-col">
             <Input :label="'name'" :placeholder="'name'" :id="'name'" :onChange="OnChange"/>
             <h3 class="err-msg" v-show="errMessage.data.errors?.name !== undefined" v-for="err in errMessage.data.errors?.name">{{err}}</h3>
           </div>
          </li>
          <li class="border-b-2 p-2 flex items-center gap-3">
            <Icon :icon="'pencil-square flag-fill'" :color="'white'"/> 
           <div class="flex flex-col">
             <Input :label="'country'" :placeholder="'country'" :id="'country'" :onChange="OnChange"/>
             <h3 class="err-msg" v-show="errMessage.data.errors?.country !== undefined" v-for="err in errMessage.data.errors?.country">{{err}}</h3>
           </div>
          </li>
          <li class="border-b-2 p-2 flex items-center gap-3">
            <Icon :icon="'pencil-square flag-fill'" :color="'white'"/> 
           <div class="flex flex-col">
             <Input :label="'status'" :placeholder="'status'" :id="'status'" :onChange="OnChange"/>
             <h3 class="err-msg" v-show="errMessage.data.errors?.status !== undefined" v-for="err in errMessage.data.errors?.status">{{err}}</h3>
          </div>
          </li>
          <li class="border-b-2 p-2 flex items-center gap-3">
            <Icon :icon="'pencil-square flag-fill'" :color="'white'"/> 
           <div class="flex flex-row gap-3">
            <select name="" id="gender" :onChange="OnChangeSelect">
                <option value="">gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
            </select>
           </div>
          </li>
          <li class="border-b-2 p-2 flex items-center gap-3">
            <Icon :icon="'pencil-square flag-fill'" :color="'white'"/> 
           <div class="flex flex-col">
             <Input :label="'password'" :placeholder="'password'" :id="'password'" :type="'password'" :onChange="OnChange"/>
             <h3 class="err-msg" v-show="errMessage.data.errors?.password !== undefined" v-for="err in errMessage.data.errors?.password">{{err}}</h3>
           </div>
          </li>
          <li class="border-b-2 p-2 flex items-center gap-3">
            <Icon :icon="'pencil-square flag-fill'" :color="'white'"/> 
           <div class="flex flex-col">
             <Input :label="'password_confirm'" :placeholder="'password confirm'" :id="'password_confirm'" :type="'password'" :onChange="OnChange"/>
             <h3 class="err-msg" v-show="errMessage.data.errors?.password_confirm !== undefined" v-for="err in errMessage.data.errors?.password_confirm">{{err}}</h3>
           </div>
          </li>
          <li class="border-b-2 p-2 flex items-center gap-3 hidden">
            <Icon :icon="'pencil-square flag-fill'" :color="'white'"/> 
           <div class="flex flex-col">
             <Input :label="'avatar'" :placeholder="'avatar'" :id="'avatar'" :type="'file'" :Accept="'image/*'" :onChange="OnChangeFile"/>
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
</form>
  <div class="slider-images-container ">
      <div class="user-status-containers">
        <h1 class="border-b-2 pl-[16px] py-2">
          {{settingInfo.data[0].username}} |
          <Icon :icon="`gender-${settingInfo.data[0].gender}`" :color="'white'"/> |
          <button @click="modalAvatar()">ganti gambar <Icon v-show="isUploadFile == true" :color="' text-green-400'" :icon="'check-circle'"/> </button>
        </h1>
        <ol class="list-none flex flex-col gap-5 py-3">
          <li class="border-b-2 pl-5 pb-2">
            <img :src="settingInfo.data[0].avatar !==null?debeh.getAvatar+settingInfo.data[0].avatar:animehImages[getNumberIndexAnimehImage]" alt="image slider" srcset="" class="ease-out duration-600 object-center w-[350px] h-[350px]">
          </li>
          <li class="border-b-2 pl-5 pb-2">
            <h3 class="err-msg" v-show="errMessage.data.errors?.avatar !== undefined" v-for="err in errMessage.data.errors?.avatar">{{err}}</h3>
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
            <Icon :icon="'person-vcard-fill'" :color="'white'"/> 
            {{settingInfo.data[0].username}}
          </li>
          <li class="border-b-2 p-5">
            <Icon :icon="'person-bounding-box'" :color="'white'"/> 
            {{settingInfo.data[0].name}}
          </li>
          <li class="border-b-2 p-5">
            <Icon :icon="'flag-fill'" :color="'white'"/> 
            {{settingInfo.data[0].country}}
          </li>
          <li class="border-b-2 p-5">
            <Icon :icon="'fan'" :color="'white'"/> password
          </li>
          <li class="border-b-2 p-5">
            <Icon :icon="'diagram-3'" :color="'white'"/> status
          </li>
          <li class="border-b-2 p-5">
            <Icon :icon="`gender-${settingInfo.data[0].gender}`" :color="'white'"/> {{settingInfo.data[0].gender}}
          </li>
          <li class="border-b-2 p-5">
            <div class=" status-cut" @mouseenter="()=>{
              if(tooltipUserInfo ==  true)tooltipUserStatus=true
            }"
            @mouseleave="()=>{
              tooltipUserStatus=false
            }">
            <Icon :icon="'pencil-square'" :color="'white'"/> {{
            settingInfo.data[0].status.substring(0,10)+'...hover me!' }}
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
            {{settingInfo.data[0].status}}
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