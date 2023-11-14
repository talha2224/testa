import React, { useContext, useState } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { AiOutlineSearch } from 'react-icons/ai'
import { BookingProvider } from '../../context/LabContext'
import { useNavigate } from 'react-router-dom'
const SelectLocation = () => {

  const {changeState} = useContext(BookingProvider)
  const nav = useNavigate()
  const submit = ()=>{
    changeState(2)
  }
  return (
    <div className='flex justify-center items-center flex-col mt-10'>
      <div className='relative'>
        <Input name="location" type="text" placeholder="Enter Your Location" className="w-[90vw] md:w-[40rem] h-[2.8rem] outline-none rounded-[0.75rem] border-solid border-2 border-[#C8D5E0] pl-2 pr-2" />
        <AiOutlineSearch className="absolute right-4 top-[0.8rem] text-xl cursor-pointer" />
      </div>

      <div className='w-[90vw] md:w-[40rem] h-[10rem] overflow-y-auto shadow-navShadow rounded-[1rem] border-solid border-2 border-[#E2E8ED] p-2 mt-2'>
        <p className='hover:bg-[#E6F1FD] p-2 mb-1 border-b-2 border-solid border-[#E2E8ED] cursor-pointer'>New York</p>
        <p className='hover:bg-[#E6F1FD] p-2 mb-1 border-b-2 border-solid border-[#E2E8ED] cursor-pointer'>New York</p>
        <p className='hover:bg-[#E6F1FD] p-2 mb-1 border-b-2 border-solid border-[#E2E8ED] cursor-pointer'>New York</p>
        <p className='hover:bg-[#E6F1FD] p-2 mb-1 border-b-2 border-solid border-[#E2E8ED] cursor-pointer'>New York</p>
        <p className='hover:bg-[#E6F1FD] p-2 mb-1 border-b-2 border-solid border-[#E2E8ED] cursor-pointer'>New York</p>
        <p className='hover:bg-[#E6F1FD] p-2 mb-1 border-b-2 border-solid border-[#E2E8ED] cursor-pointer'>New York</p>
        <p className='hover:bg-[#E6F1FD] p-2 mb-1 border-b-2 border-solid border-[#E2E8ED] cursor-pointer'>New York</p>
        <p className='hover:bg-[#E6F1FD] p-2 mb-1 border-b-2 border-solid border-[#E2E8ED] cursor-pointer'>New York</p>
      </div>

      <div className='flex items-center gap-10 mt-4'>
        <Button onClick={()=>nav("/lab")} value={"Cancel"} className='border-solid border-2 border-[#1971F5] text-[#1971F5] shadow-btnShadow w-[7rem] h-[3rem] rounded-[0.5rem]' />
        <Button value={"Continue"} onClick={submit} className='w-[7rem] h-[3rem] rounded-[0.5rem] bg-[#1971F5] text-white' />
      </div>
    </div>
  )
}

export default SelectLocation