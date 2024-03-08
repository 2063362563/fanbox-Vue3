import  { httpInstance } from "@/utils/http"
//登录表单
type loginForm = {
    username: string;
    password: string;
    confirmPassword?: string; 
  };
  
//注册
export const userRegisterService = ({ username, password, confirmPassword }: loginForm) => {
    return httpInstance.post('/login/register', { username, password, confirmPassword });
}
//登录
export const userLoginService = ({ username, password }: loginForm) => {
    return httpInstance.post('/login/login_auth', { username, password });
}