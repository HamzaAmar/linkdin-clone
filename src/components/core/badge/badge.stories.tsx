import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Badge from '.'

export default {
  title: 'COMPONENTS/CORE/Badge',
  component: Badge,
  argTypes: {
    classNames: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const NumericPrimaryLarge = Template.bind({})

NumericPrimaryLarge.args = {
  value: 10,
  max: 20,
  variant: 'numeric',
  size: 'lg',
}

export const NumericPrimary = Template.bind({})

NumericPrimary.args = {
  value: 10,
  max: 20,
  variant: 'numeric',
}

export const SmallSecondaryNumeric = Template.bind({})

SmallSecondaryNumeric.args = {
  value: 10,
  max: 20,
  variant: 'numeric',
  size: 'sm',
}

export const PrimaryNumericExtraSmall = Template.bind({})

PrimaryNumericExtraSmall.args = {
  value: 10,
  max: 20,
  variant: 'numeric',
  size: 'xs',
}

export const NumericSmallMaxDanger = Template.bind({})

NumericSmallMaxDanger.args = {
  value: 12,
  max: 9,
  variant: 'numeric',
  color: 'danger',
}

export const OutlineBadgeDanger = Template.bind({})

OutlineBadgeDanger.args = {
  variant: 'outline',
  color: 'danger',
}

export const OutlineBadgeSuccess = Template.bind({})

OutlineBadgeSuccess.args = {
  variant: 'outline',
  color: 'success',
}
export const OutlineBadgePrimary = Template.bind({})

OutlineBadgePrimary.args = {
  variant: 'outline',
  color: 'primary',
}
export const OutlineBadgeWarning = Template.bind({})

OutlineBadgeWarning.args = {
  variant: 'outline',
  color: 'warning',
}

export const OutlineBadgeSecondary = Template.bind({})

export const PrimaryDot = Template.bind({})

PrimaryDot.args = {
  variant: 'dot',
  color: 'primary',
}

export const DangerDot = Template.bind({})

DangerDot.args = {
  variant: 'dot',
  color: 'danger',
}

export const SuccessDot = Template.bind({})

SuccessDot.args = {
  variant: 'dot',
  color: 'success',
}

export const WarningDot = Template.bind({})

WarningDot.args = {
  variant: 'dot',
  color: 'warning',
}
