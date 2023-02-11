import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { getDate } from '@utils/date'

import ReviewInput from './reviewInput'

export default {
  title: 'COMPONENTS/Articles/ReviewInput',
  component: ReviewInput,
  args: {
    user: {
      name: 'Hamza Miloud Amar',
      avatar: 'https://picsum.photos/id/157/150/150',
      slug: 'hamza-miloud-amar-463b24167',
      description: 'Senior Front End Developer I Like to write Accessible and high performance website',
    },
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
} as ComponentMeta<typeof ReviewInput>

const Template: ComponentStory<typeof ReviewInput> = (args) => <ReviewInput {...args} />

export const ReviewInputImage = Template.bind({})
