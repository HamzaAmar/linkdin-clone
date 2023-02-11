import UserPoster from './userPoster'

import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { USERS_LIST } from '@api/users/users.data'

export default {
  title: 'Components/Sections/userPoster',
  component: UserPoster,
  args: {
    user: USERS_LIST[0],
  },
} as ComponentMeta<typeof UserPoster>

const Template: ComponentStory<typeof UserPoster> = (args) => <UserPoster {...args} />

export const UserPosterNormal = Template.bind({})
