import { defineStore } from 'pinia'
import api from '../utils/api'

export const useAdminStore = defineStore('admin', {
  state: () => ({
    users: [],
    transactions: [],
  }),
  actions: {
    async fetchUsers() {
      const response = await api.get('/admin/users')
      this.users = response.data
    },
    async updateUserStatus(userId, status) {
      await api.patch(`/admin/users/${userId}/status`, { status })
      await this.fetchUsers()
    },
    async fetchTransactions() {
      const response = await api.get('/admin/transactions')
      this.transactions = response.data
    },
  },
})
