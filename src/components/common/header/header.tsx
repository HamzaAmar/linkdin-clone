import { Avatar, Button, Flex, Heading, Separator, Text } from '@components/core'
import { Link, NavLink } from 'react-router-dom'
import { NAV_MENU } from './header.data'
import type { HeaderProps } from './header.type'
import { Linkdin, Square, Triangle } from '@components/icons'
import { WorkDialog } from '@components/dialog'
import { forwardRef } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { USERS_LIST } from '@api/users/users.data'

const UserMenuButton = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button type="button" className="header--button u_direction-column u_items-center">
          <Avatar size="xs" image={USERS_LIST[0].images?.avatar} title={USERS_LIST[0].name} />
          <Flex as={Text} items="center" gap="2xs" size="xs" className="header--item-text">
            Me
            <Triangle width={16} />
          </Flex>
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="start" sideOffset={10} className="menu-button--profile l_box">
          <DropdownMenu.Item>
            <Flex gap="sm">
              <Avatar title={USERS_LIST[0].name} image={USERS_LIST[0].images?.avatar} />
              <Link to="in/hamza-miloud-amar-463b24167">
                <Heading color="text" size="xs">
                  Hamza Miloud amar
                </Heading>
                <Text size="sm">
                  Senior Front End Developer I Like to write Accessible , Design System and high performance website
                </Text>
              </Link>
            </Flex>
            <Button fluid size="xs" variant="outline">
              View Profile
            </Button>
          </DropdownMenu.Item>
          <DropdownMenu.Separator asChild>
            <Separator />
          </DropdownMenu.Separator>
          <Heading size="xs">Account</Heading>
          <DropdownMenu.Item>
            <Square width={16} /> Try Premium for free
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Text size="sm" color="text" shade="7">
              Settings & Privacy
            </Text>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Text size="sm" color="text" shade="7">
              Help
            </Text>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Text size="sm" color="text" shade="7">
              Language
            </Text>
          </DropdownMenu.Item>
          <DropdownMenu.Separator asChild>
            <Separator />
          </DropdownMenu.Separator>
          <Heading size="xs">Manage</Heading>
          <DropdownMenu.Item>
            <Text size="sm" color="text" shade="7">
              Posts & Activity
            </Text>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Text size="sm" color="text" shade="7">
              Job Posting Account
            </Text>
          </DropdownMenu.Item>
          <DropdownMenu.Separator asChild>
            <Separator />
          </DropdownMenu.Separator>
          <DropdownMenu.Item>
            <Text size="sm" color="text" shade="7">
              Sign Out
            </Text>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

const header = forwardRef<HTMLElement, HeaderProps>((props, ref) => {
  return (
    <header ref={ref} id="#header" className="header">
      <Flex className="header--content l_center" justify="between" items="center">
        <Linkdin fill="var(--color-primary-6)" width="40" />
        <nav>
          <Flex gap="sm" items="center">
            <Flex as="ul" gap="sm">
              {NAV_MENU.map(({ id, title, icon, href }) => (
                <li key={id}>
                  <NavLink className="header--item u_direction-column u_items-center" to={href}>
                    {({ isActive }) => {
                      return (
                        <>
                          {icon(isActive)}
                          <Text size="xs" className="header--item-text">
                            {title}
                          </Text>
                        </>
                      )
                    }}
                  </NavLink>
                </li>
              ))}

              <li>
                <UserMenuButton />
              </li>
              <WorkDialog />
            </Flex>
            <Text className="hide--mobile" size="xs" align="center" decoration="underline">
              <Link style={{ color: '#915907' }} to="#">
                Try Premium for free
              </Link>
            </Text>
          </Flex>
        </nav>
      </Flex>
    </header>
  )
})

export default header
