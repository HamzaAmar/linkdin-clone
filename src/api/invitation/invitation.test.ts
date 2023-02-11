import { getInvitationByUserSlug } from '.'

const Rachel = {
  slug: 'invitation1 here we go-12567879',
  user: {
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
  },
}

const Jesica = {
  slug: 'invitation2 here we go-12567879',
  user: {
    slug: 'jesica-loma',
    name: 'Jesica Loma',
    images: {
      avatar: '/images/users/jesica-loma/jesica-loma.jpg',
      heroImage:
        'https://media-exp1.licdn.com/dms/image/C4E16AQFvcEGPm6e7VA/profile-displaybackgroundimage-shrink_350_1400/0/1627487447645?e=1669852800&v=beta&t=pmeVreqh0oe2pLbKdMVBoaJ7ScaC5QjUwVLyKC3w0oY',
    },
    friends: ['souad-khadiri', 'fadwa-lbib'],
    username: 'jesica-142',
    description: '',
    email: 'jesica@gmail.com',
    password: '',
    status: 'online',
    projects: [{ slug: '', dateEnd: new Date(), dateStart: new Date(), description: '', name: '', url: '' }],
    education: [{ slug: '', dateEnd: new Date(), dateStart: new Date(), description: '', school: '' }],
    contact: {
      website: '',
      email: 'hello.email.com',
    },
  },
}
const Meki = {
  slug: 'invitation3 here we go-12567879',
  user: {
    slug: 'meki-lou',
    name: 'Meki Lou',
    images: {
      avatar: '/images/users/meki-lou/meki-lou.jpg',
      heroImage:
        'https://media-exp1.licdn.com/dms/image/C4E16AQFvcEGPm6e7VA/profile-displaybackgroundimage-shrink_350_1400/0/1627487447645?e=1669852800&v=beta&t=pmeVreqh0oe2pLbKdMVBoaJ7ScaC5QjUwVLyKC3w0oY',
    },
    friends: [
      'souad-khadiri',
      'sara-lviv',
      'chloe-leblanc',
      'chris-lepain',
      'sami-vencent',
      'jesica-loma',
      'tom-kelly',
    ],
    username: 'loubou',
    description: '',
    email: 'mekilou@gmail.com',
    password: '',
    status: 'online',
    projects: [{ slug: '', dateEnd: new Date(), dateStart: new Date(), description: '', name: '', url: '' }],
    education: [{ slug: '', dateEnd: new Date(), dateStart: new Date(), description: '', school: '' }],
    contact: {
      website: '',
      email: 'hello.email.com',
    },
  },
  message: 'Are you ready for a job , we need a front end web developer for a mission of 5 month',
}

// const Tom = {
//   slug: 'invitation4 here we go-12567879',
//   user: {
//     slug: 'tom-kelly',
//     name: 'Tom kelly',
//     images: {
//       avatar: '/images/users/tom-kelly/tom-kelly.jpg',
//       heroImage:
//         'https://media-exp1.licdn.com/dms/image/C4E16AQFvcEGPm6e7VA/profile-displaybackgroundimage-shrink_350_1400/0/1627487447645?e=1669852800&v=beta&t=pmeVreqh0oe2pLbKdMVBoaJ7ScaC5QjUwVLyKC3w0oY',
//     },
//     friends: ['sara-lviv', 'xman-an', 'chloe-leblanc', 'meki-lou', 'sami-vencent', 'kent-robert'],
//     username: 'kelly15',
//     description: '',
//     email: 'tomkelly@gmail.com',
//     password: '',
//     status: 'online',
//     projects: [{ slug: '', dateEnd: new Date(), dateStart: new Date(), description: '', name: '', url: '' }],
//     education: [{ slug: '', dateEnd: new Date(), dateStart: new Date(), description: '', school: '' }],
//     contact: {
//       website: '',
//       email: 'hello.email.com',
//     },
//   },
// }

const MyThreeInvitation = [Rachel, Jesica, Meki]
// const MyFourInvitation = [Rachel, Jesica, Meki, Tom]

test('getInvitationByUserSlug only the first 3', () => {
  expect(getInvitationByUserSlug('hamza-miloud-amar-463b24167', { size: 3 })).toEqual({
    invitationUser: MyThreeInvitation,
  })
})
// test('getInvitationByUserSlug only the first 4', () => {
//   expect(getInvitationByUserSlug('hamza-miloud-amar-463b24167', { size: 4 })).toEqual(MyFourInvitation)
// })
