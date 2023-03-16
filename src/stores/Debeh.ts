import { ref, computed ,reactive} from 'vue'
import { defineStore } from 'pinia'
import { Http } from '@/services/http'
import { mount } from '@vue/test-utils'
import story from './story'
export const Debeh = defineStore('debeh', () => {
  const debehApp={
    name:'TERRORIST HUNTERS'
  }
  const debeh = ref(debehApp)
  const appName = computed(() => debeh.value.name)

// interface Isession {
//     data:{
//       username:string
//     }
// }
  let userSession=reactive({
    username:'',
    score:'',
    avatar:''
  }) 

  async function fetchSession(){
    const {data}=await Http.get('session/profile')
      userSession={...data.data[0]}
  }

  function getSession(){
      return userSession
  }
  const getAvatar='http://localhost:8000/storage/avatar/'
  return { appName ,fetchSession,getSession,getAvatar,story}
})
