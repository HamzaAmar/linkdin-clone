import { USERS_LIST } from './users.data'

export function getUsers() {
  return USERS_LIST
}

export function getUserBySlug(slug: string) {
  return USERS_LIST.find((user) => user.id === slug)
}

export function getUsersBySlug(slugs: string[]) {
  const slugObj = slugs.reduce<Record<string, string>>((obj, slug) => {
    return { ...obj, [slug]: slug }
  }, {})
  return USERS_LIST.filter((user) => slugObj[user.id])
}

export function getNotFriend(slug: string) {
  const friends = getUserBySlug(slug)?.friends ?? []
}

export function getOnlyFriend(slug: string) {
  const friendsSlug = getUserBySlug(slug)?.friends ?? []
  const friends = friendsSlug
}
