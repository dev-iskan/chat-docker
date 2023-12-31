import type { UserEntity } from '@/types/user'

export interface Message {
  id: number
  text: string
  user_id: number
  created_at: string
  updated_at: string
  user: UserEntity
}
