import { ReactNode } from 'react'

export type ReactionUnion = 'Like' | 'Love' | 'Support' | 'Celebrate' | 'Interest' | 'Curious' | 'Funny'
export type ReactionUnionSlug = Lowercase<ReactionUnion>
export interface ReactionType {
  slug: ReactionUnionSlug
  image: string
  thumbnail: string
  label: ReactionUnion
  color: string
}

export interface LikeProps {
  children: ReactNode
  handleLike: any
}
