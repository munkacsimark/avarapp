import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/szukito',
      name: 'categories',
      component: () => import(/* webpackChunkName: "categories" */ './views/Categories.vue'),
    },
    {
      path: '/szukito/:category',
      name: 'category',
      component: () => import(/* webpackChunkName: "category" */ './views/Category.vue'),
    },
    {
      path: '/fogyasztas',
      name: 'summary',
      component: () => import(/* webpackChunkName: "summary" */ './views/Summary.vue'),
    },
  ],
});
