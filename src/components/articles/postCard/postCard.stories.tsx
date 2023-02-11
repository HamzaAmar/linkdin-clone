import { USERS_LIST } from '@api/users/users.data'
import { Text } from '@components/core'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import PostCard from './postCard'

export default {
  title: 'COMPONENTS/Articles/PostCard',
  component: PostCard,
  args: {
    user: USERS_LIST[0],
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof PostCard>

const Template: ComponentStory<typeof PostCard> = (args) => <PostCard {...args} />

export const PostCardImage = Template.bind({})
PostCardImage.args = {
  children: (
    <>
      <Text weight="semi-bold">Never give up ???</Text>
      <img src="https://picsum.photos/id/152/450/250" alt="sdfsdf" />
    </>
  ),
}
