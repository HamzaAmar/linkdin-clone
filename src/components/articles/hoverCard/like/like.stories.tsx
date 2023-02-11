import LikeUI from '.'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Articles/Like',
  component: LikeUI,
} as ComponentMeta<typeof LikeUI>

const Template: ComponentStory<typeof LikeUI> = (args) => <LikeUI {...args} />

export const LikeUIFeed = Template.bind({})
export const LikeUIReview = Template.bind({})
LikeUIReview.args = {}
