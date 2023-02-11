import { ReviewModel } from '@api/posts/posts.type'
import { Avatar, Button, Flex, IconButton, Separator, Text } from '@components/core'
import { Dots } from '@components/icons'
import { useLiked } from '@hooks/useLiked'
import { LikeUI } from '../hoverCard'
import { REACTION_OBJ } from '../hoverCard/like'

const Review = ({ user, content }: ReviewModel) => {
  const { liked, handleLikeLikeButtons, handleLikeCoreButton } = useLiked()

  const { images, name, description } = user
  return (
    <Flex gap="xs" as="article">
      <Avatar image={images?.avatar} title={name} />
      <div className="review-content-container l_flow">
        <div className="review-content l_flow">
          <Flex justify="between">
            <div>
              <Text size="sm" weight="medium">
                {name}
              </Text>
              <Text size="xs" color="text" shade="7" truncate="multiline" numberLine={1}>
                {description}
              </Text>
            </div>
            <div>
              <IconButton size="sm" icon={<Dots />} title={`Open options for ${name}’s comment`} />
            </div>
          </Flex>
          <Text size="sm"> {content}</Text>
        </div>
        <Flex items="center" gap="sm">
          <LikeUI handleLike={handleLikeLikeButtons}>
            <Button
              style={{ color: liked ? REACTION_OBJ[liked].color : 'currentcolor' }}
              className="review-content--button"
              variant="text"
              color="secondary"
              size="sm"
              onClick={() => handleLikeCoreButton()}
            >
              {liked !== null && <img width={24} src={REACTION_OBJ[liked].image} alt={REACTION_OBJ[liked].label} />}
              {liked === null ? 'Like' : REACTION_OBJ[liked].label}
            </Button>
          </LikeUI>
          <Separator direction="vertical" />
          <Button className="review-content--button" variant="text" color="secondary" size="sm">
            Reply
          </Button>
        </Flex>
      </div>
    </Flex>
  )
}

export default Review
