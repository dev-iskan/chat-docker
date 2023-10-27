<template>
  <div class="bg-primary-200 w-80 p-4 rounded-2xl shadow-sm">
    <form
      class="space-y-4 flex flex-col justify-center items-center"
      @keydown.enter.prevent="submit"
    >
      <div class="flex space-x-2">
        <span class="text-lg">Welcome to</span>
        <div class="flex">
          <img :src="alifLogo" alt="alif-logo" />
          <span class="text-lg">Chat</span>
        </div>
      </div>
      <span class="w-full flex flex-col space-y-2">
        <InputText
          for="username"
          v-model="fields.username"
          type="text"
          size="large"
          class="rounded p-2"
          placeholder="Логин"
        />
        <span v-if="isValid" class="text-red-500 text-xs">Обязательное поле</span>
      </span>
      <Button
        severity="success"
        class="py-2 px-6 bg-primary-100 hover:bg-primary-50"
        raised
        outlined
        @click="submit"
        >Войти
      </Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

import alifLogo from '@/assets/alif-logo.svg'
import { useRouter } from 'vue-router'
import { useBaseStore } from '@/stores'

const router = useRouter()
const store = useBaseStore()

const fields = reactive({
  username: ''
})
const isValid = ref(false)
const resetForm = () => {
  fields.username = ''
  isValid.value = false
}
const submit = () => {
  if (fields.username && fields.username.length > 0) {
    store.actionLogin(fields.username)
    router.push('/')
    resetForm()
  } else isValid.value = true
}
</script>

<style lang="scss" scoped></style>
