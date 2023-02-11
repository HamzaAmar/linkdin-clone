import { UserModel } from '@api/users/users.type'

export interface InvitationModel {
  from: string
  to: string
  message?: string
}

export interface Options {
  size?: number
}

export interface UserInvitationType {
  user: UserModel
  message?: string
  slug: string
}
