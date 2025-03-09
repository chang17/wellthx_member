<template>
  <div class="p-6 max-w-4xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Dashboard</h1>
    <div class="grid grid-cols-2 gap-4">
      <div class="bg-white p-4 rounded-lg shadow-md">
        <h2 class="text-lg font-semibold">Wallet Balance</h2>
        <p class="text-2xl font-bold">{{ wallet }} USDT</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-md">
        <h2 class="text-lg font-semibold">Referrals</h2>
        <p class="text-xl">{{ referrals.length }} members</p>
      </div>
    </div>
    <h2 class="text-xl font-semibold mt-6">Recent Transactions</h2>
    <table class="w-full mt-2 border">
      <thead>
        <tr class="bg-gray-200">
          <th class="p-2 text-left">Type</th>
          <th class="p-2 text-right">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="txn in transactions" :key="txn.id" class="border-b">
          <td class="p-2">{{ txn.transaction_type }}</td>
          <td class="p-2 text-right">{{ txn.amount }} USDT</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '../../store/userStore'

const userStore = useUserStore()

onMounted(() => {
  userStore.fetchUserData()
  userStore.fetchWallet()
  userStore.fetchReferrals()
  userStore.fetchTransactions()
})
</script>
