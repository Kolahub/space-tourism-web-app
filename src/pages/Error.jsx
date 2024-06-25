// import React from 'react'
import HeaderTab from '../components/HeaderTab'
import { useRouteError } from 'react-router-dom'

function Error() {
  const error = useRouteError()

  let title = 'An Error Occurred!'
  let msg = 'Something went wrong'

  if(error.status === 500) {
    msg = error.data.message
  }

  if(error.status === 404) {
    title = 'Not found.'
    msg = 'Could not find resource or page.'
  }


  return (
    <>
    <HeaderTab />
    <section className="font-custom  text-center bg-[url('/home/background-home-mobile.jpg')]  md:bg-[url('/home/background-home-tablet.jpg')]  lg:bg-[url('/home/background-home-desktop.jpg')] pt-44  bg-cover h-screen">
    <h1 className="text-6xl text-white font-semibold">{title}</h1>
    <p className='text-2xl text-white'>{msg}</p>
   </section>
    </>
  )
}

export default Error