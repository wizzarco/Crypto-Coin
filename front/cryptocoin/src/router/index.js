import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import Signup from '../views/SignupView.vue'
import ErrorView from '../views/404View.vue'
import Exchanges from '../views/Exchanges.vue'
import Cryptocurrency from '../views/Cryptocurrency.vue'
import FAQ from '../views/FAQ.vue'
import Contact from '../views/Contact.vue'
import Announcing from '../views/Announcing.vue'
import Profile from '../views/Dashboard/Profile.vue'
import Favorite from '../views/Favorite.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ALL HOME PAGE
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    // Page Login
    {
      path: '/login',
      name: 'login',
      component: Login
    },

    // Page Inscription
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },

    // Page Exchanges
    {
      path: '/exchanges',
      name: 'exchanges',
      component: Exchanges
    },

    // Page Favorite
    {
      path: '/favorite',
      name: 'favorite',
      component: Favorite
    },

    // Page Announcing
    {
      path: '/announcing',
      name: 'announcing',
      component: Announcing
    },

    // Page FAQ
    {
      path: '/faq',
      name: 'faq',
      component: FAQ
    },

    // Page Contact
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },

    // Page Cryptocurrency
    {
      path: '/cryptocurrency',
      name: 'cryptocurrency',
      component: Cryptocurrency
    },

    // ALL DASHBOARD PAGE
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },

    // Page 404 Error
    {
      // path: "*",
      path: "/:catchAll(.*)",
      name: "error",
      component: ErrorView,
    }
  ]
})

export default router
