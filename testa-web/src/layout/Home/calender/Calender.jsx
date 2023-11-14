import React from 'react'
import Button from '../../../components/Button/Button'
import { AiFillEye } from 'react-icons/ai'

const Calender = () => {
  const data = [
    {
      title: "Book appointment with doctor",
      date: "8/11/2023",
      time: "12:00 pm"
    },
    {
      title: "Book appointment with doctor",
      date: "8/11/2023",
      time: "12:00 pm"
    },
    {
      title: "Book appointment with doctor",
      date: "8/11/2023",
      time: "12:00 pm"
    },
    {
      title: "Book appointment with doctor",
      date: "8/11/2023",
      time: "12:00 pm"
    },
    {
      title: "Book appointment with doctor",
      date: "8/11/2023",
      time: "12:00 pm"
    }
  ]
  return (
    <>
      <div className='font-poppinsFont pl-4 pr-4 mt-[4rem] flex justify-between flex-wrap'>

        <div className=''>

          <div className="flex justify-between items-center xl:gap-0 md:gap-6 gap-2 mb-4">
            <h1 className='font-poppinsFont tracking-wider font-[600] text-sm md:text-xl'>Appointment Schedules</h1>
            <p className='text-[#1971F5] text-sm cursor-pointer'>All Appointments</p>
          </div>

          <div className='xl:min-w-[25rem] flex flex-1 xl:block flex-col border-solid border-2 border-[#E2E8ED] rounded-[6px] pt-4 pb-4 pl-2 pr-2 mb-4'>

            {/* APPOINMET DEATILS  */}
            <div className='flex justify-between items-center'>
              <p className='mt-2'>Appointment Details</p>
              <Button value={"Inprocess"} className='w-[6rem] h-[1.8rem] text-sm text-[#1971F5] mt-2 bg-[#E6F1FD] rounded-[24px]' />
            </div>
            {/* LINE  */}
            <hr className='mt-4 mb-4 bg-[#C8D5E0] h-[1.5px] border-none' />
            {/* DOCTOR DEATILS  */}
            <div className='bg-[#F1F5F8] p-3 rounded-[8px]'>
              <p className='text-sm text-[#606970] mb-2'>DOCTOR DETAILS</p>

              <div className='flex justify-between items-start'>

                <div className='flex gap-2'>
                  <img src="./assests/face.jpeg" alt="" className='w-[2.5rem] h-[2.5rem] rounded-full' />
                  <div>
                    <p>Emerson Schleifer</p>
                    <p className='text-[#606970]'>Heart Specialist</p>
                  </div>
                </div>

                <div className='flex gap-1 items-center cursor-pointer'>
                  <p className='text-sm text-[#1971F5]'>Profile</p>
                  <img src="./assests/arrow.png" alt="" />
                </div>
              </div>
            </div>

            <div className='flex justify-between mt-4 flex-wrap gap-2 md:gap-0'>

              <div className='flex gap-2 items-center'>
                <div className='w-[2rem] h-[2rem] rounded-full flex justify-center items-center bg-[#F1F5F8]'>
                  <img src="./assests/clock.png" alt="" className='w-1rem' />
                </div>
                <p className='text-[#3F4850] text-sm'>11:00 pm - 12:00 pm</p>

              </div>

              <div className='flex gap-2 items-center'>
                <div className='w-[2rem] h-[2rem] rounded-full flex justify-center items-center bg-[#F1F5F8]'>
                  <img src="./assests/calen.png" alt="" className='w-1rem' />
                </div>
                <p className='text-[#3F4850] text-sm'>11 Aug, 2023</p>
              </div>

            </div>

            <div className='flex gap-3 items-center mt-4 flex-wrap'>
              <div className='w-[2rem] h-[2rem] rounded-full flex justify-center items-center bg-[#F1F5F8]'>
                <img src="./assests/map.png" alt="" className='w-1rem' />
              </div>
              <p className='text-[#3F4850]'>Fime Medical Center</p>
              <p className='text-sm text-[#1971F5] underline decoration-[#1971F5] decoration-solid cursor-pointer'>map</p>
            </div>

            <div className='flex gap-3 items-center mt-4 flex-wrap'>
              <div className='w-[2rem] h-[2rem] rounded-full flex justify-center items-center bg-[#F1F5F8]'>
                <img src="./assests/inject.png" alt="" className='w-[20px]' />
              </div>
              <p className='text-[#3F4850]'>Heart Diagnose</p>
            </div>

            <div className='md:flex gap-3 items-center mt-4 flex-wrap'>
              <Button value={"Talk to Doctor"} className='md:w-[11rem] h-[3rem] w-[100%] md:mb-0 mb-4 text-sm text-[#1971F5] rounded-[8px] shadow-btnShadow border-solid border-2 border-[#1971F5]' />
              <Button value={"Cancel Appointment"} className='md:w-[11rem] h-[3rem] w-[100%] text-sm text-white bg-[#F46262] rounded-[8px] shadow-btnShadow' />
            </div>

          </div>
        </div>

        {/* <div className='flex-1 ml-[3rem] h-[100%]'>

          <div className="flex justify-between items-center">
            <h1 className='font-poppinsFont tracking-wider font-[600] text-sm md:text-xl mr-2'>Reminders</h1>
            <p className='text-[#1971F5] text-sm cursor-pointer'>See All Reminders</p>
          </div>

          <div className='bg-red-100 mt-4 mb-4 h-[1.5px] border-solid border-b-2 border-[#E9EBED]'></div>
          <div>
            <table>
              <thead>
                <tr>
                  <th className='pl-4 pr-4 pb-4 text-start border-b-2 border-[#E9EBED] tracking-wider'>Title</th>
                  <th className='pl-4 pr-4 pb-4 text-start border-b-2 border-[#E9EBED] tracking-wider'>Date</th>
                  <th className='pl-4 pr-4 pb-4 text-start border-b-2 border-[#E9EBED] tracking-wider'>Time</th>
                  <th className='pl-4 pr-4 pb-4 text-start border-b-2 border-[#E9EBED] tracking-wider'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => (
                  <tr key={index}>
                    <td className='p-4 border-b-2 border-[#E9EBED] text-sm whitespace-nowrap'>{item.title}</td>
                    <td className='p-4 border-b-2 border-[#E9EBED] text-sm whitespace-nowrap'>{item.date}</td>
                    <td className='p-4 border-b-2 border-[#E9EBED] text-sm whitespace-nowrap'>{item.time}</td>
                    <td className='p-4 border-b-2 border-[#E9EBED] text-sm whitespace-nowrap'>
                      <div className='w-[1.5rem] h-[1.5rem] rounded-full flex justify-center items-center bg-[#E6F1FD] cursor-pointer'>
                        <AiFillEye className='text-[#1971F5]' />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Calender