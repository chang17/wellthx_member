<template>
  <div class="p-6 max-w-4xl mx-auto">
    <h1 class="text-2xl font-bold">User Details</h1>
    <div class="mt-4 p-4 border rounded">
      <p><strong>Username:</strong> {{ user?.username }}</p>
      <p><strong>Email:</strong> {{ user?.email }}</p>
      <p><strong>Status:</strong> {{ user?.status }}</p>
      <p><strong>Role:</strong> {{ user?.role }}</p>
    </div>
    <button @click="goBack" class="mt-4 px-4 py-2 bg-gray-500 text-white rounded">Back</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '../../utils/api'

const route = useRoute()
const router = useRouter()
const user = ref(null)

onMounted(async () => {
  const response = await api.get(`/admin/users/${route.params.id}`)
  user.value = response.data
})

const goBack = () => {
  router.push('/admin')
}
</script>
