import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartItem from '../components/CartItem.vue'
import ItemPage from '@/components/ItemPage.vue'
import BuyNow from '@/components/BuyNow.vue'
import AboutUs from '@/components/AboutUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cart_item',
      name: 'cart_item',
      component: CartItem,
    },
    {
      path: '/item_page',
      name: 'item_page',
      component: ItemPage,
    },
    {
      path: '/buy_now',
      name: 'buy_now',
      component: BuyNow,
    },
    {
      path: '/about_us',
      name: 'about_us',
      component: AboutUs,
    },
  ],
})

export default router
