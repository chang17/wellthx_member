import { defineStore } from 'pinia'
import api from '../utils/api'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || '',
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login(credentials) {
      const response = await api.post('/users/login', credentials)
      this.token = response.data.token
      localStorage.setItem('token', this.token)
      api.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
    },
    logout() {
      this.token = ''
      localStorage.removeItem('token')
      delete api.defaults.headers.common['Authorization']
    },
  },
})
