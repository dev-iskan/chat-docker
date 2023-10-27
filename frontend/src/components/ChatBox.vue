<template>
  <div
    ref="chatContainer"
    class="relative bg-primary-50 rounded flex flex-col p-4 h-full chat-box"
    @scroll="handleScroll"
  >
    <TransitionGroup name="messages" tag="div">
      <div
        v-for="message in chatMessages"
        :key="message.id"
        class="flex space-y-4"
        :class="message.user_id === currentUserId ? 'flex-row-reverse' : 'justify-normal'"
      >
        <UserMessageAvatar
          :userId="message.user_id"
          :currentId="currentUserId"
          :class="message.user_id === currentUserId ? 'ml-2' : 'mr-2'"
        />
        <UserMessage :message="message" />
      </div>
    </TransitionGroup>
  </div>
  <UserMessageInput v-model="message" :loading="loading" @submit="sendMessage" />
</template>

<script setup lang="ts">
import { computed, inject, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';

import UserMessage from '@/components/UserMessage.vue';
import UserMessageAvatar from '@/components/UserMessageAvatar.vue';
import { useBaseStore } from '@/stores';
import UserMessageInput from '@/components/UserMessageInput.vue';
import type { Centrifuge } from 'centrifuge';
import { isValidValue } from '@/utils/simpleValidate';

const store = useBaseStore();
const $centrifuge: Centrifuge = inject('$centrifuge');

$centrifuge.connect();

const subscription = $centrifuge.newSubscription('chat');
subscription.on('publication', (ctx) => {
  console.log(ctx);
  store.actionGetMessageCentrifuge(ctx.data);
});
subscription.subscribe();

const loading = ref(false);
const chatContainer = ref(null);

const message = ref('');

const currentUserId = computed(() => store.getUserData?.id);

const chatMessages = computed(() => store.getExtendedMessagesList);

const pagination = computed(() => store.getPaginationValues);

const sendMessage = async () => {
  if (isValidValue(message.value) && chatMessages.value.length < 300) {
    loading.value = true;
    const payload = {
      user_id: currentUserId.value,
      text: message.value
    };
    message.value = '';
    scrollToBottom();
    setTimeout(() => {
      loading.value = false;
    }, 1000);
  }
};

const scrollToBottom = () => {
  nextTick(() => {
    const chatBox = chatContainer.value;
    chatBox.scrollTop = chatBox.scrollHeight + 100;
  });
};

const scrolling = ref(false);

const handleScroll = () => {
  scrolling.value = true;

  clearTimeout(scrollTimeout);

  // Set a new timeout
  scrollTimeout = setTimeout(() => {
    scrolling.value = false;
    const lastKnownScrollPosition = chatContainer.value.scrollTop;

    if (lastKnownScrollPosition <= 300) {
      const { current_page, last_page } = pagination.value;
      if (current_page < last_page) {
        store.actionGetMessages(current_page + 1);
      }
    }
  }, 400);
};

let scrollTimeout: number;

onMounted(() => {
  store.actionGetMessages('');
  scrollToBottom();
});
onBeforeUnmount(() => {
  $centrifuge.removeSubscription(subscription);
  $centrifuge.disconnect();
  store.$reset();
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
