import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Radio, RadioGroup } from '..'

export default {
  title: 'COMPONENTS/CORE/RadioGroup',
  component: RadioGroup,
  args: {
    children: (
      <>
        <Radio label="M" value="m" id="men" checked />
        <Radio label="Mme" value="mme" id="women" />
      </>
    ),
    name: 'gender',
    title: 'Choose Your Gender',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof RadioGroup>

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />

export const HorizontalRadioGroup = Template.bind({})
HorizontalRadioGroup.args = {}

export const VerticalRadioGroup = Template.bind({})
VerticalRadioGroup.args = {
  direction: 'vertical',
}
export const VerticalRadioGroupLongText = Template.bind({})
VerticalRadioGroupLongText.args = {
  direction: 'vertical',
  label:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo facere debitis corrupti? Iusto dignissimos voluptatem, eos enim doloribus earum laudantium ipsam nulla error ullam molestiae, possimus nihil minus voluptatibus ipsa.',
}

export const GroupRadioDangerColor = Template.bind({})
GroupRadioDangerColor.args = {
  direction: 'vertical',
  color: 'danger',
}

export const GroupRadioSuccessColor = Template.bind({})
GroupRadioSuccessColor.args = {
  direction: 'vertical',
  color: 'success',
}

export const GroupRadioWarningColor = Template.bind({})
GroupRadioWarningColor.args = {
  direction: 'vertical',
  color: 'warning',
}
export const GroupRadioSecondaryColor = Template.bind({})
GroupRadioSecondaryColor.args = {
  direction: 'vertical',
  color: 'secondary',
}

export const GroupRadWithoutTitle = Template.bind({})
GroupRadWithoutTitle.args = {
  showTitle: false,
}
