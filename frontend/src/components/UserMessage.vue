<template>
  <div class="max-w-lg p-4 rounded-2xl shadow-sm" :class="messageStyle">
    <div class="flex justify-between items-center space-x-4">
      <div class="font-bold">{{ message.user.name }}</div>
      <div class="text-xs">{{ message._created_at_date + '-' + message._created_at_time }}</div>
    </div>

    <div>{{ message.text }}</div>
    <div class="flex justify-end">
      <span class="text-xs text-gray-500">
        {{ isMessageEdited }}
      </span>
    </div>
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

const userMessageStyle = 'rounded-br-none ml-auto bg-primary-100';
const otherUserMessageStyle = 'rounded-bl-none mr-auto bg-primary-200';
const messageStyle = computed(() => {
  return props.message.user_id === store.getUserData?.id ? userMessageStyle : otherUserMessageStyle;
});
const isMessageEdited = computed(() => {
  return props.message.edited ? 'Изменено' : '';
});
</script>

<style scoped></style>
