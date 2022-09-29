import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Text from '.'

export default {
  title: 'COMPONENTS/CORE/Text',
  component: Text,
  args: {
    children: 'Nice To Meet You',
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Extra3SmallText = Template.bind({})
Extra3SmallText.args = {
  size: '3xs',
}

export const Extra2SmallText = Template.bind({})
Extra2SmallText.args = {
  size: '2xs',
}

export const ExtraSmallText = Template.bind({})
ExtraSmallText.args = {
  size: 'xs',
}

export const SmallText = Template.bind({})
SmallText.args = {
  size: 'sm',
}

export const MediumText = Template.bind({})
MediumText.args = {
  size: 'md',
}

export const ExtraLargeText = Template.bind({})
ExtraLargeText.args = {
  size: 'xl',
}

export const Extra2LargeText = Template.bind({})
Extra2LargeText.args = {
  size: '2xl',
}

export const Extra3LargeText = Template.bind({})

Extra3LargeText.args = {
  size: '3xl',
}

export const PrimaryText = Template.bind({})
PrimaryText.args = {
  size: 'md',
  color: 'primary',
}

export const GreyText = Template.bind({})
GreyText.args = {
  size: 'md',
  color: 'text',
  shade: '8',
}

export const TruncateMultiLine = Template.bind({})
TruncateMultiLine.args = {
  size: 'md',
  truncate: 'multiline',
  numberLine: 2,
  children:
    'Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet  Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You ',
}

export const TruncateSingleLine = Template.bind({})
TruncateSingleLine.args = {
  size: 'md',
  truncate: 'singleline',
  children:
    'Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet  Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You ',
}

export const TextArabic = Template.bind({})
TextArabic.args = {
  children:
    'مُرَاكُش  اموراكوش، «أرض الله») تسمى أيضًا بالمدينة الحمراء وعاصمة النخيل، هي ثالث أكبر مدينة في المملكة المغربية من ناحية عدد السكان. وهي عاصمة جهة مراكش آسفي. تقع مراكش على بعد 580 كم (360 ميل) جنوب شرق طنجة، 327 كم (203 ميل) جنوب شرق العاصمة المغربية الرباط، 239 كم (149 ميل) جنوب شرق الدار البيضاء، و 246 كم (153 ميل) شمال شرق أكادير.',
}
