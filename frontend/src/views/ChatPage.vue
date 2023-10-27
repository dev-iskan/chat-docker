<template>
  <ChatBox />
</template>
<script setup lang="ts">
import ChatBox from '@/components/ChatBox.vue'
import { onMounted } from 'vue'
import { getCurrentUserInfo } from '@/api/chat.api'

onMounted(() => {
  getCurrentUserInfo('Morrigan')
})
</script>
