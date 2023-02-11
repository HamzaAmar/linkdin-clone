import { createContext, useContext } from 'react'
import type { RadioGroupContextProps, RadioProviderProps } from './radio.type'

const RadioContext = createContext<RadioGroupContextProps>({} as RadioGroupContextProps)

function RadioProvider({ children, ...rest }: RadioProviderProps) {
  return <RadioContext.Provider value={rest}>{children}</RadioContext.Provider>
}

function useRadio() {
  const provider = useContext(RadioContext)
  if (!provider) {
    throw Error('Radio must be Wrapped in Radio Provider Context')
  }
  return provider
}

export { RadioProvider, useRadio }
