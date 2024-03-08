<template>
  <div class="header">
    <div class="container">
      <div class="left">
        <span>小饭盒欢迎您{{ userStore.token }}</span>
        <span>请</span>
        <span class="click" @click="goLogin(false)">登录</span>
        <span>或</span>
        <span class="click" @click="goLogin(true)">注册</span>
      </div>

      <div class="right">
        <ul>
          <li @click="userStore.setToken('sdf')">
            <a href="">联系客服</a>
          </li>
          <li><a href="">举报投诉</a></li>
          <li><a href="">我的收藏</a></li>
          <li><a href="">我的关注</a></li>
          <li><a href="">我的粉丝</a></li>
          <li><a href="">我的帖子</a></li>
          <li><a href="">我的动态</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores";
const router = useRouter();
const userStore = useUserStore();
const goLogin = (isRegister: boolean) => {
  router.push({ path: "/login", query: { isRegister } });
};
</script >

<style scoped lang="scss">
.header {
  background-color: rgb(216, 215, 213);
  height: 30px;
  font-size: 12px;
  .container {
    display: flex;
    justify-content: space-between;
    width: 85%;
    margin: 0 auto;
    .left {
      line-height: 30px;
    }
    .right {
      line-height: 30px;
    }
    ul {
      list-style: none; /* 移除列表项前面的默认样式 */
      padding: 0; /* 移除列表项的内边距 */
      margin: 0; /* 移除列表的外边距 */
    }
    li {
      float: right;
      margin-right: 10px;
      a {
        color: black;
        text-decoration: none;
      }
    }

    .click {
      text-decoration: none;
      color: rgb(121, 219, 170);
      transition: 0.4s;
      padding: 3px;
    }
    .click:hover {
      background-color: hsla(162, 11%, 17%, 0.3);
      cursor: pointer;
    }
  }
}
</style>