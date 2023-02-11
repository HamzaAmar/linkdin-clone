import { ReviewModel } from '@api/posts/posts.type'
import { UserModel } from '@api/users/users.type'
import type { ReactNode } from 'react'

type Variant = 'none' | ''

export interface UserCardProps {
  user: UserModel
  variant?: Variant
  children: ReactNode
  reviews: ReviewModel[] | null
}
