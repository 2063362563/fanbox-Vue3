import { ref } from 'vue'
import { defineStore }  from 'pinia'

export const useUserStore = defineStore('fan-box-user', () => {
  const token = ref('')
  const setToken = (newToken:string) => {
    token.value = newToken
  }
  return { token, setToken }
}, {
  persist: true//pinia持久化开启
})
