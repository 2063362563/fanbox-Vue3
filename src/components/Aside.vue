<template>
  <div class="demo-image">
    <img
      style="width: 100px; height: 70px; margin: 25px 50px 0px 50px"
      src="@/assets/images/logo.jpg"
    />
    <img
      style="width: 200px; height: 30px"
      src="@/assets/images/font-fanbox.jpeg"
    />
  </div>
  <div>
    <el-menu :default-openeds="['1']">
      <!-- 精选好文 -->
      <el-sub-menu index="1">
        <template #title>
          <img class="icon" src="@/assets/icon/article.png" alt="精选好文" />
          &nbsp;&nbsp; 精选好文
        </template>
        <el-menu-item index="1-1" @click="to('ArticleIndex')"
          ><img
            class="icon"
            src="@/assets/icon/article.png"
            alt="推荐文章"
          />&nbsp;&nbsp;推荐文章</el-menu-item
        >
        <el-menu-item index="1-2" @click="to('ArticleHardware')"
          ><img
            class="icon"
            src="@/assets/icon/yingjian.png"
            alt="硬件杂谈"
          />&nbsp;&nbsp;硬件杂谈</el-menu-item
        >
        <el-sub-menu index="1-3">
          <template #title
            ><img
              class="icon"
              src="@/assets/icon/pcgame.png"
              alt="PC游戏"
            />&nbsp;&nbsp;PC游戏</template
          >
          <el-menu-item index="1-3-1" @click="to('ArticlePCGames')"
            >全部</el-menu-item
          >
          <el-menu-item index="1-3-2">APEX</el-menu-item>
          <el-menu-item index="1-3-3">守望先锋</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="1-4">
          <template #title
            ><img
              class="icon"
              src="@/assets/icon/youxishoubing.png"
              alt="主机游戏"
            />&nbsp;&nbsp;主机游戏</template
          >
          <el-menu-item index="1-4-1" @click="to('ArticleConsoleGames')"
            >全部</el-menu-item
          >
          <el-menu-item index="1-4-2">APEX</el-menu-item>
          <el-menu-item index="1-4-3">守望先锋</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="1-5" @click="to('ArticleMoreArticle')"
          ><img
            class="icon"
            src="@/assets/icon/gengduo.png"
            alt="更多"
          />&nbsp;&nbsp;更多</el-menu-item
        >
      </el-sub-menu>
      <!-- 玩家社区 -->
      <el-sub-menu index="2">
        <template #title>
          <img
            class="icon"
            src="@/assets/icon/wanjiashequ.png"
            alt="玩家社区"
          />&nbsp;&nbsp;玩家社区
        </template>
        <el-menu-item index="2-1" @click="to('CommunityIndex')"
          ><img
            class="icon"
            src="@/assets/icon/quanbu.png"
            alt="全部"
          />&nbsp;&nbsp;全部</el-menu-item
        >
        <el-menu-item index="2-2" @click="to('CommunityHardware')"
          ><img
            class="icon"
            src="@/assets/icon/yingjian.png"
            alt="数码硬件"
          />&nbsp;&nbsp;数码硬件</el-menu-item
        >
        <el-menu-item index="2-3" @click="to('CommunityTeam')"
          ><img
            class="icon"
            src="@/assets/icon/zudui.png"
            alt="组队开黑"
          />&nbsp;&nbsp;组队开黑</el-menu-item
        >
        <el-sub-menu index="2-4">
          <template #title
            ><img
              class="icon"
              src="@/assets/icon/pcgame.png"
              alt="PC游戏"
            />&nbsp;&nbsp;PC游戏</template
          >
          <el-menu-item index="2-4-1" @click="to('CommunityPCGames')"
            >全部</el-menu-item
          >
          <el-menu-item index="2-4-2">APEX</el-menu-item>
          <el-menu-item index="2-4-3">守望先锋</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2-5">
          <template #title
            ><img
              class="icon"
              src="@/assets/icon/youxishoubing.png"
              alt="主机游戏"
            />&nbsp;&nbsp;主机游戏</template
          >
          <el-menu-item index="2-5-1" @click="to('CommunityConsoleGames')"
            >全部</el-menu-item
          >
          <el-menu-item index="2-5-2">APEX</el-menu-item>
          <el-menu-item index="2-5-3">守望先锋</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <!-- 游戏库 -->
      <el-sub-menu index="3">
        <template #title>
          <img
            class="icon"
            src="@/assets/icon/youxiku.png"
            alt="游戏库"
          />&nbsp;&nbsp;游戏库
        </template>
        <el-menu-item index="3-1" @click="to('GameLibraryIndex')"
          ><img
            class="icon"
            src="@/assets/icon/quanbu.png"
            alt="首页"
          />&nbsp;&nbsp;首页</el-menu-item
        >
        <el-menu-item index="3-2" @click="to('GameLibraryRankingList')"
          ><img
            class="icon"
            src="@/assets/icon/bangdan.png"
            alt="榜单"
          />&nbsp;&nbsp;榜单</el-menu-item
        >

        <el-menu-item index="3-3" @click="to('GameLibrarySteamSale')"
          ><img
            class="icon"
            src="@/assets/icon/steam.png"
            alt="Steam促销"
          />&nbsp;&nbsp;Steam促销</el-menu-item
        >
        <el-menu-item index="3-4" @click="to('GameLibraryComingSoon')"
          ><img
            class="icon"
            src="@/assets/icon/jijiangshangxian.png"
            alt="即将上线"
          />&nbsp;&nbsp;即将上线</el-menu-item
        >
        <el-menu-item index="3-5" @click="to('GameLibraryGamePublisher')"
          ><img
            class="icon"
            src="@/assets/icon/sanfangchangshang.png"
            alt="游戏厂商"
          />&nbsp;&nbsp;游戏厂商</el-menu-item
        >
      </el-sub-menu>
      <!-- 个人中心 -->
      <el-sub-menu index="4">
        <template #title>
          <img
            class="icon"
            src="@/assets/icon/wode.png"
            alt="个人中心"
          />&nbsp;&nbsp;个人中心
        </template>
        <el-menu-item index="4-3" @click="to('My')"
          ><img
            class="icon"
            src="@/assets/icon/gerenxinxi.png"
            alt="我的资料"
          />&nbsp;&nbsp;我的资料</el-menu-item
        >
        <el-menu-item index="4-1"
          ><img
            class="icon"
            src="@/assets/icon/article.png"
            alt="我的文章"
          />&nbsp;&nbsp;我的文章</el-menu-item
        >
        <el-menu-item index="4-2"
          ><img
            class="icon"
            src="@/assets/icon/duihuakuang.png"
            alt="我的动态"
          />&nbsp;&nbsp;我的动态</el-menu-item
        >
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<style scoped lang="scss">
.el-menu {
  background-color: rgb(213, 219, 223);
  border-radius: 20px;
  overflow: hidden;
  margin: 15px;
  border-color: rgb(255, 255, 255);
}
.icon {
  width: 20px;
}
</style>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
const to = (destination: string) => {
  router.push({
    name: destination,
  });
};
</script>~