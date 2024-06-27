// import React from 'react'
import { json, useLoaderData } from "react-router-dom"
import CrewContent from "../components/CrewContent"

function Crew() {
  const data = useLoaderData()

  return (
    <section className="font-custom bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-cover h-full pt-32 lg:pt-48 px-6 md:px-11 lg:pb-20 pb-24" id="Crew">
      <div className="max-w-5xl mx-auto">
      <p className="text-white text-2xl sm:text-3xl tracking-widest"><span className="font-bold text-gray-600 mr-3 tracking-widest">02</span>MEET YOUR CREW</p>
        <CrewContent data ={data.crew} />
      </div>
    </section>
  )
}

export default Crew

export async function Loader () {
  const res = await fetch('/assets/data.json')
  console.log(res)
  if(!res.ok) throw json({message: 'Failed to load destination data.'}, {status: 500})
  return res;
}