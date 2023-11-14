import React from 'react'
import Avatar from '../../assets/Avatar.png'

const PrescriptionPopup = ({ setShowPopup }) => {
    return (
        <div className='p-2'>

            <div className='bg-[#E6F1FD] flex justify-between items-center p-2 rounded-[6px]'>
                <p>Prescription Details</p>
                <div>
                    <img src='/assests/close.png' className='float-right cursor-pointer text-sm ' onClick={() => setShowPopup(false)} />
                </div>
            </div>

            <div className='mt-4 p-2 rounded-[6px] border-2 border-solid border-[#E2E8ED]'>

                <div className=''>
                    <p className='flex text-sm text-[#606970]'>ID: <span className='text-black mb-2 ml-1'>123456</span></p>
                    <p className='text-sm text-[#606970] mb-2'>Condtion: <span className='text-black'>Heart pumping</span></p>
                    <p className='text-sm text-[#606970]'>Date: <span className='text-black'>8/12/2023 09:15 am</span></p>

                </div>

            </div>

            <div className='mt-4 p-2 rounded-[6px] border-2 border-solid border-[#E2E8ED]'>
                <p className='mb-2'>Drugs to intake</p>
                <p className='mb-2 text-sm bg-[#F1F5F8] p-2 rounded-md'>Lisinopril ...</p>
                <p className='mb-2 text-sm bg-[#F1F5F8] p-2 rounded-md'>perindopril ...</p>
                <p className='mb-2 text-sm bg-[#F1F5F8] p-2 rounded-md'>captopril ..</p>
            </div>

            <div className='mt-4 p-2 rounded-[6px] border-2 border-solid border-[#E2E8ED]'>
                <p className='mb-2'>Doctor/Medical Expert</p>
                <div className='bg-[#F1F5F8] p-2 rounded-md'>
                    <p className='mb-2 text-[#606970]'>Doctor Details</p>

                    <div className='flex justify-between items-start'>
                        <div className='flex items-start gap-2'>
                            <div>
                                <img src={Avatar} alt="" />
                            </div>
                            <div>
                                <p className='text-sm'>Emerson Schleifer</p>
                                <p className='mt-1 text-[#606970] text-sm'>Heart Specialist</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-[#1971f5] cursor-pointer'>Profile</p>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default PrescriptionPopup
