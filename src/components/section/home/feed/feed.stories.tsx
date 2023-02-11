import { FEEDS } from '@constants/feeds'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Feed from './feed'

export default {
  title: 'COMPONENTS/Sections/Feed',
  component: Feed,
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Feed>

const Template: ComponentStory<typeof Feed> = (args) => <Feed {...args} />

export const FeedTemplate = Template.bind({})
FeedTemplate.args = {
  feeds: FEEDS,
}
