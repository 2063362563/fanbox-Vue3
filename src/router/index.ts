import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory("/fan-box"),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Layout/LayoutContainer.vue'),
      redirect: '/article/index',
      children: [
        {
          path: '/article/index',
          name: 'ArticleIndex',
          component: () => import('@/views/Article/Index.vue'),
        },
        {
          path: '/article/console-games',
          name: 'ArticleConsoleGames',
          component: () => import('@/views/Article/ConsoleGames.vue'),
        },
        {
          path: '/article/hardware',
          name: 'ArticleHardware',
          component: () => import('@/views/Article/Hardware.vue'),
        },
        {
          path: '/article/more-article',
          name: 'ArticleMoreArticle',
          component: () => import('@/views/Article/MoreArticle.vue'),
        },
        {
          path: '/article/pc-games',
          name: 'ArticlePCGames',
          component: () => import('@/views/Article/PCGames.vue'),
        },
        {
          path: '/community/console-games',
          name: 'CommunityConsoleGames',
          component: () => import('@/views/Community/ConsoleGames.vue'),
        },
        {
          path: '/community/hardware',
          name: 'CommunityHardware',
          component: () => import('@/views/Community/Hardware.vue'),
        },
        {
          path: '/community/pc-games',
          name: 'CommunityPCGames',
          component: () => import('@/views/Community/PCGames.vue'),
        },
        {
          path: '/community/team',
          name: 'CommunityTeam',
          component: () => import('@/views/Community/Team.vue'),
        },
        {
          path: '/community/index',
          name: 'CommunityIndex',
          component: () => import('@/views/Community/Index.vue'),
        },
        {
          path: '/game-library/coming-soon',
          name: 'GameLibraryComingSoon',
          component: () => import('@/views/GameLibrary/ComingSoon.vue'),
        },
        {
          path: '/game-library/game-publisher',
          name: 'GameLibraryGamePublisher',
          component: () => import('@/views/GameLibrary/GamePublisher.vue'),
        },
        {
          path: '/game-library/index',
          name: 'GameLibraryIndex',
          component: () => import('@/views/GameLibrary/Index.vue'),
        },
        {
          path: '/game-library/ranking-list',
          name: 'GameLibraryRankingList',
          component: () => import('@/views/GameLibrary/RankingList.vue'),
        },
        {
          path: '/game-library/steam-sale',
          name: 'GameLibrarySteamSale',
          component: () => import('@/views/GameLibrary/SteamSale.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login/LoginPage.vue'),
    },
    {
      path: '/my',
      name: 'My',
      component: () => import('@/views/My/My.vue'),
    },
  ],
  
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});

export default router;

