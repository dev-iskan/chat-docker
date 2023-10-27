import { defineStore } from 'pinia'
import { getters } from '@/stores/getters'
import { actions } from '@/stores/actions'

import type { Message, UserEntity } from '@/types'

export interface RootState {
  user: null | UserEntity
  messages: null | Message[]
}

export const useBaseStore = defineStore('base', {
  state: (): RootState => ({
    user: null,
    messages: null
  }),
  getters,
  actions,
  persist: true
})
