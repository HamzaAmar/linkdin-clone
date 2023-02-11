import { getUserBySlug } from '@api/users'
import { POSTS_LIST } from './posts.data'
import type { PostModel, PostUserModel } from './posts.type'

export function getPosts() {
  return POSTS_LIST
}
export function getPostBySlug(slug: string) {
  const user = {} as PostModel
  return user
}

export function getPostsByAuthor(slug: string): PostUserModel[] {
  const users = POSTS_LIST.filter(({ user }) => user.id === slug)
  return users
}

export function getAddReview() {}
export function getUpdateReview() {}
export function getDeleteReview() {}
