import { defineStore } from 'pinia'
import { getters } from '@/stores/getters'
import { actions } from '@/stores/actions'

import type { UserEntity } from '@/types'

export interface RootState {
  user: UserEntity
}

export const useBaseStore = defineStore('base', {
  state: (): RootState => ({
    user: {
      id: 1,
      username: 'Morrigan'
    }
  }),
  getters,
  actions
})
