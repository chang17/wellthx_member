<template>
  <div class="p-6 max-w-6xl mx-auto">
    <h1 class="text-2xl font-bold">Export Reports</h1>
    <button @click="exportUsers" class="bg-blue-500 text-white px-4 py-2 rounded mt-4">
      Export User Data
    </button>
    <button @click="exportTransactions" class="bg-green-500 text-white px-4 py-2 rounded mt-4 ml-4">
      Export Transactions
    </button>
  </div>
</template>

<script setup>
import api from '../../utils/api'

const exportUsers = async () => {
  const response = await api.get('/admin/export/users', { responseType: 'blob' })
  const url = window.URL.createObjectURL(new Blob([response.data]))
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', 'users_report.csv')
  document.body.appendChild(link)
  link.click()
}

const exportTransactions = async () => {
  const response = await api.get('/admin/export/transactions', { responseType: 'blob' })
  const url = window.URL.createObjectURL(new Blob([response.data]))
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', 'transactions_report.csv')
  document.body.appendChild(link)
  link.click()
}
</script>
