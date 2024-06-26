// import React from 'react'
import { useEffect, useState } from "react";
import { json, useLoaderData } from "react-router-dom"
import TechnologyContent from "../components/TechnologyContent"


function Technology() {
  const data = useLoaderData()

  return (
    <section className="font-custom bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop bg-cover h-full pt-32 lg:pt-48 lg:pl-11 lg:pb-20 pb-24" id="Technology">
      <div className="max-w-7xl ml-auto">
      <p className="text-white text-2xl sm:text-3xl tracking-widest mb-6 pl-6 md:pl-14 lg:pl-0"><span className="font-bold text-gray-600 mr-3 tracking-widest">03</span>SPACE LAUNCH 101</p>
      <TechnologyContent data={data.technology} />
      </div>
    </section>
  )
}

export default Technology

export async function Loader () {
  const res = await fetch('/assets/data.json')
  console.log(res)
  if(!res.ok) throw json({message: 'Failed to load destination data.'}, {status: 500})
  return res;
}