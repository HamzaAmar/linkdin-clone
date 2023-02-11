import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Avatar } from '..'

export default {
  title: 'COMPONENTS/CORE/AvatarBadge',
  component: Avatar.Badge,
  args: {
    name: 'Hamza Miloud Amar',
    variant: 'dot',
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Avatar.Badge>

const Template: ComponentStory<typeof Avatar.Badge> = (args) => (
  <Avatar title="Hello" image="https://picsum.photos/id/123/100/100">
    <Avatar.Badge {...args} />
  </Avatar>
)

export const StartStartAvatarBadge = Template.bind({})
StartStartAvatarBadge.args = {
  position: 'start-start',
}

export const StartEndAvatarBadge = Template.bind({})
StartEndAvatarBadge.args = {
  position: 'start-end',
}

export const EndStartAvatarBadge = Template.bind({})
EndStartAvatarBadge.args = {
  position: 'end-start',
}

export const EndEndAvatarBadge = Template.bind({})
