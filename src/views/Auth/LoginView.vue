<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <form @submit.prevent="login" class="bg-white p-6 rounded-lg shadow-md w-96">
      <h2 class="text-xl font-semibold text-center mb-4">Login</h2>
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
      <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../../store/authStore'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const authStore = useAuthStore()
const router = useRouter()

const login = async () => {
  await authStore.login({ email: email.value, password: password.value })
  router.push('/dashboard')
}
</script>
