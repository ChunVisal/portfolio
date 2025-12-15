// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Home from '../pages/Home.vue'
import ProjectDetail from '../pages/ProjectDetail.vue'
import Mycv from '../pages/Mycv.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/mycv', name: 'Mycv', component: Mycv },
  { path: '/project/:id', name: 'ProjectDetail', component: ProjectDetail, props: true },
  {
    path: '/',
    component: () => import('../pages/Home.vue'),
    meta: {
      title: 'Chun Visal | Full-Stack Developer',
      description: 'Portfolio of Chun Visal, full-stack developer'
    }
  },
  {
    path: '/mycv',
    component: () => import('../pages/Mycv.vue'),
    meta: {
      title: 'CV | Chun Visal',
      description: 'Professional CV and experience of Chun Visal'
    }
  }
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
