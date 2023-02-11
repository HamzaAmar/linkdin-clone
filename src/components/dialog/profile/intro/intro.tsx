import { Button, Flex, Heading, IconButton, Text } from '@components/core'
import { Cross, Pencil } from '@components/icons'
import { useBoolean } from '@hooks/userBoolean'
import * as Dialog from '@radix-ui/react-dialog'

const Intro = () => {
  const { state, handleToggle, handleFalse } = useBoolean(false)
  return (
    <Dialog.Root open={state}>
      <Dialog.Trigger asChild>
        <IconButton icon={<Pencil />} onClick={handleToggle} title="Add a Photos" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="intro-dialog--overlay">
          <Dialog.Content asChild>
            <Flex as="aside" direction="column" className="intro-dialog l_box">
              <Flex items="center" className="intro-dialog--header" as="header" justify="between">
                <Heading size="sm" weight="medium">
                  Edit intro
                </Heading>
                <IconButton size="sm" onClick={handleFalse} icon={<Cross />} title="Dismiss" />
              </Flex>
              <div className="intro-dialog--main u_flex-1">
                <Text size="xs" color="text" shade="7">
                  * Indicates required
                </Text>
              </div>
              <Flex items="center" className="intro-dialog--footer" as="footer" justify="end">
                <Button>Save</Button>
              </Flex>
            </Flex>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Intro
