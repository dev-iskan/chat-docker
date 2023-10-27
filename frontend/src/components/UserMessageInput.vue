<template>
  <div class="w-full">
    <span class="p-input-icon-right w-full">
      <i v-if="loading" class="pi pi-spin pi-spinner" />
      <i
        v-else
        class="hover:cursor-pointer hover:text-primary-600 text-xl pi pi-arrow-right"
        @click="$emit('submit')"
      />
      <InputText
        :value="modelValue"
        size="large"
        class="rounded w-full p-4 border-gray-100 border"
        placeholder="Message"
        :disabled="loading"
        @update:modelValue="(val) => $emit('update:modelValue', val)"
        @keydown.enter="$emit('submit')"
      />
    </span>
  </div>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext'
import { ref } from 'vue'

defineEmits(['update:modelValue', 'submit'])

defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const message = ref('')
</script>

<style lang="scss" scoped></style>
