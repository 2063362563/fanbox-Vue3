<template>
  <!-- <div><Search></Search></div> -->

  <div class="container">
    <!-- 轮播图 -->
    <div class="block text-center">
      <el-carousel height="250px">
        <el-carousel-item v-for="item in 6" :key="item"> </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 文章列表 -->
    <div class="card-container">
      <el-card class="box-card clearfix" v-for="item in 6" :key="item">
        <!-- 左侧图片 -->
        <div class="card-left leftfix">
          <img src="../../assets/images/login-background.jpg" alt="" />
        </div>
        <!-- 右侧文字 -->
        <div class="card-right">
          <div class="card-right-top">
            <h2>文章标题</h2>
            <span class="card-contain">文章主体</span>
          </div>
          <div class="card-right-bottom">
            <span>发布时间-文章分类</span>
            <span>评论数</span>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
/* 轮播图 */
.el-carousel__item {
  background-color: rgb(228, 206, 206);
}
.text-center {
  margin-bottom: 30px;
}

/* 文章列表 */
.card-right {
  display: flex;
  height: 150px;
  flex-direction: column;
  justify-content: space-between;
}
.card-right-bottom {
  display: flex;
  justify-content: space-between;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 14px;
  margin: 0 80px;
}
.box-card {
  width: 100%;
  /* padding-bottom: 10px; */
}

.box-card img {
  width: 150px;
  height: 150px;
  margin-right: 30px;
  border-radius: 10px;
}
.box-card:hover {
  box-shadow: 0px 0px 10px skyblue;
}
</style>

<script lang="ts" setup>
</script>
