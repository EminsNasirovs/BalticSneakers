import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'
import Home from './pages/Home.vue'
import Favourites from './pages/Favourites.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/favourites', name: 'Favourites', component: Favourites },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.use(autoAnimatePlugin)

app.mount('#app')
