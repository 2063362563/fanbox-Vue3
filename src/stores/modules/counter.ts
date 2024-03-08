import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('fan-box-user', () => {
    const count = ref(1)
    const add = () => {
        count.value++
        if (count.value === 10) {
            count.value = 0
        }
    }
    return { count, add }
}, {
    persist: true//pinia持久化开启
})
