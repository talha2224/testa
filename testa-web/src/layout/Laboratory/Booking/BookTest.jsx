import React, { useContext, useState } from 'react'
import { steps, stepsDetails } from '../../../Data/LabBooking'
import { BookingProvider } from '../../../context/LabContext'
const BookTest = () => {
  const {currentState} = useContext(BookingProvider)

  return (

    <div className='bg-white m-4 rounded-[1rem] mt-[6.3rem] h-[80%] font-poppinsFont p-2 overflow-y-auto'>

      <div className='flex justify-center items-center flex-col pt-[1rem] mb-[1rem]'>
        <h1 className=' text-2xl font-extrabold tracking-wider'>Book A Medical Test</h1>
        <p className='text-[#3F4850] text-base mt-[1rem]'>Enter your location and find the best laboratory for your next medical test.</p>
      </div>

      <div className='flex justify-start lg:justify-center items-center gap-3 overflow-x-scroll'>
        {
          steps?.map((item, index) => {
            return (
              <div className={`flex items-center gap-3`} key={index + 100}>
                <div className={`flex items-center cursor-pointer gap-3 p-3 rounded-[0.5rem] ${item?.refId === currentState ? "bg-[#1971F5]" : null}`}>
                  <p className={`text-xl ${item?.refId === currentState ? "text-white" : "text-[#606970]"}`}>{item?.icon}</p>
                  <p className={`whitespace-nowrap ${item?.refId === currentState ? "text-white" : "text-[#606970]"}`}>{item?.title}</p>
                </div>
                {
                  item?.div ? <p className='w-[3rem] h-[1px] bg-black'></p> : null
                }
              </div>
            )
          })
        }
      </div>

      <div>
        {
          stepsDetails?.filter((c_id) => {
            return (c_id.id === currentState)
          }).map((item2) => {
            return (
              item2?.component
            )
          })
        }
      </div>

    </div>

  )
}

export default BookTest