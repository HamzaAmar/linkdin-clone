import { useEffect, useRef } from 'react'
import { Avatar, Button, Flex, Heading, IconButton, Radio, RadioGroup, Text } from '@components/core'
import { CreatePost } from '@components/dialog'
import { Calender, Cross, Picture, Template, Youtube } from '@components/icons'
import { useBoolean } from '@hooks/userBoolean'
import type { ImageDialogProps, VideoDialogProps, EventDialogProps } from './header.type'
import * as Dialogs from '@radix-ui/react-dialog'
import { Form } from 'react-router-dom'
import { USERS_LIST } from '@api/users/users.data'

const ImageDialog = (props: ImageDialogProps) => {
  const { state, handleToggle, handleFalse } = useBoolean()
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!fileInputRef) throw Error('Please assign it To the file Input')
    if (state) fileInputRef.current?.click()
    console.log('Mounting', state)
    return () => console.log('Unmounting', state)
  }, [state])

  return (
    <Dialogs.Root open={state} onOpenChange={handleToggle}>
      <Dialogs.Trigger>
        <Button
          className="home-header--button"
          variant="text"
          color="secondary"
          icon={<Picture fill="var(--color-primary-4)" width={24} />}
        >
          Photo
        </Button>
      </Dialogs.Trigger>
      <Dialogs.Portal>
        <Dialogs.Overlay className="dialog--overlay">
          <Dialogs.Content asChild className="dialog--content">
            <section>
              <Flex as="header" items="center" justify="between">
                <Heading size="sm" weight="normal">
                  Edit your photo
                </Heading>

                <IconButton icon={<Cross />} onClick={handleFalse} title="Dismiss" size="sm" />
              </Flex>
              <Flex items="center" justify="center" className="post-creation--dialog-content">
                <label htmlFor="image-file">
                  <Button variant="text" onClick={() => fileInputRef.current?.click()}>
                    Select images to share
                  </Button>
                  <input ref={fileInputRef} type="file" id="image-file" className="u_visually-hidden" />
                </label>
              </Flex>
              <Flex gap="xs" justify="end" as="footer">
                <Button onClick={handleFalse} variant="outline">
                  Cancel
                </Button>
                <Button disabled>Done</Button>
              </Flex>
            </section>
          </Dialogs.Content>
        </Dialogs.Overlay>
      </Dialogs.Portal>
    </Dialogs.Root>
  )
}
const VideoDialog = (props: VideoDialogProps) => {
  const { state, handleToggle, handleFalse } = useBoolean()
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!fileInputRef) throw Error('Please assign it To the file Input')
    if (state) fileInputRef.current?.click()
    console.log('Mounting', state)
    return () => console.log('Unmounting', state)
  }, [state])
  return (
    <Dialogs.Root open={state} onOpenChange={handleToggle}>
      <Dialogs.Trigger>
        <Button
          className="home-header--button"
          variant="text"
          color="secondary"
          icon={<Youtube fill="var(--color-success-6)" width={24} />}
        >
          Video
        </Button>
      </Dialogs.Trigger>
      <Dialogs.Portal>
        <Dialogs.Overlay className="dialog--overlay">
          <Dialogs.Content asChild className="dialog--content">
            <section>
              <Flex as="header" items="center" justify="between">
                <Heading size="sm" weight="normal">
                  Edit your photo
                </Heading>
                <IconButton icon={<Cross />} onClick={handleFalse} title="Dismiss" size="sm" />
              </Flex>
              <Flex items="center" justify="center" className="post-creation--dialog-content">
                <label htmlFor="image-file">
                  <Button variant="text" onClick={() => fileInputRef.current?.click()}>
                    Select video to share
                  </Button>
                  <input ref={fileInputRef} type="file" id="image-file" className="u_visually-hidden" />
                </label>
              </Flex>
              <Flex gap="xs" justify="end" as="footer">
                <Button onClick={handleFalse} variant="outline">
                  Cancel
                </Button>
                <Button disabled>Done</Button>
              </Flex>
            </section>
          </Dialogs.Content>
        </Dialogs.Overlay>
      </Dialogs.Portal>
    </Dialogs.Root>
  )
}
const EventDialog = (props: EventDialogProps) => {
  const { state, handleToggle, handleFalse } = useBoolean()

  return (
    <Dialogs.Root open={state} onOpenChange={handleToggle}>
      <Dialogs.Trigger>
        <Button
          className="home-header--button"
          variant="text"
          color="secondary"
          icon={<Calender fill="var(--color-warning-7)" width={24} />}
        >
          Event
        </Button>
      </Dialogs.Trigger>
      <Dialogs.Portal>
        <Dialogs.Overlay className="dialog--overlay">
          <Dialogs.Content asChild className="dialog--content">
            <section>
              <Flex as="header" items="center" justify="between">
                <Heading size="xs" weight="medium">
                  Create an event
                </Heading>

                <IconButton icon={<Cross />} onClick={handleFalse} title="Dismiss" size="sm" />
              </Flex>
              <div className="post-creation--dialog-content l_flow">
                <Flex
                  as="label"
                  direction="column"
                  items="center"
                  justify="center"
                  htmlFor="uploadImage"
                  className="post-dialog--upload-image-label"
                >
                  <img src="https://static-exp1.licdn.com/sc/h/3h0vrtch1zepjr4p54aja8i9x" alt="upload" />
                  <Text weight="medium">Upload cover image</Text>
                  <Text color="text" size="sm">
                    Minimum width 480 pixels, 16:9 recommended
                  </Text>
                  <input type="file" name="image-file" id="uploadImage" className="u_visually-hidden" />
                </Flex>
                <Form id="create-event" className="post-creation--dialog-content">
                  <RadioGroup label="Event type" color="success" name="event">
                    <Radio label="Online" checked />
                    <Radio label="In Person" />
                  </RadioGroup>
                </Form>
              </div>
              <Flex justify="end" as="footer">
                <Button type="submit" form="create-event" id="create-event" disabled>
                  Next
                </Button>
              </Flex>
            </section>
          </Dialogs.Content>
        </Dialogs.Overlay>
      </Dialogs.Portal>
    </Dialogs.Root>
  )
}

const user = USERS_LIST[0]

const Header = () => {
  return (
    <section className="home-header l_box l_flow">
      <Flex>
        <Avatar image={user.images?.avatar} title="Jello" />
        <CreatePost />
      </Flex>

      <Flex justify="between" className="home-header--footer" as="footer">
        <ImageDialog />
        <VideoDialog />
        <EventDialog />
        <Button
          className="home-header--button"
          variant="text"
          color="secondary"
          icon={<Template fill="var(--color-danger-6)" width={24} />}
        >
          Write article
        </Button>
      </Flex>
    </section>
  )
}

export default Header
