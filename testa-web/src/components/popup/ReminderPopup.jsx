import React from 'react'

const ReminderPopup = ({ setShowPopup }) => {
    return (
        <div className='p-2 relative h-[100%]'>

            <div className='bg-[#E6F1FD] flex justify-between items-center p-2 rounded-[6px]'>
                <p>Add Reminder</p>
                <div>
                    <img src='/assests/close.png' className='float-right cursor-pointer text-sm ' onClick={() => setShowPopup(false)} />
                </div>
            </div>

            <div style={{ border: "1px solid #E2E8ED" }} className='p-2 pt-4 pb-4 mt-4 rounded-[1rem]'>
                <input type="text" placeholder='Reminder Title' style={{border:"1px solid #C8D5E0"}} className='w-[100%] h-[2.3rem] rounded-[0.5rem] placeholder:text-[#9BA6B0] placeholder:text-sm pl-3 pr-3 outline-none mb-4' />
                <input type="text" placeholder='Reminder Date' style={{border:"1px solid #C8D5E0"}} className='w-[100%] h-[2.3rem] rounded-[0.5rem] placeholder:text-[#9BA6B0] placeholder:text-sm pl-3 pr-3 outline-none mb-4' />
                <input type="text" placeholder='Reminder Time' style={{border:"1px solid #C8D5E0"}} className='w-[100%] h-[2.3rem] rounded-[0.5rem] placeholder:text-[#9BA6B0] placeholder:text-sm pl-3 pr-3 outline-none mb-4' />

                <div className='flex items-center gap-x-3 mb-4'>
                    <input style={{border:"1px solid #C8D5E0"}} className='w-[1rem] h-[1rem]' type="checkbox" name="" id="" />
                    <p className='text-sm'>Remind me via text</p>
                </div>
                <input type="text" placeholder='Enter Mobile Number' style={{border:"1px solid #C8D5E0"}} className='w-[100%] h-[2.3rem] rounded-[0.5rem] placeholder:text-[#9BA6B0] placeholder:text-sm pl-3 pr-3 outline-none mb-4' />

                <div className='flex items-center gap-x-3 mb-4'>
                    <input style={{border:"1px solid #C8D5E0"}} className='w-[1rem] h-[1rem]' type="checkbox" name="" id="" />
                    <p className='text-sm'>Remind me via email</p>
                </div>
                <input type="text" placeholder='Enter Email Address' style={{border:"1px solid #C8D5E0"}} className='w-[100%] h-[2.3rem] rounded-[0.5rem] placeholder:text-[#9BA6B0] placeholder:text-sm pl-3 pr-3 outline-none' />

            </div>



            <button className='w-[95%] absolute bottom-2 h-[2.4rem] mt-4 mb-4 rounded-[8px] shadow-btnShadow border-2 bg-[#1971F5] text-sm text-white ' onClick={() => setShowPopup(false)}>Save</button>


        </div>
    )
}

export default ReminderPopup
