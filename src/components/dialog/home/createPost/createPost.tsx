import { getUsers } from '@api/users'
import { Avatar, Button, Flex, Heading, IconButton, Separator } from '@components/core'
import { Analytics, ArrowRight, Backpack, Cross, Dots, Earth, File, Message, Picture, Youtube } from '@components/icons'
import { useBoolean } from '@hooks/userBoolean'
import * as Dialog from '@radix-ui/react-dialog'

const user = getUsers()[0]

const CreatePost = () => {
  const { state, handleToggle, handleFalse } = useBoolean(false)

  return (
    <Dialog.Root open={state}>
      <Dialog.Trigger asChild>
        <Button
          className="create-post--button-header u_flex-1"
          onClick={handleToggle}
          size="sm"
          variant="outline"
          color="secondary"
          fluid
        >
          Start a Post
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="create-post-dialog--overlay">
          <Dialog.Content asChild>
            <section className="create-post-dialog--content l_box">
              <Flex items="center" className="create-post-dialog--header" as="header" justify="between">
                <Heading size="sm" weight="medium">
                  Create a post
                </Heading>
                <IconButton size="sm" onClick={handleFalse} icon={<Cross />} title="Dismiss" />
              </Flex>
              <Flex direction="column" items="start" className="create-post-dialog--main">
                <Flex gap="sm">
                  <Avatar image={user.images?.avatar} title={user.name} />
                  <div>
                    <Heading size="sm" weight="medium" as="h2">
                      {user.name}
                    </Heading>
                    <Button variant="outline" color="secondary" icon={<Earth width={16} />}>
                      Anyone <ArrowRight width={16} />
                    </Button>
                  </div>
                </Flex>

                <Button className="create-post-dialog--add-hash" variant="text">
                  Add a hash
                </Button>
              </Flex>
              <Flex items="center" gap="xs" className="create-post-dialog--footer">
                <IconButton icon={<Picture />} title="Add a Photos" />
                <IconButton icon={<Youtube />} title="Add a Photos" />
                <IconButton icon={<File />} title="Add a Photos" />
                <IconButton icon={<Backpack />} title="Add a Photos" />
                <IconButton icon={<Analytics />} title="Add a Photos" />
                <IconButton icon={<Dots />} title="Add a Photos" />
                <Separator direction="vertical" />
                <Button size="xs" icon={<Message width={16} />} variant="text" color="secondary">
                  Anyone
                </Button>
                <Button>Post</Button>
              </Flex>
            </section>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default CreatePost
