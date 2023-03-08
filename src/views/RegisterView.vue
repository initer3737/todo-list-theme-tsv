<script setup lang="ts">
import anime1 from '@/assets/anime3.mp4'
import Input from '@/components/atom/Input.vue';
import { RouterLink } from 'vue-router'
import {Debeh} from '@/stores/Debeh'
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
        debeh:Debeh()
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
    methods:{
      onChange(e: Event){
          const target=(<HTMLInputElement>e.target)
            this.formdata={...this.formdata,[target.id]:target.value}
      },
      onchangeSelect(e: Event){
          const target=(<HTMLSelectElement>e.target)
            this.formdata={...this.formdata,[target.id]:target.selectedOptions[0].value}
      }
    }
  }
</script>
<template>
  <video :src="anime1" loop muted autoplay class="bg-weejio"></video>
  <div>
    <h1 class="app-name bg-[dodgerblue]/50 p-3 rounded">{{ getNameApp }}</h1>
  </div>
    <div class="forms-data bg-[dodgerblue]/50 p-3 rounded">
        <Input  :onChange="onChange" :placeholder="'username'" :id="'username'" label="username"/>
        <Input  :onChange="onChange" :placeholder="'email'" :id="'email'" label="email"/>
        <Input  :onChange="onChange" :placeholder="'country'" :id="'country'" label="country"/>
        <Input  :onChange="onChange" :placeholder="'password'" :id="'password'" label="password" type="password"/>
        <Input  :onChange="onChange" :placeholder="'password confirm'" :id="'password_confirm'" label="password_confirm" type="password confirm"/>
        <select name="" id="gender" :onchange="onchangeSelect" class="my-[9px]">
            <option value="" selected>gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
        </select>
        <button @click="">register</button>
        <div class="flex gap-3 justify-start">
          <RouterLink :to="'/loading/login'" class="text-white hover:text-[blue] ease-in duration-500 underline">
            login
          </RouterLink>
        </div>
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