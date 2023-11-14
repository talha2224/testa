import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Nav = () => {
    const nav = useNavigate()
    const currentLocation = useLocation().pathname.split()[1]
  return (

    <div className='fixed top-0 right-0 w-screen'>

        <div className='bg-[#E6F1FD] flex justify-center items-center w-[100vw] font-poppinsFont h-[6rem]'>

            <div className='flex justify-between items-center shadow-navShadow bg-white p-2 rounded-xl h-[4rem] w-[98%]'>

                <div>
                    <img src="./assests/logo.png" alt="" className='h-[1.2rem] pl-3 cursor-pointer' onClick={()=>nav("/")}/>
                </div>

                <div className='flex gap-6 items-center mr-4'>
                    <p onClick={()=>nav("/")} className={`cursor-pointer p-1 pl-2 pr-2 rounded-[6px] ${currentLocation===undefined ? "bg-[#E6F1FD]":""} ${currentLocation===undefined ? "text-[#1971F5]":"text-[#606970]"}`}>Patient</p>
                    <p className={`cursor-pointer p-1 pl-2 pr-2 rounded-[6px] ${currentLocation==="doctor" ? "bg-[#E6F1FD]":""} ${currentLocation==="doctor" ? "text-[#1971F5]":"text-[#606970]"}`}>Doctor</p>
                    <p className={`cursor-pointer p-1 pl-2 pr-2 rounded-[6px] ${currentLocation==="laboratory" ? "bg-[#E6F1FD]":""} ${currentLocation==="laboratory" ? "text-[#1971F5]":"text-[#606970]"}`}>Laboratory</p>
                    <p className={`cursor-pointer p-1 pl-2 pr-2 rounded-[6px] ${currentLocation==="ambulance" ? "bg-[#E6F1FD]":""} ${currentLocation==="ambulance" ? "text-[#1971F5]":"text-[#606970]"}`}>Ambulance</p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Nav