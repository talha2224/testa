import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Laboratry from '../../../layout/Laboratory/Laboratory'  
const Lab = () => {
  return (
    <div className=' h-[100vh] md:overflow-y-hidden overflow-y-scroll'>
      <Navbar/>
      <Laboratry/>
    </div>
  )
}

export default Lab