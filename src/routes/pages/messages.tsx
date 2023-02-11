import { Footer } from '@components/common'
import { MessageList } from '@components/section'
import React from 'react'

const messages = () => {
  return (
    <>
      <MessageList />
      <div>
        <Footer />
      </div>
    </>
  )
}

export default messages
