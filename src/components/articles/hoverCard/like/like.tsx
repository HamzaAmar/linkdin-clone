import * as HoverCard from '@radix-ui/react-hover-card'
import { useBoolean } from '@hooks/userBoolean'
import { Flex } from '@components/core'

import { REACTION_LIST } from './like.data'

import type { LikeProps } from './like.type'

const LikeUI = ({ children, handleLike }: LikeProps) => {
  const { state, setState, handleToggle } = useBoolean(false)

  return (
    <HoverCard.Root open={state} onOpenChange={handleToggle} openDelay={100}>
      <HoverCard.Trigger asChild>{children}</HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          align="start"
          alignOffset={-40}
          side="top"
          sideOffset={10}
          className="post-card--like-card l_box"
        >
          <Flex gap="2xs" flex="1" className="post-card--buttons-container">
            {REACTION_LIST.map(({ slug, image, label }) => (
              <button
                onClick={() => {
                  handleLike(slug)
                  setState(false)
                }}
                className="post-card--footer-like-buttons"
                key={slug}
              >
                <img className="post-card--footer-like-image" width="35" src={image} alt={label} />
              </button>
            ))}
          </Flex>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  )
}

export default LikeUI
