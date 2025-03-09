<template>
  <div class="p-6 max-w-4xl mx-auto">
    <h1 class="text-2xl font-bold">Transaction Management</h1>
    <table class="w-full mt-4 border">
      <thead>
        <tr class="bg-gray-200">
          <th class="p-2">User ID</th>
          <th class="p-2">Type</th>
          <th class="p-2">Amount</th>
          <th class="p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="txn in transactions" :key="txn.id" class="border-b">
          <td class="p-2">{{ txn.user_id }}</td>
          <td class="p-2">{{ txn.transaction_type }}</td>
          <td class="p-2">{{ txn.amount }} USDT</td>
          <td class="p-2">{{ txn.status }}</td>
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
  adminStore.fetchTransactions()
})
</script>
