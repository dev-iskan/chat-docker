import type { RootState } from '@/stores/index';

export const getters = {
  getUserData(state: RootState) {
    return state.user;
  },
  getMessagesList(state: RootState) {
    return state.messages;
  }
};
