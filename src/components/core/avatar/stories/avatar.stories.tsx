import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Avatar, Flex } from '../..'

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

export const AvatarSize = () => {
  return (
    <Flex items="center">
      <Avatar size="2xs" image="https://picsum.photos/id/142/150/150" title="hell" />
      <Avatar size="xs" image="https://picsum.photos/id/142/150/150" title="hell" />
      <Avatar size="md" image="https://picsum.photos/id/142/150/150" title="hell" />
      <Avatar size="lg" image="https://picsum.photos/id/142/150/150" title="hell" />
      <Avatar size="xl" image="https://picsum.photos/id/142/150/150" title="hell" />
      <Avatar size="2xl" image="https://picsum.photos/id/142/150/150" title="hell" />
    </Flex>
  )
}

export const AvatarCorner = () => {
  return (
    <Flex items="center">
      <Avatar corner="circle" image="https://picsum.photos/id/142/150/150" title="hell" />
      <Avatar corner="sharp" image="https://picsum.photos/id/142/150/150" title="hell" />
      <Avatar corner="sm" image="https://picsum.photos/id/142/150/150" title="hell" />
      <Avatar corner="md" image="https://picsum.photos/id/142/150/150" title="hell" />
      <Avatar corner="lg" image="https://picsum.photos/id/142/150/150" title="hell" />
    </Flex>
  )
}

export const Playground = Template.bind({})
Playground.args = {}
