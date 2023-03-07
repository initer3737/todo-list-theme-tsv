<script setup lang="ts">
import anime1 from '@/assets/anime3.mp4'
import Input from '@/components/atom/Input.vue';
import { RouterLink } from 'vue-router'
</script>
<script lang="ts">
  export default{
    data(){
      return {
        formdata:{
          username:'',
          password:''
        }
      }
    },
    computed:{
      getUsername(){
        return this.formdata.username
      },
      getPassword(){
        return this.formdata.password
      },
    },
    methods:{
      onChange(e: Event){
          const target=(<HTMLInputElement>e.target)
            this.formdata={...this.formdata,[target.id]:target.value}
      }
    }
  }
</script>
<template>
  <video :src="anime1" loop muted autoplay class="bg-weejio"></video>
    <div class="forms-data bg-[dodgerblue]/50 p-3 rounded">
        <Input  :onChange="onChange" :placeholder="'username'" :id="'username'" label="username"/>
        <Input  :onChange="onChange" :placeholder="'password'" :id="'password'" label="password" type="password"/>
        <button @click="">reset</button>
        <div class="flex gap-3 justify-start">
          <RouterLink :to="'/loading/login'" class="text-white hover:text-[blue] ease-in duration-500 underline">
            login
          </RouterLink>
        </div>
    </div>
</template>
<style scoped>
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