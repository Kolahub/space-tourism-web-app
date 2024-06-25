// import React from 'react'

import { json } from "react-router-dom"

function Technology() {
  return (
    <section className="bg-[url('/technology/background-technology-desktop.jpg')] bg-cover h-screen" id="Technology">
    </section>
  )
}

export default Technology

export async function Loader () {
  const res = await fetch('http://localhost:3000/technology')
  if(!res.ok) throw json({message: 'Failed to load destination data.'}, {status: 500})
    return res
}