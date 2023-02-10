import { CSSProperties, useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Messages } from '..'

const Layout = () => {
  const headerRef = useRef<HTMLElement>(null)

  return (
    <div className="layout-container" style={{ '--header-height': headerRef.current?.clientHeight } as CSSProperties}>
      <Header ref={headerRef} />
      <main className="main l_center">
        <Outlet />
      </main>
      <Messages />
    </div>
  )
}

export default Layout
