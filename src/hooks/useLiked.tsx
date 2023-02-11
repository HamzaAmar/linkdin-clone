import type { ReactionUnionSlug } from '@components/articles/hoverCard/like'
import { useState } from 'react'

export function useLiked() {
  const [liked, setLiked] = useState<ReactionUnionSlug | null>(null)
  function handleLikeLikeButtons(slug: ReactionUnionSlug) {
    setLiked(slug)
  }

  function handleLikeCoreButton() {
    setLiked((like) => (like === null ? 'like' : null))
  }

  return { liked, setLiked, handleLikeCoreButton, handleLikeLikeButtons }
}
