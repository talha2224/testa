import React from 'react'

const RadiologyPopup = ({ setShowPopup }) => {

    return (
        <div className='p-2'>

            <div className='bg-[#E6F1FD] flex justify-between items-center p-2 rounded-[6px]'>
                <p>Radiology Test Details</p>
                <div>
                    <img src='/assests/close.png' className='float-right cursor-pointer text-sm ' onClick={() => setShowPopup(false)} />
                </div>
            </div>

            <div className='mt-4 p-2 rounded-[6px] border-2 border-solid border-[#E2E8ED]'>

                <div className=''>
                    <p className='flex text-sm text-[#606970]'>ID: <span className='text-black mb-2 ml-2'>123456</span></p>
                    <p className='text-sm text-[#606970]'>Radiology Test: <span className='text-black'>Mammography</span></p>
                </div>

            </div>

            <div className='mt-4 p-2 rounded-[6px] border-2 border-solid border-[#E2E8ED]'>
                <p className='mb-4 text-sm'>Testa Lab, Brooklyn</p>
                <p className='mb-2 text-sm'><span className='text-[#606970] text-sm mr-2'>Lab Address:</span> 121 Dekalb Ave, Brooklyn, NY 11201, United States</p>
                <p className='mb-2 text-sm'><span className='text-[#606970] text-sm mr-2'>Date:</span>8/13/2023</p>
                <p className='mb-2 text-sm'><span className='text-[#606970] text-sm mr-2'>Time:</span>12:00 pm - 1:00 pm</p>
                <p className='mb-2 text-sm'><span className='text-[#606970] text-sm mr-2'>Radiologist:</span>Dr Wole</p>

            </div>

            <div className='mt-4 p-2 rounded-[6px] border-2 border-solid border-[#E2E8ED]'>
                <p className='mb-4 text-sm'>Testa Lab, Brooklyn</p>
                <p className='mb-2 text-sm'><span className='text-[#606970] text-sm'>Lab Address:</span> 121 Dekalb Ave, Brooklyn, NY 11201, United States</p>
                <p className='mb-2 text-sm'><span className='text-[#606970] text-sm'>Medical Expert:</span> N. Erika</p>
            </div>


            <button className='w-[100%] h-[2.4rem] mt-4 mb-4 rounded-[8px] shadow-btnShadow border-2 border-[#F46262] border-solid text-[#F46262] text-sm bg-white '>Cancel Booking</button>


        </div>
    )
}

export default RadiologyPopup
