<script setup lang="ts">
import anime1 from '@/assets/anime3.mp4'
import Input from '@/components/atom/Input.vue';
import { RouterLink } from 'vue-router'
import {Debeh} from '@/stores/Debeh'
import { Http } from '@/services/http';
import { useToken } from '@/services/token';
</script>
<script lang="ts">
 
  export default{
    data(){
      return {
        formdata:{
          username:'',
          password:'',
          password_confirm:''
        },
       debeh:Debeh(),
       Token:useToken(),
       succmessage:{
        message:''
       },
       errmessage:{
          data:{
            message:'',
            errors:{
              username:'',
              password:'',
              password_confirm:''
            }
       }
      }
    }
    },
    mounted(){
      if( !this.Token.checkTokenIsEmpty() ){
          this.$router.push('/menu')
      }
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
      }
    },
        //method updated() melacak semua state yang mengalami mutasi data
    updated(){
      setTimeout(()=>{
        this.errmessage.data.message=''
        this.errmessage.data.errors.username=''
        this.errmessage.data.errors.password=''
        this.errmessage.data.errors.password_confirm=''
        this.succmessage.message=''
      },4000)
    },
    methods:{
      onChange(e: Event){
          const target=(<HTMLInputElement>e.target)
            this.formdata={...this.formdata,[target.id]:target.value}
      },
      Iterate(datas:Array<string>){
          for (let data in datas){
                return data
          }
      },
        resetClick(){
            // console.log(this.formdata)
           Http.post('/reset',this.formdata)
          .then(res=>{
              console.log('success will be ',res)
              this.succmessage.message=res.data.message
              setTimeout(()=>{
                this.$router.push('/loading/login')
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
<form  method="post" @submit.prevent="resetClick">
    <div class="forms-data bg-[dodgerblue]/50 p-3 rounded">
      <h3 class="succ-msg" v-show="succmessage.message.length>1">{{succmessage.message}}</h3>
      <h3 class="err-msg" v-show="errmessage.data.message.length>1">{{errmessage.data.message}}</h3>
        <Input :placeholder="'username'" :id="'username'" label="username" :onChange="onChange"/>
        <h3 class="err-msg" v-show="errmessage.data.errors.username">{{errmessage?.data?.errors?.username}}</h3>
        <Input :placeholder="'password'" :id="'password'" label="password" type="password" :onChange="onChange"/>
        <h3 class="err-msg" v-show="errmessage?.data?.errors?.password">{{errmessage?.data?.errors?.password}}</h3>
        <Input :placeholder="'password confirm'" :id="'password_confirm'" label="password_confirm" type="password" :onChange="onChange"/>
        <h3 class="err-msg" v-show="errmessage?.data.errors?.password_confirm">{{errmessage?.data?.errors?.password_confirm[0]}}</h3>
        <button>reset</button>
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