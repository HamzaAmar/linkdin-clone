import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Heading from '.'

export default {
  title: 'COMPONENTS/CORE/Heading',
  component: Heading,
  args: {
    children: 'Nice To Meet You',
  },
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const ExtraSmallHeading = Template.bind({})
ExtraSmallHeading.args = {
  size: 'xs',
}

export const SmallHeading = Template.bind({})
SmallHeading.args = {
  size: 'sm',
}

export const MediumHeading = Template.bind({})
MediumHeading.args = {
  size: 'md',
}

export const ExtraLargeHeading = Template.bind({})
ExtraLargeHeading.args = {
  size: 'xl',
}

export const Extra2LargeHeading = Template.bind({})
Extra2LargeHeading.args = {
  size: 'xxl',
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

export const HeadingArabic = Template.bind({})
HeadingArabic.args = {
  children:
    'مُرَاكُش  اموراكوش، «أرض الله») تسمى أيضًا بالمدينة الحمراء وعاصمة النخيل، هي ثالث أكبر مدينة في المملكة المغربية من ناحية عدد السكان. وهي عاصمة جهة مراكش آسفي. تقع مراكش على بعد 580 كم (360 ميل) جنوب شرق طنجة، 327 كم (203 ميل) جنوب شرق العاصمة المغربية الرباط، 239 كم (149 ميل) جنوب شرق الدار البيضاء، و 246 كم (153 ميل) شمال شرق أكادير.',
}
