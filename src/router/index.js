import { createRouter, createWebHistory } from 'vue-router'
import ShuffleText from '../views/ShuffleText.vue'

const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: App
//   },
  {
    path: '/shuffle-text',
    name: 'ShuffleText',
    component: ShuffleText
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router