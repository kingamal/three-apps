import { createRouter, createWebHistory } from 'vue-router'
import ShuffleText from '../views/ShuffleText.vue'
import PeselValidation from '../views/PeselValidation.vue'
import API from '../views/API.vue'

const routes = [
  {
    path: '/shuffle-text',
    name: 'ShuffleText',
    component: ShuffleText
    },
  {
    path: '/pesel',
    name: 'PeselValidation',
    component: PeselValidation
  },
  {
    path: '/api',
    name: 'API',
    component: API
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router