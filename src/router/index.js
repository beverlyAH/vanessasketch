import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/portfolio',
    },
    {
      path: '/portfolio',
      component: () => import('../views/Portfolio.vue')
    },
    { path: '/portfolio/:category',
      component: () => import('../components/gallery/TheGallery.vue/')
    },
    { path: '/portfolio/:category?protected',
      component: () => import('../components/gallery/TheGallery.vue/')
    },
    {
      path: '/about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/contact/success',
      component: () => import('../components/contact/ContactSuccessful.vue')
    },
  ]
})

export default router;