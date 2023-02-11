import { getInvitationByUserSlug } from '@api/invitation'
import { UserInvitationType } from '@api/invitation/invitation.type'
import { Invitations, UsersInvitation } from '@components/section'
import { ManageNetwork } from '@components/sidebar'

export interface LoaderProps {
  invitations: UserInvitationType[]
}

export async function loader() {
  const invitations = await getInvitationByUserSlug('hamza-miloud-amar-463b24167')
  return { invitations }
}

const Networks = () => {
  return (
    <div className="two-column-container">
      <ManageNetwork />
      <div className="l_flow">
        <Invitations />
        <UsersInvitation />
      </div>
    </div>
  )
}

export default Networks
