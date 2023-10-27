<template>
  <div
    :class="message._avatar_color"
    class="rounded-full flex justify-center items-center shadow-sm w-11 h-11 mt-auto"
  >
    <UserCircleIcon class="w-6 h-6" />
  </div>
</template>

<script setup lang="ts">
import { UserCircleIcon } from '@heroicons/vue/24/outline';

defineProps({
  message: {
    type: Object,
    default: () => ({})
  }
});
</script>

<style scoped></style>
