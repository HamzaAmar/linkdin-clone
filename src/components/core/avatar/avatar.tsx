import { classnames } from '@utils/classnames'

import { AvatarProps } from './avatar.type'

const avatar = ({ size = 'md', name, color = 'primary', image, radius = 'round', className }: AvatarProps) => {
  const classNameAvatar = classnames(`avatar-wrapper avatar__${size} u_radius__${radius}`, {
    [className!]: Boolean(className),
    [`u_${color}`]: Boolean(!image),
  })
  return (
    <div {...classNameAvatar}>
      {image ? (
        <img alt={name} src={image} className="avatar" />
      ) : (
        <div className="avatar--fallback u_center">{name[0].toUpperCase()}</div>
      )}
    </div>
  )
}

export default avatar
