import type { RootState } from '@/stores/index'

export const getters = {
  userData(state: RootState) {
    return state.user
  }
}
