import { Footer } from '@components/common'
import { Notifications } from '@components/section'
import { Notification } from '@components/sidebar'

const notifications = () => {
  return (
    <div className="tree-column-container">
      <div>
        <Notification />
      </div>
      <div>
        <Notifications />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default notifications
