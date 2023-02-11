import { ComponentStory, ComponentMeta } from '@storybook/react'

import Job from '.'

export default {
  title: 'COMPONENTS/Articles/Job',
  component: Job,
  args: {
    name: 'Hamza Miloud Amar',
    avatar: 'https://picsum.photos/id/157/150/150',
    slug: 'hamza-miloud-amar-463b24167',
    date: new Date(),
    location: 'New York LA',
    type: 'remote',
    company: 'Atos',
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Job>

const Template: ComponentStory<typeof Job> = (args) => <Job {...args} />

export const JobArticle = Template.bind({})
