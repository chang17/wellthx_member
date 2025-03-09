<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Deposit USDT</h2>
    <p class="mb-4">Send USDT (BEP20) to the following address:</p>
    <div class="p-4 bg-gray-200 rounded-lg text-center">
      <p class="font-mono">{{ usdtAddress }}</p>
      <button @click="copyAddress" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Copy
      </button>
    </div>
  </div>
</template>

<script>
import api from '../services/api'
export default {
  data() {
    return { usdtAddress: '' }
  },
  mounted() {
    api.get('/usdt-address').then((response) => {
      this.usdtAddress = response.data.address
    })
  },
  methods: {
    copyAddress() {
      navigator.clipboard.writeText(this.usdtAddress)
      alert('Address copied!')
    },
  },
}
</script>
