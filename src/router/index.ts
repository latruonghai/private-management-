import { createRouter, createWebHistory } from 'vue-router';
import { useStatusApp } from '../stores/app-status.store';

import _ from 'lodash'
const listRoutes = ['home', 'todo-list', 'weather',  'about']
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/todo-list',
      name: 'todo-list',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/todo-list/todo-list.vue')
    },
    {
      path: '/weather',
      name: 'weather',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/weather/weather.vue')
    }
  ]
});

router.beforeEach((to, from) => {
  const store = useStatusApp();
  const indexApp = _.findIndex(listRoutes, (o) => o === to.name);
  store.setTabIndex(indexApp);
  
})
export default router;
