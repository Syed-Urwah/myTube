import React from 'react'
import Navbar from '../components/Navbar'
import Vidoes from '../components/Vidoes'

export default function Subscribe() {
  return (
    <main id="main" className="flex">
        <Navbar display="block"/>
        <Vidoes type="sub" />
      </main>
  )
}
