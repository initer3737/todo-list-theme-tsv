<script setup lang="ts">
import anime1 from '@/assets/anime3.mp4'
import Input from '@/components/atom/Input.vue';
import { RouterLink } from 'vue-router'
import {Debeh} from '@/stores/Debeh'
import { Http } from '@/services/http';
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
          email:'',
          country:'',
          gender:'',
          password:'',
          password_confirm:''
        },
        debeh:Debeh(),
        Token:useToken(),
        succmessage:{
          data:{
              message:'',
              status:'',
              token:'',
              type:''
          }
        },
        errmessage:{
          data:{
              message:'',
            errors:{
              country:'',
              email:'',
              gender:'',
              password:'',
              password_confirm:'',
              username:'',
            }
          }
        },
       audio:(src:string)=>new Audio(src),
       themes:[theme1,theme2,theme3,theme4,theme5,theme6,theme7,theme8,theme9,theme10,theme11]
      }
    },
    mounted(){
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
    updated(){
      setTimeout(()=>{
          this.errmessage.data.message=''
          this.errmessage.data.errors.country=''
          this.errmessage.data.errors.username=''
          this.errmessage.data.errors.email=''
          this.errmessage.data.errors.gender=''
          this.errmessage.data.errors.password=''
          this.errmessage.data.errors.password_confirm=''
          this.succmessage.data.message=''
      },4000)
    },
    methods:{
      onChange(e: Event){
          const target=(<HTMLInputElement>e.target)
            this.formdata={...this.formdata,[target.id]:target.value}
      },
      onchangeSelect(e: Event){
          const target=(<HTMLSelectElement>e.target)
            this.formdata={...this.formdata,[target.id]:target.selectedOptions[0].value}
      },
      registerClick(){
            // console.log(this.formdata)
           Http.post('/register',this.formdata)
          .then(res=>{
              console.log('success will be ',res)
              this.succmessage=res
              this.Token.createToken(this.succmessage.data.token)
              setTimeout(()=>{
                this.$router.push('/loading/menu')
              },4000)
          })
          .catch(({response})=>{
            // err={...errs.response.data}
              console.log('error will be',response)
              this.errmessage=response
          })
      }
    }
  }
</script>
<template>
  <video :src="anime1" loop muted autoplay class="bg-weejio"></video>
  <div>
    <h1 class="app-name bg-[dodgerblue]/50 p-3 rounded">{{ getNameApp }}</h1>
  </div>
<form method="post" @submit.prevent="registerClick">
    <div class="forms-data bg-[dodgerblue]/50 p-3 rounded">
      <h3 class="succ-msg" v-show="succmessage.data.message.length>1">{{succmessage.data.message}}</h3>
      <h3 class="err-msg" v-show="errmessage.data.message.length>1">{{errmessage.data.message}}</h3>
        <Input  :onChange="onChange" :placeholder="'username'" :id="'username'" label="username"/>
        <h3 class="err-msg" v-show="errmessage.data.errors.username">{{errmessage.data.errors.username}}</h3>
        <Input  :onChange="onChange" :placeholder="'email'" :id="'email'" label="email"/>
        <h3 class="err-msg" v-show="errmessage.data.errors.email">{{errmessage.data.errors.email}}</h3>
        <Input  :onChange="onChange" :placeholder="'country'" :id="'country'" label="country"/>
        <h3 class="err-msg" v-show="errmessage.data.errors.country">{{errmessage.data.errors.country}}</h3>
        <Input  :onChange="onChange" :placeholder="'password'" :id="'password'" label="password" type="password"/>
        <h3 class="err-msg" v-show="errmessage.data.errors.password">{{errmessage.data.errors.password}}</h3>
        <Input  :onChange="onChange" :placeholder="'password confirm'" :id="'password_confirm'" label="password_confirm" type="password confirm"/>
        <h3 class="err-msg" v-show="errmessage.data.errors.password_confirm">{{errmessage.data.errors.password_confirm}}</h3>
        <select name="" id="gender" :onchange="onchangeSelect" class="my-[9px]">
            <option value="" selected>gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
        </select>
        <h3 class="err-msg" v-show="errmessage.data.errors.gender">{{errmessage.data.errors.gender}}</h3>
        <button @click="">register</button>
        <div class="flex gap-3 justify-start">
          <RouterLink :to="'/loading/login'" class="text-white hover:text-[blue] ease-in duration-500 underline">
            login
          </RouterLink>
        </div>
    </div>
</form>
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
.forms-data{
  position: absolute;
  top: 15%;
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