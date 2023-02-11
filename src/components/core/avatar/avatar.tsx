import { classnames } from '@utils/classnames'
import { useBoolean } from '@hooks/userBoolean'

import { AvatarProvider, useAvatar } from './avatar-group.context'
import type { AvatarBadgeProps, AvatarProps, AvatarProviderProps } from './avatar.type'

import { Badge } from '..'
/*
==================================================================================================
  Avatar Group Section
==================================================================================================
*/

const Group = ({ children, gap = 'md', ...rest }: AvatarProviderProps) => {
  return (
    <div className={`avatar-group avatar-group__${gap}`}>
      <AvatarProvider {...rest}>{children}</AvatarProvider>
    </div>
  )
}

/*
==================================================================================================
  Avatar Badge Section
==================================================================================================
*/

export const BadgeComp = ({ position = 'start-start', ...rest }: AvatarBadgeProps) => {
  return (
    <span className={`avatar-badge avatar-badge__${position}`}>
      <Badge {...rest} />
    </span>
  )
}

/*
==================================================================================================
  Avatar Section
==================================================================================================
*/

const Avatar = (props: AvatarProps) => {
  const context = useAvatar()
  const { state: error, handleTrue } = useBoolean()

  const {
    title,
    size = context.size ?? 'md',
    color = context.color ?? 'primary',
    corner = context.corner ?? 'circle',
    image,
    className,
    children,
  } = props
  const classNameAvatar = classnames(`avatar-wrapper avatar__${size} u_radius__${corner}`, {
    [className!]: Boolean(className),
    [`u_${color}`]: Boolean(!image),
  })
  return (
    <div {...classNameAvatar}>
      {image && !error ? (
        <img alt={title} onError={handleTrue} src={image} className="avatar" />
      ) : (
        <div className="avatar--fallback u_center">
          <svg viewBox="0 0 128 128">
            <path fill="#e7e2dc" d="M0 0h128v128H0z" />
            <path fill="#9db3c8" d="M48 16h64v112H48z" />
            <path fill="#788fa5" d="M16 80h32v48H16z" />
            <path fill="#56687a" d="M48 80h32v48H48z" />
          </svg>
        </div>
      )}
      {children}
    </div>
  )
}

Avatar.Badge = BadgeComp
Avatar.Group = Group

export default Avatar
