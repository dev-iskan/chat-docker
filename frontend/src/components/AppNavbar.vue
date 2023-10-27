<template>
  <div class="flex justify-between py-4 px-4 bg-primary-200">
    <div class="flex items-center">
      <img :src="alifLogo" alt="logo" class="w-8 h-10" />
      <span class="text-xl">Chat</span>
    </div>
    <button class="flex items-center" @click="logout">
      <span class="text-xl">Выйти</span>
      <ArrowLeftOnRectangleIcon class="w-8 h-10 text-primary-600" />
    </button>
  </div>
</template>

<script setup lang="ts">
import alifLogo from '@/assets/alif-logo.svg'
import { ArrowLeftOnRectangleIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  localStorage.removeItem('username')
  router.push('/auth')
}
</script>
