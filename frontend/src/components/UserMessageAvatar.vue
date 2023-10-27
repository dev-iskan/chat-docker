<template>
  <div
    :class="userId === currentId ? 'bg-primary-300' : 'bg-blue-200'"
    class="rounded-full flex justify-center items-center shadow-sm w-11 h-11 mt-auto"
  >
    <UserCircleIcon class="w-6 h-6" />
  </div>
</template>

<script setup lang="ts">
import { UserCircleIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  userId: {
    type: Number,
    default: null
  },
  currentId: {
    type: Number,
    default: null
  }
});
</script>

<style scoped></style>
