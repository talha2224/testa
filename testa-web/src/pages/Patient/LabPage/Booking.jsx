import React from 'react'
import BookTest from '../../../layout/Laboratory/Booking/BookTest'
import Navbar from '../../../components/Navbar/Navbar'
import { NavLink } from '../../../Data/navLink'
const Booking = () => {
  return (
    <div className='h-[100vh] bg-[#E6F1FD] overflow-y-scroll'>
      <Navbar/>
      <BookTest/>
    </div>
  )
}

export default Booking