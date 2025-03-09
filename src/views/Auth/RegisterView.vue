<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <form @submit.prevent="register" class="bg-white p-6 rounded-lg shadow-md w-96">
      <h2 class="text-xl font-semibold text-center mb-4">Register</h2>
      <input
        v-model="username"
        type="text"
        placeholder="Username"
        class="w-full p-2 border rounded mb-3"
      />
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="w-full p-2 border rounded mb-3"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="w-full p-2 border rounded mb-3"
      />
      <button type="submit" class="w-full bg-green-500 text-white p-2 rounded">Register</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const username = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()

const register = async () => {
  await axios.post('/api/users/register', {
    username: username.value,
    email: email.value,
    password: password.value,
  })
  router.push('/login')
}
</script>
