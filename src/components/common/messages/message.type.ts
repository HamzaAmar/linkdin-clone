import { UserModel } from '@api/users/users.type'

export interface MessageItemProps extends UserModel {
  handleOpen: (val: string) => void
}

export interface MessageChatItemProps {
  id: string
  handleClose: (val: string) => void
}
