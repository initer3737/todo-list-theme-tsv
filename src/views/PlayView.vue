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
import bullet from '@/assets/bullet.png'
import enemy from '@/assets/enemy.png'
import enemy_down from '@/assets/enemy_down.png'
import target from '@/assets/target.png'
import weapon from '@/assets/weapon.png'
import sprSoundFire from '@/assets/SPR_2_1.mp3'
import ammoEmpty from '@/assets/empty-gun.mp3'
import ammofull from '@/assets/reload1.mp3'
import reload from '@/assets/reload2.mp3'
import warThemePlay from '@/assets/russian-radio-chatter-and-war-sound-effect.mp3'
import {Debeh} from '@/stores/Debeh'
import Icon from '@/components/atom/Icon.vue'
import Input from '@/components/atom/Input.vue'
import SubMenuNAv from '@/components/molekuls/SubMenuNav.vue'
import { Http } from '@/services/http'
</script>
<script lang="ts">
let formdatas={
    avatar:''
}
  export default{
    data(){
      return {
       ammo:10,
       score:0,
       hightscore:0,
       is_fire:true,
       is_hit:false,
      //  is_miss:false,
       weejiosbg:[anime1,anime3],
       animehImages:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10],
       debeh:Debeh(),
       numberIndexweejio:0,
       numberIndeximage:0,
       tooltipUserStatus:false,
       is_pause:false,
       isUploadFile:false,
       formdata:formdatas,
       coordinateY:0,
       coordinateX:0,
        audio:(src:string)=>new Audio(src)
      }
    },
    updated(){
      if(this.score > this.hightscore){
          Http.post('/game/update',{score:this.score})
              .then(res=>{
                  console.log(res.data.data[0].score)
              })
              Http.get('/game/score')
              .then(res=>{
                  console.log(res.data.data[0].score)
                  this.hightscore=res.data.data[0].score
              })
            // }
      }
    },
    watch:{
      score(newValue,oldValue){
            if(newValue > this.hightscore){
              // Http.get('/game/score')
              // .then(res=>{
              //     console.log(res.data.data[0].score)
              //     this.hightscore=res.data.data[0].score
              // })
            }
      }
    },
    mounted(){
        Http.get('/game/score')
        .then(res=>{
            console.log(res.data.data[0].score)
            this.hightscore=res.data.data[0].score
        })

          setInterval(()=>{
            this.coordinateX=this.randomNum(850)
            this.coordinateY=this.randomNum(350)
          },1000)

        document.addEventListener('keypress',(e:KeyboardEvent)=>{
            // if(e.key === 'r')alert('a')
            if(e.key === 'r'){
              if(this.ammo === 10){
                  this.srcAudio(ammofull).play()
              }else{
                this.srcAudio(reload).play()
                setTimeout(()=>{
                  this.ammo=10
                },3000)
              }
            }
        })

        document.addEventListener('mousemove',(e:MouseEvent)=>{
            const target=this.getElement('target')
            target!.style.top=(e.pageY-20)+'px'
            target!.style.left=(e.pageX-30)+'px'
            target!.style.opacity=`1`
        })
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
      } ,
      getDataAudio(){
        const audio=this.audio(warThemePlay)
        return audio
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
            this.isUploadFile=true
      },
      srcAudio(src:string){
        return new Audio(src)
      },
      hit(){
            this.is_hit=true
        if(this.is_hit === true){
              if(this.ammo !==0)this.score++
              let sound=sprSoundFire
              if(this.ammo === 0)sound=ammoEmpty
              if(this.ammo !==0)this.ammo--
              this.srcAudio(sound).play()        
            }

              // this.is_fire=false
            setTimeout(()=>{
              // this.is_fire=true
              this.is_hit=false
            },3000)
      },
      fire(){
          if(this.is_fire){
              // if(this.ammo !==0)this.score++
              let sound=sprSoundFire
              if(this.ammo === 0)sound=ammoEmpty
              if(this.ammo !==0)this.ammo--
              this.srcAudio(sound).play()  
              // this.is_miss=true      
            }
            if(this.ammo >0)this.is_fire=false
            setTimeout(()=>{
              if(this.ammo >0)this.is_fire=true
              // this.is_miss=false
            },3000)
      },
     randomNum(numb:number){
        return Math.ceil(Math.random()* numb)
     },
     methodEnemy(){
      // if(this.ammo <=0){
      //     return enemy
      // }
        if(this.is_hit === false){
           return enemy
        }else{
            return this.ammo===0?enemy:enemy_down
        }
     } ,
     enemyEffectBlast(){
         if(this.is_hit === false){
            return 'opacity-define'
         }else{
          return this.ammo > 0?'opacity-undefine':'opacity-define'
         }
     }
    }
  }
</script>
<template>
  <!-- <SubMenuNAv/> -->
  <video :src="getWeejioBegeh" loop muted autoplay class="bg-weejio"></video>
    <div class="weapon-container">
        <img :src="weapon" alt="" class="w-[155px]"> 
        <div class="flex gap-2 cursor-default">
          {{ammo}}/90 
          <div class="flex">
            <img :src="bullet" alt="" class="w-[10px]">
            <img :src="bullet" alt="" class="w-[10px]">
            <img :src="bullet" alt="" class="w-[10px]">
          </div>
            <div :class="`reload-message ${ammo == 0?'opacity-define':'opacity-undefine'}`">
              <h1>press R to reload</h1>
            </div>
            <div :class="`reload-message ${is_hit === true && ammo>0?'opacity-define':'opacity-undefine'}`">
              <h1>hit!!!</h1>
            </div>
        </div>
    </div>

    <div class="playing-ground" @click="fire()">
      <img :src="methodEnemy()" alt="" :class="`w-[60px] enemy ${enemyEffectBlast()} ${is_pause?'opacity-undefine':'opacity-define'}`" @click="hit()" :style="`--translate-x:${coordinateX}px;--translate-y:${coordinateY}px;`">
    </div>
    <div class="score-container">
      <p>score : {{score}}</p>
      <p>highScore : {{hightscore}}</p>
    </div>
    <img :src="target" alt="" class="w-[55px]" id="target"> 
  <button @click="()=>{
                is_pause=!is_pause
            }" class="btn-pause hover:bg-[dodgerblue]/50">pause</button>
 <div :class="`${is_pause === true ?'pause-filter':'continue-filter'}`"></div>           
 
  <div :class="`user-status-uncut-container ${is_pause === false?'opacity-undefine user-info-untogled':'opacity-define user-info-togled'} w-[750px]` ">
      <div class="user-status-containers">
        <h1 class="border-b-2 pl-[16px] py-2">pause menu {{ `<${getNameApp}>` }} </h1>
        <ol class="list-none flex flex-col gap-1">
          <li class="border-b-2 p-5 cursor-pointer transition-all duration-[500] hover:text-[dodgerblue]" @click="()=>{
            is_pause=false
          }">
            <Icon :icon="'person-bounding-box'" :color="'white'"/> continue
          </li>
          <li class="border-b-2 p-5 cursor-pointer transition-all duration-[500] hover:text-[dodgerblue]">
            <RouterLink :to="'loading/menu'">
              <Icon :icon="'flag-fill'" :color="'white'"/> exit to main menu
            </RouterLink>
          </li>
          <li class="border-b-2 p-5 hidden">
            <div class=" status-cut" @mouseenter="()=>{
              if(is_pause ==  true)tooltipUserStatus=true
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
</template>
<style scoped>
cursor{
  z-index: 112;
}
#target{
  opacity: 0;
  position: absolute;
  /* cursor: none; */
  /* z-index: 200; */
}
.score-container{
  position: absolute;
  right: 10px;
  bottom: 50%;
  display: flex;
  flex-flow:column nowrap;
  backdrop-filter: blur(30px);
  padding:50px;
  border:2px solid #fff;
  font-size: 21px;
  color:#fff;
}
.playing-ground{
  cursor: none;
  position: absolute;
  min-width: 150px;
  width: 950px;
  height: 490px;
  min-height: 150px;
  border:2px solid #fff;
  left: 20px;
  bottom:0;
  padding: 4px;
  background: linear-gradient(45deg,rgba(0,0,0,.6) ,rgba(30, 144, 255,.6));
  z-index: 10;
}
.enemy{
  position: absolute;
  top: 0;
  z-index: 20;
  transform: translateX(var(--translate-x)) translateY(var(--translate-y));
  /* transform: translateX(850px) translateY(350px); */
  transition: all 2s;
  cursor: none;
}
.reload-message{
  border-bottom: 2px solid dodgerblue;
  animation: kelip-reload infinite alternate 2s;
  transition: all 1s;
}
@keyframes kelip-reload{
    /* kelip is indonesian language it mean blink */
    from{}
    to{
      color: royalblue !important;
      border-bottom: 2px solid #fff;
    }
}
.weapon-container{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: #fff;
  font-size: 16px;
  position: absolute;
  top: 0;
  left: 10px;
}
.continue-filter{
  transition: all 2s;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 200vh;
  overflow: hidden;
  background: linear-gradient(5deg,rgba(0,0,0,1) 40%,rgb(30, 144, 255,.6));
  top: -9000px;
}
.pause-filter{
  transition: all 2s;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 200vh;
  overflow: hidden;
  background: linear-gradient(5deg,rgba(0,0,0,1) 40%,rgb(30, 144, 255,.6));
}
.btn-pause{
  position: absolute;
  top: 10px;
  right: 10px;
  backdrop-filter: blur(30px);
  padding:5px 15px;
  border: 2px solid #fff !important;
  transition: all 2s;
}
.btn-pause:hover{
  backdrop-filter: brightness(30%);
  transition: all 2s;
  border-radius: 6px;
}

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