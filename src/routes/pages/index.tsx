import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import Home from './home'
import Networks, { loader as NetworkLoader } from './network'
import Jobs from './jobs'
import Messages from './messages'
import Notifications from './notifications'
import Profile from './profile'
import FourOFour from '../errors/404'
import { Layout } from '@components/common'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/feed" replace /> },
      {
        path: '/feed',
        element: <Home />,
      },
      {
        path: '/networks',
        element: <Networks />,
        loader: NetworkLoader,
      },
      {
        path: '/jobs',
        element: <Jobs />,
      },
      {
        path: '/messages',
        element: <Messages />,
      },
      {
        path: '/notifications',
        element: <Notifications />,
      },
      {
        path: '/in/:slug',
        element: <Profile />,
      },
    ],
  },
  {
    path: '*',
    element: <FourOFour />,
  },
])
function LinkdinRoutes() {
  return <RouterProvider router={router} />
}

export default LinkdinRoutes
