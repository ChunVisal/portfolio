// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Home from '../pages/Home.vue'
import ProjectDetail from '../pages/ProjectDetail.vue'
import Mycv from '../pages/Mycv.vue'
import Test from '../pages/Test.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/test', name: 'TestAOS', component: Test },
  { path: '/mycv', name: 'Mycv', component: Mycv },
  { path: '/project/:id', name: 'ProjectDetail', component: ProjectDetail, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, SavedPosition) {
    if (SavedPosition) {
      return SavedPosition;
    }

    return { top: 0, behavior: 'smooth'};
  }
})

export default router
