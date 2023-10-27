import { apiClient } from '@/api/apiClient';

export const signIn = (name: string) => {
  return apiClient.post(`/me?name=${name}`).then((res) => res.data.data);
};

export const getMessages = (page: string) => {
  return apiClient.get(`/messages?page=${page}`).then((res) => res);
};

interface SendMessagePayload {
  user_id: number;
  text: string;
}

export const sendMessage = (payload: SendMessagePayload) => {
  return apiClient.post('/messages', payload);
};
