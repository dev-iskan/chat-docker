import { getMessages, sendMessage, signIn } from '@/api/chat.api';

export const actions = {
  async actionLogin(name: string) {
    this.user = await signIn(name);
    localStorage.setItem('user', JSON.stringify(this.user));
  },
  async actionGetMessages(page: string) {
    this.messages = await getMessages(page);
  },
  async actionSendMessage(payload) {
    await sendMessage(payload);
    await this.actionGetMessages('');
  }
};
