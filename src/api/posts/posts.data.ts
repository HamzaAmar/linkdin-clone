import { USERS_LIST } from '@api/users/users.data'
import { getDate } from '@utils/date'
import { getRandomNumber } from '@utils/getRandomNumber'
import { PostModel, ReviewModel } from './posts.type'

function getRandomReview() {
  const userIndex = getRandomNumber({ min: 10, max: USERS_LIST.length })
  const randomReview = getRandomNumber({ min: 2, max: 10 })
  const reviews = Array.from<unknown, ReviewModel>({ length: randomReview }, (_, index) => {
    return {
      id: 'review-type-index',
      user: USERS_LIST[userIndex],
      content: 'hello',
      date: getDate({ days: -index }),
      likes: [
        {
          user: USERS_LIST[userIndex - 1],
          type: 'Celebrate',
        },
      ],
      reply: null,
    }
  })
  return reviews
}

export function getPosts() {
  const posts = Array.from<unknown, PostModel>({ length: 30 }, (_, index) => {
    const userIndex = getRandomNumber({ min: 5, max: USERS_LIST.length - 1 })

    return {
      id: `${new Date().getTime()}--${index}`,
      user: USERS_LIST[userIndex],
      content: 'Hello world My name Is hamza miloud amar I love Programming and I like to be a web developer at google',
      date: getDate({ month: -1 }),
      likes: [
        { user: USERS_LIST[userIndex - 1], type: 'Like' },
        { user: USERS_LIST[userIndex - 2], type: 'Like' },
        { user: USERS_LIST[userIndex - 3], type: 'Celebrate' },
        { user: USERS_LIST[userIndex - 4], type: 'Like' },
        { user: USERS_LIST[userIndex - 5], type: 'Funny' },
        { user: USERS_LIST[userIndex - 6], type: 'Like' },
      ],
      reviews: [...getRandomReview()],
    }
  })
  return posts
}

export const POSTS_LIST = getPosts()
