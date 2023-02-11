import { Footer } from '@components/common'
import { Button, Flex, Input, Text } from '@components/core'
import { Chevron } from '@components/icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MANAGE_NETWORK } from './manageNetwork.data'
import type { ManageNetworkProps } from './manageNetwork.type'

function ManageNetworkItem({ name, link, number, icon }: ManageNetworkProps) {
  return (
    <li className="manage-network__item">
      <Flex justify="between" as={Link} to={link}>
        <Flex gap="sm">
          {icon}
          <Text>{name}</Text>
        </Flex>
        <span>{number}</span>
      </Flex>
    </li>
  )
}

function ManageNetwork() {
  const [show, setShow] = useState(true)
  const { name, icon, number, link } = MANAGE_NETWORK[0]

  function handleToggle() {
    setShow((val) => !val)
  }
  return (
    <div className="manage-network l_box sticky--section">
      <section className=" l_flow">
        <header>
          <Text>Manage my network</Text>
        </header>
        <nav>
          <ul>
            <ManageNetworkItem name={name} icon={icon} number={number} link={link} />
            {show
              ? MANAGE_NETWORK.slice(1).map((network) => (
                  <ManageNetworkItem
                    key={network.link}
                    name={network.name}
                    icon={network.icon}
                    number={network.number}
                    link={network.link}
                  />
                ))
              : null}
          </ul>
        </nav>
        <footer>
          <Button
            size="sm"
            variant="text"
            color="secondary"
            icon={<Chevron direction={show ? 'up' : 'down'} width={16} />}
            onClick={handleToggle}
          >
            Show {show ? 'Less' : 'More'}
          </Button>
        </footer>
      </section>
      <Flex items="center" gap="xs" as="section" direction="column" className="personal-contact">
        <Text color="text" shade="3">
          Add personal contacts
        </Text>
        <Text size="sm" color="text" shade="7">
          We’ll periodically import and store your contacts to help you and others connect. You choose who to connect to
          and who to invite. <Link to="">Learn more</Link>
        </Text>
        <Button variant="outline">Continue</Button>
        <Button variant="link" size="xs" color="secondary" as={Link} to="">
          More Options
        </Button>
      </Flex>
      <Footer />
    </div>
  )
}

export default ManageNetwork
