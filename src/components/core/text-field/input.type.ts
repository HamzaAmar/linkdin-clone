import type { ComponentPropsWithRef, ReactNode } from 'react'

type Variant = 'filled' | 'outline'
type Corner = 'sharp' | 'sm' | 'md' | 'lg'
type Status = 'danger' | 'success' | 'warning' | 'primary' | 'text'

export interface InputProps extends ComponentPropsWithRef<'input'> {
  variant?: Variant
  corner?: Corner
}
export interface TextAreaProps extends ComponentPropsWithRef<'textarea'> {
  variant?: Variant
  corner?: Corner
}

interface SharedProps {
  required?: boolean
  disabled?: boolean
  value?: any
  maxLength?: number | undefined
  children: ReactNode
  status?: Status
  id: string
}

export interface TextFormFieldProps extends SharedProps {
  label: string
  message: string
  trailingIcon?: ReactNode
  leadingIcon?: ReactNode
}

export type StatusType = Record<Status, ReactNode | string>

export type TextFieldGroupContextProps = Omit<SharedProps, 'children'>
export type TextFieldProviderProps = SharedProps
