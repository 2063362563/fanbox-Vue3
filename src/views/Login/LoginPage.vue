<template>
  <div class="contain">
    <div class="login">
      <!-- 登录 -->
      <el-card class="box-card" v-if="!isRegister">
        <el-form
          ref="ruleFormRef"
          :model="form"
          :rules="rules"
          label-width="70px"
          status-icon
          hide-required-asterisk
        >
          <el-form-item label="账号" prop="username">
            <el-input
              class="input"
              v-model="form.username"
              placeholder="请输入账号"
              maxlength="16"
            />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              class="input"
              v-model="form.password"
              placeholder="请输入密码"
              maxlength="16"
              show-password
            />
          </el-form-item>
        </el-form>

        <div class="button-container">
          <el-button
            type="primary"
            round
            class="but"
            @click="login(ruleFormRef)"
          >
            登录
          </el-button>
          <el-button type="primary" round class="but" @click="toggleView">
            注册
          </el-button>
        </div>
      </el-card>
    </div>

    <!-- 注册 -->
    <div class="register">
      <el-card class="box-card" v-if="isRegister">
        <el-form
          ref="ruleFormRef"
          :model="form"
          :rules="rules"
          label-width="80px"
          label-position="left"
          status-icon
          hide-required-asterisk
        >
          <el-form-item label="账号" prop="username">
            <el-input
              class="input"
              v-model="form.username"
              placeholder="请输入账号"
              maxlength="16"
            />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              class="input"
              v-model="form.password"
              placeholder="请输入密码"
              maxlength="16"
              show-password
            />
          </el-form-item>
          <el-form-item label="确认密码" prop="confirmPassword">
            <el-input
              class="input"
              v-model="form.confirmPassword"
              placeholder="请重复密码"
              maxlength="16"
              show-password
            />
          </el-form-item>
        </el-form>

        <div class="button-container">
          <el-button
            type="primary"
            round
            class="but"
            @click="register(ruleFormRef)"
          >
            注册
          </el-button>
          <el-button type="primary" round class="but" @click="toggleView">
            返回
          </el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>
  
  <style scoped lang="scss">
.contain {
  width: 100vw;
  height: 100vh;
  background-image: url("@/assets/images/login-background.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  .box-card {
    background-color: rgba(196, 196, 170, 0.5);
    width: 500px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    .input {
      width: 300px;
    }
    .button-container {
      display: flex;
      justify-content: space-around;
      .but {
        margin: 15px 0;
      }
    }
  }
}
</style>
  
<script lang="ts" setup>
import { ref, onMounted, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useUserStore } from "@/stores/modules/user";
import type { FormInstance, FormRules } from "element-plus";
import { ElMessage } from "element-plus";
import { userLoginService, userRegisterService } from "@/api/user";

interface RuleForm {
  username: string;
  password: string;
  confirmPassword?: string;
}

// 使用 ref 创建表单实例的引用
const ruleFormRef = ref<FormInstance>();
const form = reactive<RuleForm>({
  username: "",
  password: "",
  confirmPassword: "",
});

const isRegister = ref(false);
const router = useRouter();
const userStore = useUserStore();

onMounted(() => {
  // 获取 query 参数
  const query = useRoute().query;
  // 如果传递了 isRegister 参数，更新 isRegister 变量
  isRegister.value = query.isRegister === "true"; // 转换为布尔值
});

// 自定义密码比对校验
const validatePass = (_rule: any, value: any, callback: any) => {
  if (value !== form.password) {
    callback(new Error("密码不匹配"));
  } else {
    callback();
  }
};

//校验规则
const rules = reactive<FormRules<RuleForm>>({
  username: [{ required: true, message: "账号不能为空", trigger: "blur" }],
  password: [
    { required: true, message: "密码不能为空", trigger: "blur" },
    { pattern: /^\S{6,16}$/, message: "密码必须由6-16位的非空字符组成" }, //6-16位的非空字符
  ],
  confirmPassword: [
    { required: true, message: "确认密码不能为空", trigger: "blur" },
    { validator: validatePass, trigger: "blur" },
  ],
});

//登录函数
const login = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      //发送登录请求
      userLoginService(form)
        .then((response) => {
          // 处理登录成功的响应
          userStore.setToken(response.data.data.token);
          ElMessage.success("登录成功!");
          router.push("/");
          console.log("login success!");
          console.log(userStore.token);
        })
        .catch((error) => {
          // 处理登录失败的错误
          console.error("登录失败:", error);
          ElMessage.error("登录失败: " + error.message);
        });
    } else {
      console.log("error submit!", fields);
    }
  });
};
//注册函数
const register = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      //发起注册请求
      userRegisterService(form)
        .then(() => {
          // 处理注册成功的响应
          ElMessage.success("注册成功!");
          form.username = "";
          form.password = "";
          form.confirmPassword = "";
          //切换视图
          toggleView();
        })
        .catch((error) => {
          // 失败提示错误信息
          ElMessage.success(error.message);
        });
    } else {
      console.log("error submit!", fields);
    }
  });
};
//切换视图
const toggleView = () => {
  form.username = "";
  form.password = "";
  form.confirmPassword = "";
  isRegister.value = !isRegister.value;
};
</script>