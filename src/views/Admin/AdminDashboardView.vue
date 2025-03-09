<template>
  <div class="p-6 max-w-4xl mx-auto">
    <h1 class="text-2xl font-bold">Admin Dashboard</h1>
    <p class="mt-4">Manage users, transactions, and bonuses.</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '../../store/userStore'

const userStore = useUserStore()

onMounted(() => {
  userStore.fetchUserData()
})
</script>
