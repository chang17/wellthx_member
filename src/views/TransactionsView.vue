<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Transaction History</h2>
    <ul>
      <li v-for="(txn, index) in transactions" :key="index" class="mb-2 p-2 border rounded">
        {{ txn.date }} - {{ txn.type }} - {{ txn.amount }} USDT
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../services/api'
export default {
  data() {
    return { transactions: [] }
  },
  mounted() {
    api.get('/transactions').then((response) => {
      this.transactions = response.data
    })
  },
}
</script>
