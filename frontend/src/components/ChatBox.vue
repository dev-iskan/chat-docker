<template>
  <div ref="chatContainer" class="bg-primary-50 rounded flex flex-col p-4 max-h-72 chat-box">
    <TransitionGroup name="messages" tag="div">
      <div
        v-for="message in messages"
        :key="message.id"
        class="flex space-y-4"
        :class="message.id === currentUserId ? 'flex-row-reverse' : 'justify-normal'"
      >
        <UserMessageAvatar :class="message.id === currentUserId ? 'ml-2' : 'mr-2'" />
        <UserMessage :message="message" />
      </div>
    </TransitionGroup>
  </div>
  <UserMessageInput v-model="message" :loading="loading" @submit="sendMessage" />
</template>

<script setup lang="ts">
import { computed, nextTick, reactive, ref } from 'vue'

import UserMessage from '@/components/UserMessage.vue'
import UserMessageAvatar from '@/components/UserMessageAvatar.vue'
import { useBaseStore } from '@/stores'
import type { Message } from '@/types'
import UserMessageInput from '@/components/UserMessageInput.vue'

const store = useBaseStore()

const loading = ref(false)
const chatContainer = ref(null)

const message = ref('')

const currentUserId = computed(() => store.userData.id)

const messages: Message[] = reactive([
  {
    id: 1,
    username: 'Morrigan',
    sentAt: '12:45',
    edited: false,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur, dolore, dolorum et expedita harum impedit minus, qui quia quos recusandae reiciendis sunt unde! Assumenda aut debitis necessitatibus non sequi!'
  },
  {
    id: 2,
    username: 'Karrigan',
    sentAt: '12:47',
    edited: false,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur, dolore, dolorum et expedita harum impedit minus, qui quia quos recusandae reiciendis sunt unde! Assumenda aut debitis necessitatibus non sequi!'
  },
  {
    id: 1,
    username: 'Morrigan',
    sentAt: '12:49',
    edited: false,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur, dolore, dolorum et expedita harum impedit minus, qui quia quos recusandae reiciendis sunt unde! Assumenda aut debitis necessitatibus non sequi!'
  },
  {
    id: 2,
    username: 'Karrigan',
    sentAt: '12:51',
    edited: true,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur, dolore, dolorum et expedita harum impedit minus, qui quia quos recusandae reiciendis sunt unde! Assumenda aut debitis necessitatibus non sequi!'
  }
])

const sendMessage = () => {
  loading.value = true
  const payload = {
    id: currentUserId.value,
    username: store.userData.username,
    sentAt: new Date().toLocaleDateString(),
    edited: false,
    text: message.value
  }
  message.value = ''

  messages.push(payload)
  scrollToBottom()
  setTimeout(() => {
    loading.value = false
  }, 1000)
}

const scrollToBottom = () => {
  nextTick(() => {
    const chatBox = chatContainer.value
    chatBox.scrollTop = chatBox.scrollHeight
  })
}
</script>

<style lang="css" scoped>
.messages-enter-active,
.messages-leave-active {
  transition: all 0.5s ease;
}

.messages-enter-from,
.messages-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.chat-box {
  overflow: scroll;
  max-height: calc(100vh - 10%);
}
</style>
