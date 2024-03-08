import axios from "axios";
import { useUserStore } from "@/stores";
import { ElMessage } from "element-plus";
import router from "@/router";

const baseURL ='http://localhost:8888'

const httpInstance = axios.create({
    baseURL,
    timeout: 5000
})

//请求拦截器
httpInstance.interceptors.request.use(config => {
    //携带token
    const useStore = useUserStore()
    if (useStore.token) {
        config.headers.Authorization = useStore.token
    }
    return config
}, e => Promise.reject(e))

//响应拦截器
httpInstance.interceptors.response.use(res => {
    //摘取核心响应数据
    if (res.data.code === 200) {
        return res
    }
    //处理业务失败的情况
    ElMessage.error(res.data.message || "服务异常")
    return Promise.reject(res.data)
},

    (err) => {
        //处理401错误,权限不足,未登录或者token过期
        if (err.response?.status === 403) {
            router.push('/login')

        }

        ElMessage.error(err.response.data.message || "服务异常")
        return Promise.reject(err)
    }
)

export {baseURL,httpInstance}