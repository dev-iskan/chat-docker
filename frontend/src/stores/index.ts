import { defineStore } from 'pinia';
import { getters } from '@/stores/getters';
import { actions } from '@/stores/actions';

import type { Message, UserEntity } from '@/types';

export interface RootState {
  user: null | UserEntity;
  messages: null | Message[];
  current_page: number;
  from: number;
  last_page: number;
}

export const useBaseStore = defineStore('base', {
  state: (): RootState => ({
    user: null,
    messages: null,
    current_page: null,
    from: null,
    last_page: null
  }),
  getters,
  actions,
  persist: true
});
