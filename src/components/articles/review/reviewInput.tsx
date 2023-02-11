import { Avatar, Flex, IconButton } from '@components/core'
import { Face, Picture } from '@components/icons'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import type { ReviewInputProps } from './review.type'

const ReviewInput = (props: ReviewInputProps) => {
  const [value, setValue] = useState('')
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setValue(e.target.value)
  }

  useEffect(() => {
    if (!textAreaRef.current) throw Error('divRef is not assigned')
    textAreaRef.current.style.height = 'auto'
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px'
  }, [value])

  useEffect(() => {
    if (!textAreaRef.current) throw Error('divRef is not assigned')
    textAreaRef.current.focus()
  }, [])

  return (
    <Flex gap="sm" as="article">
      <Avatar size="sm" image="https://picsum.photos/id/123/100/100" title="hello" />
      <Flex items="center" wrap className="review-input--container">
        <div className="review-input--text-container u_flex-1">
          <label htmlFor="review-input" className="review-input--label">
            <textarea
              ref={textAreaRef}
              name="review"
              onChange={handleChange}
              className="review-input--text-field"
              id="review-input"
              rows={1}
              placeholder="Add a comments..."
            >
              {value}
            </textarea>
          </label>
        </div>
        <Flex className="review-input--button-container">
          <IconButton size="sm" icon={<Face />} title="Open Emoji Keyboard" />
          <IconButton size="sm" icon={<Picture />} title="Add a photo" />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ReviewInput
