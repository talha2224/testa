import React, { useState } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { BookingProvider } from '../../context/LabContext'

const Checkout = () => {
    const nav = useNavigate()
    const { changeState } = useContext(BookingProvider)

    return (
        <div className='flex justify-center items-center flex-col mt-10'>

            <div className='w-[90vw] mb-4 md:w-[40rem] border-solid border-2 border-[#E2E8ED] rounded-[1rem] p-3'>
                <h1 className='text-lg mb-2'>Medical Tests</h1>
                <div className='w-[100%] bg-[#F1F5F8] p-3 rounded-[0.5rem]'>
                    <p><span className='text-[#606970]'>Medical Test :</span> (Blood Test)</p>
                </div>
            </div>

            <div className='w-[90vw] mb-4 md:w-[40rem] border-solid border-2 border-[#E2E8ED] rounded-[1rem] p-3'>
                <h1 className='text-lg mb-2'>Sample Collection - From My Location</h1>
                <div className='w-[100%] bg-[#F1F5F8] p-3 rounded-[0.5rem]'>
                    <p><span className='text-[#606970]'>Address : </span>121 Dekalb Ave, Brooklyn, NY 11201, United States</p>
                    <p><span className='text-[#606970]'>Contact : </span>+1 1234567890</p>

                </div>
            </div>

            <div className='w-[90vw] md:w-[40rem] mb-4 border-solid border-2 border-[#E2E8ED] rounded-[1rem] p-3'>
                <h1 className='text-lg mb-2'>Payment Details</h1>
                <div className='w-[100%] bg-[#F1F5F8] p-3 rounded-[0.5rem]'>
                    <p>Cash On Delievery</p>
                </div>
            </div>

            <div className='w-[90vw] md:w-[40rem] flex justify-between items-center border-solid border-2 border-[#E2E8ED] bg-[#E6F1FD] rounded-[1rem] p-3'>

                <h1>Amount</h1>
                <p>$125</p>

            </div>

            <div className='flex items-center gap-10 mt-4'>
                <Button onClick={()=>changeState(3)} value={"Back"} className='border-solid border-2 border-[#1971F5] text-[#1971F5] shadow-btnShadow w-[7rem] h-[3rem] rounded-[0.5rem]' />
                <Button value={"Submit"} onClick={()=>nav("/lab/booking/sucess")} className='w-[7rem] h-[3rem] rounded-[0.5rem] bg-[#1971F5] text-white' />
            </div>
        </div>)
}

export default Checkout


