<template>
  <div ref="chatContainer" class="bg-primary-50 rounded flex flex-col p-4 h-full chat-box">
    <TransitionGroup name="messages" tag="div">
      <div
        v-for="message in chatMessages"
        :key="message.id"
        class="flex space-y-4"
        :class="message.user_id === currentUserId ? 'flex-row-reverse' : 'justify-normal'"
      >
        <UserMessageAvatar :class="message.user_id === currentUserId ? 'ml-2' : 'mr-2'" />
        <UserMessage :message="message" />
      </div>
    </TransitionGroup>
  </div>
  <UserMessageInput v-model="message" :loading="loading" @submit="sendMessage" />
</template>

<script setup lang="ts">
import { computed, inject, nextTick, onMounted, ref } from 'vue';

import UserMessage from '@/components/UserMessage.vue';
import UserMessageAvatar from '@/components/UserMessageAvatar.vue';
import { useBaseStore } from '@/stores';
import UserMessageInput from '@/components/UserMessageInput.vue';
import type { Centrifuge } from 'centrifuge';

const store = useBaseStore();
const $centrifuge: Centrifuge = inject('$centrifuge');

$centrifuge.connect();

const subscription = $centrifuge.newSubscription('chat');
subscription.on('publication', () => {
  store.actionGetMessages('');
});
subscription.subscribe();

const loading = ref(false);
const chatContainer = ref(null);

const message = ref('');

const currentUserId = computed(() => store.getUserData?.id);

const chatMessages = computed(() => store.getMessagesList);

const sendMessage = () => {
  loading.value = true;
  const payload = {
    user_id: currentUserId.value,
    text: message.value
  };
  message.value = '';
  store.actionSendMessage(payload);
  scrollToBottom();
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};

const scrollToBottom = () => {
  nextTick(() => {
    const chatBox = chatContainer.value;
    console.log(chatBox);
    chatBox.scrollTop = chatBox.scrollHeight;
  });
};

onMounted(() => {
  store.actionGetMessages('');
});
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
