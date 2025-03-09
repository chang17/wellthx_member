import { defineStore } from 'pinia'
import api from '../utils/api'

export const useNotificationStore = defineStore('notification', {
  state: () => ({
    notifications: [],
  }),
  actions: {
    async fetchNotifications() {
      const response = await api.get('/admin/notifications')
      this.notifications = response.data
    },
  },
})
