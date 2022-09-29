import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Avatar from './avatar'

export default {
  title: 'COMPONENTS/CORE/Avatar',
  component: Avatar,
  args: {
    name: 'Hamza Miloud Amar',
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const AvatarCircleWithImage = Template.bind({})
AvatarCircleWithImage.args = {
  image: 'https://picsum.photos/id/157/150/150',
}

export const AvatarCircleWithoutImage = Template.bind({})
AvatarCircleWithoutImage.args = {}

export const SquareAvatar = Template.bind({})
SquareAvatar.args = {
  radius: 'sm',
}

export const SquareAvatarWithImage = Template.bind({})
SquareAvatarWithImage.args = {
  image: 'https://picsum.photos/id/157/150/150',
  radius: 'sm',
}

export const SquareAvatarWithoutImageArabicName = Template.bind({})
SquareAvatarWithoutImageArabicName.args = {
  radius: 'sm',
  name: 'حمزة ميلود عمار',
}
