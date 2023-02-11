import { ReactionType } from './like.type'

const like: ReactionType = {
  slug: 'like',
  image: 'https://static-exp1.licdn.com/sc/h/f4ly07ldn7194ciimghrumv3l',
  thumbnail: '	https://static-exp1.licdn.com/sc/h/2uxqgankkcxm505qn812vqyss',
  label: 'Like',
  color: '#0a66c2',
}
const celebrate: ReactionType = {
  slug: 'celebrate',
  image: 'https://static-exp1.licdn.com/sc/h/3c4dl0u9dy2zjlon6tf5jxlqo',
  thumbnail: 'https://static-exp1.licdn.com/sc/h/cm8d2ytayynyhw5ieaare0tl3 ',
  label: 'Celebrate',
  color: '#44712e',
}

const support: ReactionType = {
  slug: 'support',
  image: 'https://static-exp1.licdn.com/sc/h/9whrgl1hq2kfxjqr9gqwoqrdi',
  thumbnail: 'https://static-exp1.licdn.com/sc/h/e1vzxs43e7ryd6jfvu7naocd2',
  label: 'Support',
  color: '#715e86',
}
const funny: ReactionType = {
  slug: 'funny',
  image: 'https://static-exp1.licdn.com/sc/h/ktcgulanbxpl0foz1uckibdl',
  thumbnail: 'https://static-exp1.licdn.com/sc/h/6namow3mrvcg3dyuevtpfwjm0',
  label: 'Funny',
  color: '#13707e',
}

const love: ReactionType = {
  slug: 'love',
  image: 'https://static-exp1.licdn.com/sc/h/asmf650x603bcwgefb4heo6bm',
  thumbnail: 'https://static-exp1.licdn.com/sc/h/f58e354mjsjpdd67eq51cuh49',
  label: 'Love',
  color: '#b24020',
}

const curious: ReactionType = {
  slug: 'curious',
  image: 'https://static-exp1.licdn.com/sc/h/1z80ze8ler6arc76a8rxsgqbh',
  thumbnail: 'https://static-exp1.licdn.com/sc/h/4rw9bhaoyh1622ce65fshynuw',
  label: 'Curious',
  color: '#80597e',
}
const interest: ReactionType = {
  slug: 'interest',
  image: 'https://static-exp1.licdn.com/sc/h/f58e354mjsjpdd67eq51cuh49',
  thumbnail: 'https://static-exp1.licdn.com/sc/h/6gz02r6oxefigck4ye888wosd',
  label: 'Interest',
  color: '#915907',
}

export const REACTION_OBJ = {
  like: like,
  celebrate: celebrate,
  support: support,
  funny: funny,
  love: love,
  curious: curious,
  interest: interest,
}

export const REACTION_LIST: ReactionType[] = [like, celebrate, support, funny, love, interest, curious]
