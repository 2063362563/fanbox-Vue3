import  { createPinia }  from 'pinia'
import persist from 'pinia-plugin-persistedstate'//pinia持久化

const pinia = createPinia().use(persist)
pinia.use(persist)

export default pinia

export * from './modules/user'
export * from './modules/counter'

