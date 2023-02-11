import { UserCard } from '@components/articles'
import { Button, Flex, Text } from '@components/core'
import React from 'react'

const USERS_INVITATION = {
  name: 'Hamza Miloud Amar',
  avatar: 'https://picsum.photos/id/157/150/150',
  slug: 'hamza-miloud-amar-463b24167',
  description: 'Senior Front End Developer I Like to write Accessible and high performance website',
  variant: 'people',
}

// TODO MAKE FAKE API FOR THEM AND GET DATA WITH DATA LOADER
const getUsersRecommended = Array(6).fill(USERS_INVITATION)
const getEvent = Array(6).fill({ ...USERS_INVITATION, variant: 'event' })
const getPages = Array(6).fill({ ...USERS_INVITATION, variant: 'pages' })
const getNewsletter = Array(6).fill({ ...USERS_INVITATION, variant: 'newsletter' })

const userInvitation = () => {
  return (
    <div className="l_box l_flow">
      <section>
        <Flex justify="between" className="user-invitation--section-header">
          <Text>Recommended for you</Text>
          <Button color="secondary" size="sm" variant="text">
            See All
          </Button>
        </Flex>
        <div className="user-invitation--list">
          {getUsersRecommended.map(({ slug, ...rest }) => (
            <UserCard key={slug} {...rest} />
          ))}
        </div>
      </section>
      <section>
        <Flex justify="between" className="user-invitation--section-header">
          <Text>Recommended for you</Text>
          <Button color="secondary" size="sm" variant="text">
            See All
          </Button>
        </Flex>
        <div className="user-invitation--list">
          {getEvent.map(({ slug, ...rest }) => (
            <UserCard key={slug} {...rest} />
          ))}
        </div>
      </section>
      <section>
        <Flex justify="between" className="user-invitation--section-header">
          <Text>Recommended for you</Text>
          <Button color="secondary" size="sm" variant="text">
            See All
          </Button>
        </Flex>
        <div className="user-invitation--list">
          {getPages.map(({ slug, ...rest }) => (
            <UserCard key={slug} {...rest} />
          ))}
        </div>
      </section>
      <section>
        <Flex justify="between" className="user-invitation--section-header">
          <Text>Recommended for you</Text>
          <Button color="secondary" size="sm" variant="text">
            See All
          </Button>
        </Flex>
        <div className="user-invitation--list">
          {getNewsletter.map(({ slug, ...rest }) => (
            <UserCard key={slug} {...rest} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default userInvitation
