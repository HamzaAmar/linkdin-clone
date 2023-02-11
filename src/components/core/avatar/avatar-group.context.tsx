import { createContext, useContext } from 'react'
import type { AvatarGroupContextProps, AvatarProviderProps } from './avatar.type'

const AvatarGroupContext = createContext<AvatarGroupContextProps>({} as AvatarGroupContextProps)

function AvatarProvider({ children, ...rest }: AvatarProviderProps) {
  return <AvatarGroupContext.Provider value={rest}>{children}</AvatarGroupContext.Provider>
}

function useAvatar() {
  return useContext(AvatarGroupContext)
}

export { AvatarProvider, useAvatar }
