import React from 'react'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { ArrowRight, PencilPaper, Plus, Search } from '@components/icons'

import { Button } from '..'

export default {
  title: 'COMPONENTS/CORE/Button',
  component: Button,
  argTypes: {
    icon: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const ButtonPrimary = Template.bind({})
ButtonPrimary.args = {
  children: 'New Post',
}

export const OutlineButtonPrimarySmallWithIcon = Template.bind({})
OutlineButtonPrimarySmallWithIcon.args = {
  children: 'Freelance web developer',
  icon: <Search width="16" />,
  size: 'sm',
  variant: 'outline',
}

export const TextButtonPrimaryWithIcon = Template.bind({})
TextButtonPrimaryWithIcon.args = {
  children: 'Add new Website',
  icon: <Plus width="16" />,
  variant: 'text',
}

export const FluidButtonPrimaryWithIcon = Template.bind({})
FluidButtonPrimaryWithIcon.args = {
  children: 'Add new Website',
  icon: <Plus width="16" />,
  fluid: true,
}

export const SmallRadiusButtonPrimary = Template.bind({})
SmallRadiusButtonPrimary.args = {
  children: 'Start my free month',
  radius: 'sm',
  size: 'lg',
}
export const OutlineButtonPrimaryLargeWithIcon = Template.bind({})

OutlineButtonPrimaryLargeWithIcon.args = {
  children: 'Post a free job',
  icon: <PencilPaper width="20" />,
  size: 'lg',
  variant: 'outline',
}

export const SecondaryPrimary = Template.bind({})
SecondaryPrimary.args = {
  children: 'New Post',
  icon: <ArrowRight direction="top" width="16" />,
}

export const SecondaryButtonWithIcon = Template.bind({})
SecondaryButtonWithIcon.args = {
  children: 'New Post',
  icon: <ArrowRight direction="bottom" width="16" />,
}

export const SecondaryPrimaryWithIcon = Template.bind({})
SecondaryPrimaryWithIcon.args = {
  children: 'Follow',
  color: 'secondary',
  variant: 'outline',
  icon: <Plus width="16" />,
}

export const SuccessPrimaryWithIcon = Template.bind({})
SuccessPrimaryWithIcon.args = {
  children: 'Applied',
  color: 'success',
}
