<template>
  <div class="p-6 max-w-6xl mx-auto">
    <h1 class="text-2xl font-bold">Notifications</h1>
    <ul class="mt-4 bg-white p-4 shadow rounded-lg">
      <li v-for="notification in notifications" :key="notification.id" class="border-b py-2">
        <p class="text-sm text-gray-600">{{ notification.message }}</p>
        <p class="text-xs text-gray-400">{{ notification.timestamp }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useNotificationStore } from '../../store/notificationStore'

const notificationStore = useNotificationStore()

onMounted(() => {
  notificationStore.fetchNotifications()
})
</script>
