import Vue from 'vue';
import Router from 'vue-router';
import { Routes } from '@/router/Routes';
import { RouteNames } from '@/router/RouteNames';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: Routes.ALL,
      redirect: Routes.CATEGORIES,
    },
    {
      path: Routes.CATEGORIES,
      name: RouteNames.CATEGORIES,
      component: () => import(/* webpackChunkName: "categories" */ '@/views/Categories.vue'),
    },
    {
      path: Routes.CATEGORY,
      name: RouteNames.CATEGORY,
      component: () => import(/* webpackChunkName: "category" */ '@/views/Category.vue'),
    },
    {
      path: Routes.SUMMARY,
      name: RouteNames.SUMMARY,
      component: () => import(/* webpackChunkName: "summary" */ '@/views/Summary.vue'),
    },
  ],
});
