// import React from 'react'
import { json, useLoaderData } from "react-router-dom"
import DestinationContent from "../components/DestinationContent"

function Destination() {
  const data = useLoaderData()
  
  return (
    <section className="font-custom bg-[url('/destination/background-destination-mobile.jpg')] md:bg-[url('/destination/background-destination-tablet.jpg')] lg:bg-[url('/destination/background-destination-desktop.jpg')] bg-cover lg:h-full pt-32 pb-24 lg:pt-48 px-6 md:px-11 lg:pb-20 overflow-x-hidden" id="Destination">
      <div className="max-w-5xl mx-auto">
        <p className="text-white text-2xl sm:text-3xl tracking-widest"><span className="font-bold text-gray-600 mr-3 tracking-widest">01</span>PICK YOUR DESTINATION</p>
      <DestinationContent data={data} />
      </div>
    </section>
  )
}

export default Destination

export async function Loader () {
  const res = await fetch('https://space-tourism-web-app-sigma.vercel.app/destinations')
  if(!res.ok) throw json({message: 'Failed to load destination data.'}, {status: 500})
  return res
}