<script lang="ts" setup>
import Icon from '@/components/atom/Icon.vue'
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="menu-container">
      <RouterLink :to="'/loading/menu'" class="text-white hover:text-[dodgerblue] ease-in duration-500  border-solid border-r-[2px] border-[#000] border-2 border-white w-[15px] m-4 rounded flex justify-center hover:border-[dodgerblue]">
           <Icon :color="'[#fff]'" :icon="'arrow-90deg-left'"/>
      </RouterLink>
      <RouterLink :to="'/loading/lobby'" class="text-white hover:text-[dodgerblue] ease-in duration-500  border-solid border-r-[2px] border-[#000] border-2 border-white w-[15px] m-4 rounded flex justify-center hover:border-[dodgerblue]">
           <Icon :color="'[#fff]'" :icon="'crop'"/>
      </RouterLink>
      <RouterLink :to="'/loading/galery'" class="text-white hover:text-[dodgerblue] ease-in duration-500  border-solid border-r-[2px] border-[#000] border-2 border-white w-[15px] m-4 rounded flex justify-center hover:border-[dodgerblue]">
           <Icon :color="'[#fff]'" :icon="'images'"/>
      </RouterLink>
      <RouterLink :to="'/loading/user&mama'" class="text-white hover:text-[dodgerblue] ease-in duration-500  border-solid border-r-[2px] border-[#000] border-2 border-white w-[15px] m-4 rounded flex justify-center hover:border-[dodgerblue]">
           <Icon :color="'[#fff]'" :icon="'person-vcard'"/>
      </RouterLink>
      <RouterLink :to="'/loading/kreditlist'" class="text-white hover:text-[dodgerblue] ease-in duration-500  border-solid border-r-[2px] border-[#000] border-2 border-white w-[15px] m-4 rounded flex justify-center hover:border-[dodgerblue]">
           <Icon :color="'[#fff]'" :icon="'list-stars'"/>
      </RouterLink>
      <RouterLink :to="'/loading/setting'" class="text-white hover:text-[dodgerblue] ease-in duration-500  border-solid border-r-[2px] border-[#000] border-2 border-white w-[15px] m-4 rounded flex justify-center hover:border-[dodgerblue]">
           <Icon :color="'[#fff]'" :icon="'gear-fill'"/>
      </RouterLink>
  </div>
</template>
<style scoped>
.menu-container{
  display: flex;
  justify-content: flex-start;
  flex-flow:nowrap column;
  width: 100px;
  height: 125%;
  z-index: 99;
  /* background:linear-gradient(20deg,rgba(0, 0, 0,1) 20%,rgba(0, 81, 128, 0.5),rgba(0, 0, 0,1)) ; */
  /* background: rgba(0, 0, 0, .2); */
  /* filter: brightness(105%); */
  backdrop-filter: blur(20px);
  position: absolute;
  left: 0;
  font-size: 25px;
  /* padding: 5px 35px; */
  text-transform: capitalize;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}
.menu-container a{
  /* border-left: 2px solid black; */
  padding: 0 23px;
}
</style>