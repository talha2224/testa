import React from 'react'

const Alert = ({message,error}) => {
  return (

    <div className={`w-max p-3 ${error===true? "bg-red-500":"bg-blue-600"} fixed text-sm md:text-base top-[7rem] left-1 md:left-4 right-1 flex justify-center items-center rounded-[6px] font-poppinsFont`}>
      <p className='text-white'>{message}</p>
    </div>
  )
}

export default Alert