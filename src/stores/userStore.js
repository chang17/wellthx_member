import { defineStore } from 'pinia'
import api from '../utils/api'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    wallet: 0,
    referrals: [],
    transactions: [],
  }),
  actions: {
    async fetchUserData() {
      const response = await api.get('/users/profile')
      this.user = response.data
    },
    async fetchWallet() {
      const response = await api.get('/wallets/balance')
      this.wallet = response.data.balance
    },
    async fetchReferrals() {
      const response = await api.get('/users/referrals')
      this.referrals = response.data
    },
    async fetchTransactions() {
      const response = await api.get('/transactions')
      this.transactions = response.data
    },
  },
})
