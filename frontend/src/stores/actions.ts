import { getMessages, sendMessage, signIn } from '@/api/chat.api';
import { useBaseStore } from '@/stores/index';

export const actions = {
  async actionLogin(name: string) {
    try {
      const store = useBaseStore();
      store.user = await signIn(name);
      localStorage.setItem('user', JSON.stringify(store.user));
    } catch (error) {
      console.error('Sign-in failed:', error);
    }
  },
  async actionGetMessages(page: string) {
    const store = useBaseStore();
    const response = await getMessages(page);
    store.messages = [...store.messages, ...response.data.data];
    const meta = response.data.meta;
    store.current_page = meta.current_page;
    store.from = meta.from;
    store.last_page = meta.last_page;
  },

  async actionGetMessageCentrifuge(message) {
    const store = useBaseStore();
    store.messages = [message, ...store.messages];
  },

  async actionSendMessage(payload) {
    await sendMessage(payload);
  }
};
