import { apiClient } from '@/api/apiClient'

const getCurrentUserInfo = (name: string) => {
  apiClient.post(`/me?name=${name}`).then((res) => console.log(res))
}

const getMessages = (page: string) => {
  apiClient.get(`/messages?page=${page}`).then((res) => console.log(res))
}

export { getCurrentUserInfo }
