import React from 'react'
import Logo from '../../assets/face.jpeg'

const Profile = () => {
  return (
    <div className='pt-[6rem] pl-4 pr-4 font-poppinsFont bg-[#E6F1FD] h-[100vh] w overflow-y-auto'>
      <h1 className='text-xl'>Settings</h1>

      <div className='flex justify-center items-center w-[100%] h-[90%]'>

        <div className='flex justify-center items-start bg-white w-[98%] md:w-[50%] h-[80%] overflow-y-auto rounded-[1rem] p-2'>

          <div className=''>

            <div className='flex gap-4 flex-wrap justify-center items-center mt-3 mb-8'>
              <img src={Logo} alt="" className='w-[4rem] h-[4rem] rounded-full' />
              <button style={{ border: "1px solid #1971f5" }} className='text-[#1971f5] bg-white w-[12rem] h-[2rem] rounded-[0.5rem]'>Upload New Picture</button>
              <button style={{ border: "1px solid #1971f5" }} className='text-[#1971f5] bg-white w-[5rem] h-[2.3rem] rounded-[0.5rem]'>Delete</button>
            </div>

            <div className='flex justify-center items-center flex-col'>
              <input type="text" defaultValue={"Kim Smith"} placeholder='Reminder Title' style={{ border: "1px solid #C8D5E0" }} className='w-[100%] h-[2.3rem] rounded-[0.5rem] placeholder:text-[#9BA6B0] placeholder:text-sm pl-3 pr-3 outline-none mb-4' />
              <input type="text" defaultValue={"New York"} placeholder='Reminder Title' style={{ border: "1px solid #C8D5E0" }} className='w-[100%] h-[2.3rem] rounded-[0.5rem] placeholder:text-[#9BA6B0] placeholder:text-sm pl-3 pr-3 outline-none mb-4' />
              <input type="text" defaultValue={"Male"} placeholder='Reminder Title' style={{ border: "1px solid #C8D5E0" }} className='w-[100%] h-[2.3rem] rounded-[0.5rem] placeholder:text-[#9BA6B0] placeholder:text-sm pl-3 pr-3 outline-none mb-4' />
              <input type="text" defaultValue={"30"} placeholder='Reminder Title' style={{ border: "1px solid #C8D5E0" }} className='w-[100%] h-[2.3rem] rounded-[0.5rem] placeholder:text-[#9BA6B0] placeholder:text-sm pl-3 pr-3 outline-none mb-4' />
              <input type="text" defaultValue={"182 cm"} placeholder='Reminder Title' style={{ border: "1px solid #C8D5E0" }} className='w-[100%] h-[2.3rem] rounded-[0.5rem] placeholder:text-[#9BA6B0] placeholder:text-sm pl-3 pr-3 outline-none mb-4' />
              <input type="text" defaultValue={"130 lbs"} placeholder='Reminder Title' style={{ border: "1px solid #C8D5E0" }} className='w-[100%] h-[2.3rem] rounded-[0.5rem] placeholder:text-[#9BA6B0] placeholder:text-sm pl-3 pr-3 outline-none mb-4' />
              <input type="text" defaultValue={"B+"} placeholder='Reminder Title' style={{ border: "1px solid #C8D5E0" }} className='w-[100%] h-[2.3rem] rounded-[0.5rem] placeholder:text-[#9BA6B0] placeholder:text-sm pl-3 pr-3 outline-none mb-4' />
              <input type="text" defaultValue={"As"} placeholder='Reminder Title' style={{ border: "1px solid #C8D5E0" }} className='w-[100%] h-[2.3rem] rounded-[0.5rem] placeholder:text-[#9BA6B0] placeholder:text-sm pl-3 pr-3 outline-none mb-4' />

            </div>

            <div className='flex justify-center items-center mb-3'>
              <button className='text-white bg-[#1971f5] rounded-[0.5rem] w-[8rem] h-[2.3rem]'>Save Profile</button>
            </div>

          </div>

        </div>


      </div>
    </div>
  )
}

export default Profile
