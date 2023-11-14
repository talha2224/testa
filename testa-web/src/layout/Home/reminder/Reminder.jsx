import React from 'react'
import { AiFillEye } from 'react-icons/ai'
const Reminder = () => {

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
      <div className='font-poppinsFont pl-4 pr-4 mt-[2rem] mb-[2rem]'>
        <div className="flex justify-between items-center">
          <h1 className='font-poppinsFont tracking-wider font-[600] text-sm md:text-xl mr-2'>Reminders</h1>
          <p className='text-[#1971F5] text-sm cursor-pointer'>See All Reminders</p>
        </div>
        <div className='bg-red-100 mt-4 mb-4 h-[1.5px] border-solid border-b-2 border-[#E9EBED]'></div>
        <div className='w-full overflow-x-scroll md:overflow-x-auto'>
          <table className='w-full'>
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
      </div>

    </>
  )
}

export default Reminder