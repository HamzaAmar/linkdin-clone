import { USERS_LIST } from '@api/users/users.data'
import { Text } from '@components/core'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { getDate } from '@utils/date'

import Review from './review'

export default {
  title: 'COMPONENTS/Articles/Review',
  component: Review,
  args: {
    user: USERS_LIST[1],
    message:
      'Hello world my name is hamza miloud amar Hello world my name is hamza miloud amar Hello world my name is hamza miloud amar',
    date: getDate({ days: -2, hours: -2 }),
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Review>

const Template: ComponentStory<typeof Review> = (args) => <Review {...args} />

export const ReviewImage = Template.bind({})
