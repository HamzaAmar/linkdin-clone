import { Text } from '@components/core'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Invitation from './invitation'

export default {
  title: 'COMPONENTS/Articles/Invitation',
  component: Invitation,
  args: {
    user: {
      name: 'Hamza Miloud Amar',
      avatar: 'https://picsum.photos/id/157/150/150',
      slug: 'hamza-miloud-amar-463b24167',
      description: 'Senior Front End Developer I Like to write Accessible and high performance website',
    },
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Invitation>

const Template: ComponentStory<typeof Invitation> = (args) => <Invitation {...args} />

export const InvitationArticle = Template.bind({})
InvitationArticle.args = {
  name: 'Hamza Miloud amar',
  avatar: 'https://picsum.photos/id/23/200/200',
  description: 'Hello world my name is hamza miloud amar Hello world my name is hamza miloud amar ',
}

export const InvitationArticleWithMessage = Template.bind({})
InvitationArticleWithMessage.args = {
  name: 'Hamza Miloud amar',
  avatar: 'https://picsum.photos/id/23/200/200',
  description: 'Hello world my name is hamza miloud amar Hello world my name is hamza miloud amar ',
  message: 'hello hamza are you ready for an opertiunity',
}

export const InvitationArticleWithLongMessage = Template.bind({})
InvitationArticleWithLongMessage.args = {
  name: 'Hamza Miloud amar',
  avatar: 'https://picsum.photos/id/23/200/200',
  description: 'Hello world my name is hamza miloud amar Hello world my name is hamza miloud amar ',
  message:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatem est ea eaque quia iusto unde dolor at. Laudantium, minima placeat facere excepturi explicabo dolorum sint distinctio qui quisquam ab.',
}
