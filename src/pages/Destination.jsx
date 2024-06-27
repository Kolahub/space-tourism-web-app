// import React from 'react'
import { json, useLoaderData } from "react-router-dom"
import DestinationContent from "../components/DestinationContent"
// import data from '../data.json'

function Destination() {
  const data = useLoaderData()
  
  return (
    <section className="font-custom bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop  bg-cover lg:h-full pt-32 pb-24 lg:pt-48 px-6 md:px-11 lg:pb-20 overflow-x-hidden" id="Destination">
      <div className="max-w-5xl mx-auto">
        <p className="text-white text-2xl sm:text-3xl tracking-widest"><span className="font-bold text-gray-600 mr-3 tracking-widest">01</span>PICK YOUR DESTINATION</p>
      <DestinationContent data={data.destinations} />
      </div>
    </section>
  )
}

export default Destination

export async function Loader () {
  const res = await fetch('/assets/data.json')
  console.log(res)
  if(!res.ok) throw json({message: 'Failed to load destination data.'}, {status: 500})
  return res;
}