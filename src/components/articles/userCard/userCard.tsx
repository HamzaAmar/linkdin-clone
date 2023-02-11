import { Avatar, Button, Flex, IconButton, Text } from '@components/core'
import { Cross } from '@components/icons'
import { USER_CARD_VARIANTS_LABEL } from './user-card.data'
import type { UserCardProps } from './userCard.type'

const postCard = ({ children, variant = 'people' }: UserCardProps) => {
  return (
    <article className="user-card l_box l_flow">
      <Flex className="my-card__header" as="header" direction="column" items="center">
        <div className="user-card__hero">
          <img height={80} className="user-card__hero-image" src="https://picsum.photos/id/132/300/500" alt="" />
          <IconButton
            size="sm"
            className="user-card__close"
            icon={<Cross width={16} />}
            title="remove Card From the list"
            highlight
          />
        </div>
        {variant !== 'event' && (
          <Avatar
            image="https://media-exp1.licdn.com/dms/image/D4D35AQEosQEp5Z97VA/profile-framedphoto-shrink_100_100/0/1636288672318?e=1664719200&v=beta&t=ZySliqNQCXCR7eY53o8wmzJHFFTFO2t2W-JRAd0Dhjk"
            title="Hamza miloud Amar"
            className="my-card--avatar"
            size="lg"
            corner={variant === 'page' ? 'sharp' : 'circle'}
          />
        )}
        <Text truncate="multiline" numberLine={2} weight="bold">
          Hamza Miloud Amar
        </Text>
        <Text truncate="multiline" numberLine={2} size="sm" color="text" shade="7">
          Senior Front End Developer I Like to write Accessible and high performance website
        </Text>
      </Flex>
      <div>{children}</div>
      <footer>
        <Button fluid variant="outline">
          {USER_CARD_VARIANTS_LABEL[variant]}
        </Button>
      </footer>
    </article>
  )
}

export default postCard
