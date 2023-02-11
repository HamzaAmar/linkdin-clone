import { createContext, useContext } from 'react'
import type { TextFieldGroupContextProps, TextFieldProviderProps } from './input.type'

const TextFieldContext = createContext<TextFieldGroupContextProps>({} as TextFieldGroupContextProps)

function TextFieldProvider({ children, ...rest }: TextFieldProviderProps) {
  return <TextFieldContext.Provider value={rest}>{children}</TextFieldContext.Provider>
}

function useTextField() {
  const provider = useContext(TextFieldContext)
  if (!provider) {
    throw Error('TextField must be Wrapped in TextField Provider Context')
  }
  return provider
}

export { TextFieldProvider, useTextField }
