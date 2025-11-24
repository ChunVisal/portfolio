// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Home from '../pages/Home.vue'
import Test from '../pages/Test.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/test', name: 'TestAOS', component: Test }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
