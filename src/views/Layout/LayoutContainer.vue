<template>
  <div class="common-layout">
    <el-container>
      <el-header><Header></Header></el-header>
      <el-container>
        <el-aside width="200px"><Aside></Aside></el-aside>
        <RouterView></RouterView>
      </el-container>
      <el-footer><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>



<style>
</style>