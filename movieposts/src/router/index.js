import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import MovieDetails from '@/views/MovieDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
    },

    {
      name: 'about',
      path: '/about',
      component: About,
    },


    {
      path: '/movie/:id',
      name: 'movieDetails',
      component: MovieDetails,
      props: true
    },


  ],
})

export default router
