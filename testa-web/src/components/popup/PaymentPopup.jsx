import React from 'react'
import { ImCross } from 'react-icons/im'

const PaymentPopup = ({ closePopup }) => {
    return (
        <div className='fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 font-poppinsFont'>
            <div className='bg-white p-4 rounded-lg shadow-lg md:w-[40%] w-[100%] m-2 md:m-0'>

                <div className='flex justify-between items-center mb-[1rem] bg-[#E6F1FD] p-3 rounded-md'>
                    <p>Enter Details Below</p>
                    <ImCross onClick={() => closePopup(false)} className='cursor-pointer' />
                </div>

                <div style={{ border: "1px solid #E2E8ED" }} className='p-3 rounded-[1rem]'>

                    <div>
                        <input style={{ border: "1px solid #E2E8ED" }} type="text" name="" placeholder='Name on Card' className='mt-3 mb-3 outline-none w-[100%] h-[2.3rem] pl-3 pr-3 placeholder:text-sm placeholder:text-[#9BA6B0] rounded-[0.5rem]' />
                        <input style={{ border: "1px solid #E2E8ED" }} type="text" name="" placeholder='Card Number' className='mb-3 outline-none w-[100%] h-[2.3rem] pl-3 pr-3 placeholder:text-sm placeholder:text-[#9BA6B0] rounded-[0.5rem]' />
                    </div>

                    <div>
                        <p>Expiry </p>
                        <div className='flex gap-4 mb-3 items-center mt-3'>
                            <input style={{ border: "1px solid #E2E8ED" }} type="text" name="" placeholder='Month' className='flex-1 outline-none w-[48%] h-[2.3rem] pl-3 pr-3 placeholder:text-sm placeholder:text-[#9BA6B0] rounded-[0.5rem]' />
                            <input style={{ border: "1px solid #E2E8ED" }} type="text" name="" placeholder='Year' className='flex-1 outline-none w-[48%] h-[2.3rem] pl-3 pr-3 placeholder:text-sm placeholder:text-[#9BA6B0] rounded-[0.5rem]' />
                        </div>
                        <input style={{ border: "1px solid #E2E8ED" }} type="text" name="" placeholder='CVC Code' className='mt-3 mb-3 outline-none w-[100%] h-[2.3rem] pl-3 pr-3 placeholder:text-sm placeholder:text-[#9BA6B0] rounded-[0.5rem]' />

                    </div>

                </div>

                <div style={{ border: "1px solid #E2E8ED" }} className='p-3 mt-3 rounded-[1rem]'>

                    <div>
                        <p>Billing Address </p>
                        <input style={{ border: "1px solid #E2E8ED" }} type="text" name="" placeholder='Billing Address' className='mt-3 mb-3 outline-none w-[100%] h-[2.3rem] pl-3 pr-3 placeholder:text-sm placeholder:text-[#9BA6B0] rounded-[0.5rem]' />
                    </div>

                </div>

                <div className='flex justify-center items-center gap-4 mt-2'>
                    <button style={{border:"1px solid #1971F5"}} className='text-[#1971F5] bg-white w-[6rem] h-[2.3rem] rounded-[0.5rem]'>Cancel</button>
                    <button style={{border:"1px solid #1971F5"}} className='text-white bg-[#1971F5] w-[6rem] h-[2.3rem] rounded-[0.5rem]'>Save</button>
                </div>




            </div>
        </div>
    )
}

export default PaymentPopup
