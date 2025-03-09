<template>
  <div class="p-6 max-w-6xl mx-auto">
    <h1 class="text-2xl font-bold">User Analytics</h1>
    <div class="grid grid-cols-3 gap-4 mt-6">
      <div class="bg-white p-4 rounded-lg shadow-md text-center">
        <h2 class="text-lg font-semibold">Total Users</h2>
        <p class="text-3xl font-bold">{{ analytics.totalUsers }}</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-md text-center">
        <h2 class="text-lg font-semibold">Active Users</h2>
        <p class="text-3xl font-bold">{{ analytics.activeUsers }}</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-md text-center">
        <h2 class="text-lg font-semibold">Total Transactions</h2>
        <p class="text-3xl font-bold">{{ analytics.totalTransactions }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import api from '../../utils/api'

const analytics = ref({ totalUsers: 0, activeUsers: 0, totalTransactions: 0 })

onMounted(async () => {
  const response = await api.get('/admin/analytics')
  analytics.value = response.data
})
</script>
