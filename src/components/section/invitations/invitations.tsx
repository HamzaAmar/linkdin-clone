import { Invitation } from '@components/articles'
import { Button, Flex, Text } from '@components/core'
import { useBoolean } from '@hooks/userBoolean'
import { LoaderProps } from '@routes/pages/network'
import { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const USERS_INVITATION = {
  name: 'Hamza Miloud Amar',
  avatar: 'https://picsum.photos/id/157/150/150',
  slug: 'hamza-miloud-amar-463b24167',
  description: 'Senior Front End Developer I Like to write Accessible and high performance website',
}

const getUserInvitation = Array(6).fill(USERS_INVITATION)

const InvitationComp = ({ maxInvitation = 3 }) => {
  // const { invitations } = useLoaderData() as LoaderProps
  const { state, handleToggle } = useBoolean(false)
  console.log(state ? maxInvitation : getUserInvitation.length)

  const listInvitation = getUserInvitation.slice(0, !state ? maxInvitation : getUserInvitation.length)
  return (
    <section className="invitations-container l_box">
      <Flex className="invitations--header" as="header" justify="between">
        <Text>Invitations</Text>
        <Button variant="text" size="sm" color="secondary">
          See all 6
        </Button>
      </Flex>
      <ul className="invitations--list">
        {listInvitation.map(({ slug, ...rest }, index) => (
          <li key={slug + index}>
            <Link to="">
              <Invitation {...rest} />
            </Link>
          </li>
        ))}
      </ul>
      <footer>
        <Button onClick={handleToggle} fluid color="primary" variant="text">
          Show {state ? 'Fewer' : 'More'}
        </Button>
      </footer>
    </section>
  )
}

export default InvitationComp
