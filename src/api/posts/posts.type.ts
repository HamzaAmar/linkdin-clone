import { UserModel } from '@api/users/users.type'
import { ReactionUnion } from '@components/articles/hoverCard/like'
import type { ReactNode } from 'react'

interface Like {
  user: UserModel
  type: ReactionUnion
}

export interface ReviewModel {
  id: string
  user: UserModel
  content: string
  date: Date
  likes: Like[] | null
  reply: ReviewModel[] | null
}

export interface PostModel {
  id: string
  user: UserModel
  content: ReactNode
  date: Date
  reviews: ReviewModel[] | null
  likes: Like[] | null
}

export interface PostUserModel extends PostModel {}
