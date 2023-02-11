import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Avatar from '../avatar'

export default {
  title: 'COMPONENTS/CORE/AvatarGroup',
  component: Avatar.Group,
  args: {
    children: [
      <Avatar image="https://picsum.photos/id/159/100/100" title="hello" />,
      <Avatar image="https://picsum.photos/id/151/100/100" title="hello" />,
      <Avatar image="https://picsum.photos/id/152/100/100" title="hello" />,
      <Avatar image="https://picsum.photos/id/153/100/100" title="hello" />,
      <Avatar image="https://picsum.photos/id/154/100/100" title="hello" />,
      <Avatar image="https://picsum.photos/id/155/100/100" title="hello" />,
    ],
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Avatar.Group>

const Template: ComponentStory<typeof Avatar.Group> = (args) => <Avatar.Group {...args} />

export const AvatarGroupNormalSmall = Template.bind({})
AvatarGroupNormalSmall.args = {}

export const AvatarGroupNormalMedium = Template.bind({})
AvatarGroupNormalMedium.args = {
  gap: 'md',
}

export const AvatarGroupNormalLarge = Template.bind({})
AvatarGroupNormalLarge.args = {
  gap: 'lg',
}

export const AvatarGroupSizeSmallGapNormal = Template.bind({})
AvatarGroupSizeSmallGapNormal.args = {
  size: 'md',
}

export const AvatarGroupSizeSmallGapMedium = Template.bind({})
AvatarGroupSizeSmallGapMedium.args = {
  gap: 'md',
  size: 'md',
}

export const AvatarGroupSizeSmallGapLarge = Template.bind({})
AvatarGroupSizeSmallGapLarge.args = {
  gap: 'lg',
  size: 'md',
}

export const AvatarGroupSizeLargeGapNormal = Template.bind({})
AvatarGroupSizeLargeGapNormal.args = {
  size: 'lg',
}

export const AvatarGroupSizeLargeGapMedium = Template.bind({})
AvatarGroupSizeLargeGapMedium.args = {
  gap: 'md',
  size: 'lg',
}

export const AvatarGroupSizeLargeGapLarge = Template.bind({})
AvatarGroupSizeLargeGapLarge.args = {
  gap: 'lg',
  size: 'lg',
}
