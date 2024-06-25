import HeaderTab from '../components/HeaderTab'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <>
    <HeaderTab />
    <Outlet />
    </>
  )
}

export default RootLayout