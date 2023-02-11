import { classnames } from '@utils/classnames'
import type { SeparatorProps } from './separator.type'

const separator = ({ children, direction = 'horizontal', position }: SeparatorProps) => {
  const separatorClassname = classnames(`separator separator__${direction} separator__${position}`)

  return (
    <div {...separatorClassname}>{Boolean(children) && <span className="separator--content">{children}</span>}</div>
  )
}

export default separator
