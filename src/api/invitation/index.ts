import { getUserBySlug } from '../users'
import { INVITATIONS } from './invitation.data'
import type { Options, UserInvitationType } from './invitation.type'

export function getInvitationByUserSlug(slug: string, options: Options = {}) {
  const invitations = INVITATIONS.filter(({ to }) => slug === to).map(({ to, ...rest }) => rest)
  // const invitations = INVITATIONS.filter(({ to }) => slug === to).map(({ to, ...rest }) => rest)
  const { size } = options
  const invitationsNeeded = size && size >= invitations.length ? invitations : invitations.slice(0, size)
  const invitationList = invitationsNeeded.reduce<UserInvitationType[]>((arr, invitation) => {
    const { from, ...rest } = invitation
    const user = getUserBySlug(invitation.from)
    const invitationUser = {
      ...rest,
      user,
    }
    return {
      ...arr,
      invitationUser,
    }
  }, [])
  return invitationList
}
