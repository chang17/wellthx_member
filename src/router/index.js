import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/Auth/LoginView.vue'
//import DashboardView from '../views/DashboardView.vue';
//import DepositView from '../views/DepositView.vue';
//import WithdrawView from '../views/WithdrawView.vue';
//import TransactionsView from '../views/TransactionsView.vue';
import { useAuthStore } from '../store/authStore'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
    meta: { title: 'Login', requiresAuth: false, guestOnly: true },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Auth/RegisterView.vue'),
    meta: { title: 'Register', requiresAuth: false, guestOnly: true },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Member/DashboardView.vue'),
    meta: { title: 'Dashboard', requiresAuth: true },
  },
  {
    path: '/admin',
    name: 'admin',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Admin/AdminDashboardView.vue'),
    meta: { title: 'Dashboard', requiresAuth: true },
  },
  {
    path: '/deposit',
    name: 'deposit',
    component: () => import('../views/DepositView.vue'),
    meta: { title: 'Deposit', requiresAuth: true, requiresAdmin },
  },
  {
    path: '/withdraw',
    name: 'withdraw',
    component: () => import('../views/WithdrawView.vue'),
    meta: { title: 'Withdraw', requiresAuth: true },
  },
  {
    path: '/transactions',
    name: 'transactions',
    component: () => import('../views/TransactionsView.vue'),
    meta: { title: 'Transactions', requiresAuth: true },
  },
  {
    path: '/admin/users/:id',
    name: 'user',
    component: () => import('../views/Admin/UserDetailView.vue'),
    meta: { title: 'User Management', requiresAuth: true, requiresAdmin: true },
  },
  {
    path: '/admin/analytics',
    name: 'analytics',
    component: import('../views/Admin/AnalyticsView.vue'),
    meta: { title: 'Analytics', requiresAuth: true, requiresAdmin: true },
  },
  {
    path: '/admin/search',
    name: 'search',
    component: import('../views/Admin/SearchAndFilterView.vue'),
    meta: { title: 'Search', requiresAuth: true, requiresAdmin: true },
  },
  {
    path: '/admin/reports',
    name: 'reports',
    component: import('../views/Admin/ReportExportView.vue'),
    meta: { title: 'Reports', requiresAuth: true, requiresAdmin: true },
  },
  {
    path: '/admin/notifications',
    name: 'notifications',
    component: import('../views/Admin/NotificationsView.vue'),
    meta: { requiresAuth: true, requiresAdmin: true },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/')
  } else if (to.meta.requiresAdmin && authStore.user?.role !== 'admin') {
    next('/dashboard')
  } else {
    next()
  }
})

export default router
