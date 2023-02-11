import { Flex, Heading, IconButton, Text } from '@components/core'
import { Cross, Grid, Plus, Triangle } from '@components/icons'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BUSINESS_LIST, WORK_DATA } from './workDialog.data'

const WorkDialog = () => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpen}>
      <Dialog.Trigger asChild>
        <li className="header--list-item">
          <button
            onClick={handleClose}
            type="button"
            className="header--button u_direction-column u_items-center u_justify-between"
          >
            <Grid width="24" />
            <Flex as={Text} items="center" gap="2xs" size="xs" className="header--item-text">
              Work
              <Triangle width={16} />
            </Flex>
          </button>
        </li>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay onClick={handleClose} className="dialog-work__overlay">
          <Dialog.Content asChild>
            <section className="dialog-work__content l_flow">
              <Flex items="center" as="header" justify="between">
                <Heading weight="medium" size="sm">
                  Work
                </Heading>
                <Dialog.Close asChild>
                  <IconButton size="lg" onClick={handleClose} icon={<Cross width="24" />} title="close Button" />
                </Dialog.Close>
              </Flex>
              <article className="dialog-work--section l_box">
                <header className="dialog-work--section-header">
                  <Heading as="h2" size="xs" weight="medium">
                    Visit More LinkedIn Products
                  </Heading>
                </header>
                <nav>
                  <ul className="dialog-work--list l_cluster">
                    {WORK_DATA.map(({ id, to, icon, text }) => (
                      <li key={id}>
                        <Link className="dialog-work--icon-link" to={to}>
                          {icon}
                          <Text color="text" shade="6" size="xs">
                            {text}
                          </Text>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </article>

              <article className="dialog-work--section l_box">
                <header className="dialog-work--section-header">
                  <Heading as="h2" size="xs" weight="medium">
                    LinkedIn Business Services
                  </Heading>
                </header>
                <ul className="dialog-work--list dialog-work--list-business">
                  {BUSINESS_LIST.map(({ id, to, title, description }) => (
                    <li key={id}>
                      <Link className="dialog-work--link " to={to}>
                        <Text size="sm" weight="medium">
                          {title}
                        </Text>
                        <Text color="text" shade="6" size="xs">
                          {description}
                        </Text>
                      </Link>
                    </li>
                  ))}
                </ul>
                <footer>
                  <Flex as={Link} gap="xs" className="dialog-work--link " to="">
                    <Text size="sm" weight="medium">
                      Create a Company Page
                    </Text>
                    <Plus width={16} />
                  </Flex>
                </footer>
              </article>
            </section>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default WorkDialog
