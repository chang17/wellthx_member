<template>
  <div class="p-6 max-w-4xl mx-auto">
    <h1 class="text-2xl font-bold">User Management</h1>
    <table class="w-full mt-4 border">
      <thead>
        <tr class="bg-gray-200">
          <th class="p-2">Username</th>
          <th class="p-2">Email</th>
          <th class="p-2">Status</th>
          <th class="p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" class="border-b">
          <td class="p-2">{{ user.username }}</td>
          <td class="p-2">{{ user.email }}</td>
          <td class="p-2">{{ user.status }}</td>
          <td class="p-2">
            <button
              v-if="user.status !== 'active'"
              @click="updateStatus(user.id, 'active')"
              class="bg-green-500 text-white px-2 py-1 rounded"
            >
              Activate
            </button>
            <button
              v-if="user.status === 'active'"
              @click="updateStatus(user.id, 'suspended')"
              class="bg-red-500 text-white px-2 py-1 rounded"
            >
              Suspend
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAdminStore } from '../../store/adminStore'

const adminStore = useAdminStore()

onMounted(() => {
  adminStore.fetchUsers()
})

const updateStatus = async (userId, status) => {
  await adminStore.updateUserStatus(userId, status)
}
</script>
