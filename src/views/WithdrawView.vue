<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Withdraw USDT</h2>
    <input
      v-model="withdrawAmount"
      type="number"
      placeholder="Amount"
      class="w-full p-2 border rounded mb-2"
    />
    <button @click="withdraw" class="w-full bg-red-500 text-white p-2 rounded">Withdraw</button>
  </div>
</template>

<script>
import api from '../services/api'
export default {
  data() {
    return { withdrawAmount: 0 }
  },
  methods: {
    withdraw() {
      api.post('/withdraw', { amount: this.withdrawAmount }).then(() => {
        alert(`Withdraw request for ${this.withdrawAmount} USDT submitted.`)
      })
    },
  },
}
</script>
