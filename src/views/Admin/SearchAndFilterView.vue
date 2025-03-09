import SearchAndFilterView from '../views/Admin/SearchAndFilterView.vue'; const routes = [ { path:
'/admin/search', component: SearchAndFilterView, meta: { requiresAuth: true, requiresAdmin: true } }
]; // Example: Search and Filters View // src/views/Admin/SearchAndFilterView.vue
<template>
  <div class="p-6 max-w-6xl mx-auto">
    <h1 class="text-2xl font-bold">Search & Filter Users</h1>
    <div class="mt-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search by username or email"
        class="p-2 border rounded w-full mb-4"
      />
      <select v-model="selectedStatus" class="p-2 border rounded w-full mb-4">
        <option value="">All Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
        <option value="suspended">Suspended</option>
      </select>
      <button @click="applyFilters" class="bg-blue-500 text-white px-4 py-2 rounded">
        Apply Filters
      </button>
    </div>
    <table class="w-full mt-6 border">
      <thead>
        <tr class="bg-gray-200">
          <th class="p-2">Username</th>
          <th class="p-2">Email</th>
          <th class="p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in filteredUsers" :key="user.id" class="border-b">
          <td class="p-2">{{ user.username }}</td>
          <td class="p-2">{{ user.email }}</td>
          <td class="p-2">{{ user.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import api from '../../utils/api'

const searchQuery = ref('')
const selectedStatus = ref('')
const users = ref([])

onMounted(async () => {
  const response = await api.get('/admin/users')
  users.value = response.data
})

const filteredUsers = computed(() => {
  return users.value.filter((user) => {
    return (
      (!selectedStatus.value || user.status === selectedStatus.value) &&
      (user.username.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.value.toLowerCase()))
    )
  })
})

const applyFilters = async () => {
  const response = await api.get('/admin/users')
  users.value = response.data
}
</script>
