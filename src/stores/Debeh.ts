import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const Debeh = defineStore('debeh', () => {
  const debehApp={
    name:'TERRORIST HUNTERS'
  }
  const debeh = ref(debehApp)
  const appName = computed(() => debeh.value.name)

  return { appName }
})
