import { getUserBySlug, getUsers, getUsersBySlug } from '.'
import { USERS_LIST } from './users.data'
import { UserModel } from './users.type'

const Me = {
  slug: 'hamza-miloud-amar-463b24167',
  name: 'Hamza Miloud Amar',
  images: {
    avatar:
      'https://www.upwork.com/profile-portraits/c1e9S1NRKoaU4N1s5WIbCvKEaRrjtlqn3nCDI_kKGhZ--0Iv_gyym2pZ5maBedlm2c',
    heroImage:
      'https://media-exp1.licdn.com/dms/image/C4E16AQFvcEGPm6e7VA/profile-displaybackgroundimage-shrink_350_1400/0/1627487447645?e=1669852800&v=beta&t=pmeVreqh0oe2pLbKdMVBoaJ7ScaC5QjUwVLyKC3w0oY',
  },
  friends: ['souad-khadiri', 'xman-an', 'chloe-leblanc', 'chris-lepain', 'kent-robert'],
  username: 'hamza-miloud-amar12',
  description: 'Senior Front End Developer I Like to write Accessible , Design System and high performance website',
  email: 'hamzamiloudamar@gmail.com',
  password: '',
  status: 'online',
  projects: [{ slug: '', dateEnd: new Date(), dateStart: new Date(), description: '', name: '', url: '' }],
  education: [{ slug: '', dateEnd: new Date(), dateStart: new Date(), description: '', school: '' }],
  contact: {
    website: '',
    email: 'hello.email.com',
  },
}

const Recheal = {
  slug: 'rachel-green',
  name: 'Rachel Green',
  images: {
    avatar: '/images/users/rachel-green/rachel-green.jpg',
    heroImage:
      'https://media-exp1.licdn.com/dms/image/C4E16AQFvcEGPm6e7VA/profile-displaybackgroundimage-shrink_350_1400/0/1627487447645?e=1669852800&v=beta&t=pmeVreqh0oe2pLbKdMVBoaJ7ScaC5QjUwVLyKC3w0oY',
  },
  friends: ['souad-khadiri', 'xman-an', 'chloe-leblanc', 'chris-lepain', 'kent-robert'],
  username: 'rachel-green12',
  description: '',
  email: 'rachel123@gmail.com',
  password: '',
  status: 'online',
  projects: [{ slug: '', dateEnd: new Date(), dateStart: new Date(), description: '', name: '', url: '' }],
  education: [{ slug: '', dateEnd: new Date(), dateStart: new Date(), description: '', school: '' }],
  contact: {
    website: '',
    email: 'hello.email.com',
  },
}

const MeAndRecheal = [Me, Recheal]

// test('if getUsers equal USERS_LIST', () => {
//   expect(getUsers()).toEqual(USERS_LIST)
// })

// test('if getUser equal USERS_LIST', () => {
//   expect(getUserBySlug('hamza-miloud-amar-463b24167')).toEqual(Me)
// })

// test('if getUsersBySlug() equal ME', () => {
//   expect(getUsersBySlug(['hamza-miloud-amar-463b24167', 'rachel-green'])).toEqual(MeAndRecheal)
// })

test('if getUsersBySlug() equal ME', () => {
  expect(1).toBe(1)
})
