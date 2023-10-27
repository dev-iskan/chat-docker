<template>
  <div class="max-w-lg p-4 rounded-2xl shadow-sm" :class="messageStyle">
    <div class="flex justify-between items-center space-x-4">
      <div class="font-bold">{{ message.user?.name }}</div>
      <div class="text-xs">{{ message._created_at_date + '-' + message._created_at_time }}</div>
    </div>

    <div>{{ message.text }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useBaseStore } from '@/stores';

const props = defineProps({
  message: {
    type: Object,
    default: () => ({})
  }
});

const store = useBaseStore();

const userMessageStyle = `rounded-br-none ml-auto ${props.message._message_color}`;
const otherUserMessageStyle = `rounded-bl-none mr-auto ${props.message._message_color}`;
const messageStyle = computed(() => {
  return props.message.user_id === store.getUserData?.id ? userMessageStyle : otherUserMessageStyle;
});
</script>

<style scoped></style>
