export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./App.js')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../pages/About.vue')
  }
];
