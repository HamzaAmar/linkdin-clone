import { Avatar, Button, Flex, IconButton, Text } from '@components/core'
import { Likes } from '@components/dialog'
import { ArrowCircleRight, Dots, Message, Send } from '@components/icons'
import { useLiked } from '@hooks/useLiked'
import { useBoolean } from '@hooks/userBoolean'
import { Link } from 'react-router-dom'
import { LikeUI } from '../hoverCard'
import { REACTION_OBJ } from '../hoverCard/like'
import { Review, ReviewInput } from '../review'
import * as HoverCard from '@radix-ui/react-hover-card'
import type { UserCardProps } from './postCard.type'
import { UserPoster } from '..'

//  TODO MAKE IT DYNAMIC Comment Dynamic

const UserCardHover = ({ children, user }: any) => {
  return (
    <HoverCard.Root openDelay={200}>
      <HoverCard.Trigger asChild>{children}</HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content align="center" sideOffset={16} side="left" asChild>
          <UserPoster user={user}>{children}</UserPoster>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  )
}

const PostCard = ({ user, variant = 'none', children, reviews }: UserCardProps) => {
  const { liked, handleLikeLikeButtons, handleLikeCoreButton } = useLiked()
  const { state: showReview, handleTrue } = useBoolean(false)

  return (
    <article className="post-card l_box">
      <Flex as="header" gap="xs" className="post-card__header">
        <UserCardHover user={user}>
          <Link className="post-card--link" to={`in/${user.id}`}>
            <Avatar image={user.images?.avatar} title={user.name} />
          </Link>
        </UserCardHover>
        <div>
          <UserCardHover user={user}>
            <Link className="post-card--link" to={`in/${user.id}`}>
              <Text as="span" weight="medium" size="sm">
                {user.name}
              </Text>
            </Link>
          </UserCardHover>

          <Text truncate="multiline" numberLine={1} as="p" size="xs" color="text" shade="7">
            {user.description}
          </Text>
        </div>
        <IconButton icon={<Dots />} title="Open control menu" />
      </Flex>
      <div className="post-card__main">
        {children}
        <Flex justify="between">
          {/* <Button className="post-card--review-button" variant="link" color="secondary" size="xs">
            <AvatarGroup size="2xs">
              {REACTION_LIST.slice(3).map(({ slug, thumbnail, label }) => (
                <Avatar key={slug} image={thumbnail} name={label} />
              ))}
            </AvatarGroup>
            Kent and 239 others
          </Button> */}
          <Likes />
          <div>
            <Button className="post-card--review-button" variant="link" color="secondary" size="xs">
              13 comments
            </Button>
            <Button className="post-card--review-button" variant="link" color="secondary" size="xs">
              12 shares
            </Button>
          </div>
        </Flex>
      </div>
      <Flex className="post-card__footer" as="footer" flex="1" gap="xs">
        <LikeUI handleLike={handleLikeLikeButtons}>
          <Button
            style={{ color: liked ? REACTION_OBJ[liked].color : 'currentcolor' }}
            className="post-card--footer-button"
            fluid
            variant="text"
            color="secondary"
            onClick={() => {
              handleLikeCoreButton()
              handleTrue()
            }}
          >
            {liked !== null && <img width={24} src={REACTION_OBJ[liked].image} alt={REACTION_OBJ[liked].label} />}
            {liked === null ? 'Like' : REACTION_OBJ[liked].label}
          </Button>
        </LikeUI>
        <Button
          className="post-card--footer-button"
          fluid
          variant="text"
          color="secondary"
          icon={<Message width={24} />}
          onClick={handleTrue}
        >
          Comment
        </Button>
        <Button
          className="post-card--footer-button"
          fluid
          variant="text"
          color="secondary"
          icon={<ArrowCircleRight width={24} />}
        >
          Share
        </Button>
        <Button className="post-card--footer-button" fluid variant="text" color="secondary" icon={<Send width={24} />}>
          Send
        </Button>
      </Flex>
      {showReview && (
        <div className="l_flow">
          <ReviewInput
            user={{
              name: 'Hamza Miloud Amar',
              avatar: 'https://picsum.photos/id/157/150/150',
              description: 'Senior Front End Developer I Like to write Accessible and high performance website',
            }}
          />
          <div className="l_flow">
            {reviews != null ? reviews.map((review) => <Review key={review.id} {...review} />) : null}
          </div>
        </div>
      )}
    </article>
  )
}

export default PostCard
