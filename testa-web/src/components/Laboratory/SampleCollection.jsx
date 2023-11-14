import React from 'react'
import { BookingProvider } from '../../context/LabContext'
import { useContext } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { AiOutlineSearch } from 'react-icons/ai'
import CalenderIcon from '../../assets/calender.png'
import ClockIcon from '../../assets/clock.png'
import RouteIcon from '../../assets/route.png'
import ParkingIcon from '../../assets/parking.png'

const SampleCollection = () => {
  const { changeState } = useContext(BookingProvider)
  const submit = () => {
    changeState(4)
  }
  let arr = [1,2,3,4,5,6,7,8]

  return (
    <div className='flex justify-center items-center flex-col mt-10'>

      {/* DATE AND TIME FOR SAMPLE COMLLECTION  */}
      <div style={{ border: "1px solid  #E2E8ED" }} className='rounded-[1rem] p-3'>
        <h1>Date & Time For Sample Collection</h1>
        <div className='mt-3 flex justify-between items-center gap-3'>

          <div className='relative md:flex-none flex-1'>
            <Input value={"8/13/2023"} style={{ "border": "1px solid #E2E8ED" }} placeholder={"Date"} className={"md:w-[20rem] w-[100%] pl-3 pr-16 outline-none h-[2.5rem] rounded-md"} type={"text"} name={"date"} />
            <img src={CalenderIcon} alt="" className=' absolute top-3 right-5' />
          </div>

          <div className='relative md:float-none flex-1'>
            <Input value={"12:00-1:00 pm"} style={{ "border": "1px solid #E2E8ED" }} className={"md:w-[20rem] w-[100%] pl-3 pr-16 outline-none h-[2.5rem] rounded-md"} placeholder={"Date"} type={"text"} name={"time"} />
            <img src={ClockIcon} alt="" className=' absolute top-3 right-5' />
          </div>
        </div>
      </div>

      {/* TEST FROM MY LOCATION  */}
      <div style={{ border: "1px solid  #E2E8ED" }} className='rounded-[1rem] p-4 mt-3 md:w-[40rem] w-[85vw]'>

        <div className='flex gap-2 items-center'>
          <input type="checkbox" name="" id="" className='' />
          <h1>From My Location</h1>

        </div>
        <div className='mt-3'>

          <div className=''>
            <Input style={{ "border": "1px solid #E2E8ED" }} placeholder={"Address"} className={"md:w-[40rem] w-[100%] mb-3 pl-3 pr-16 outline-none h-[2.5rem] rounded-md"} type={"text"} name={"date"} />
          </div>
          <div className=''>
            <Input style={{ "border": "1px solid #E2E8ED" }} placeholder={"Phone Number"} className={"md:w-[40rem] w-[100%]  mr-2 pl-3 pr-16 outline-none h-[2.5rem] rounded-md"} type={"text"} name={"date"} />
          </div>

        </div>

      </div>

      {/* FROM LABORATORY  */}
      <div style={{ border: "1px solid  #E2E8ED" }} className='rounded-[1rem] p-4 mt-3'>

        <div className='flex gap-2 items-center'>
          <input type="checkbox" name="" id="" className='' />
          <h1>Nearest Testa Locations</h1>

        </div>

        <div className='mt-3'>

          {
            arr?.map((item, index) => {
              return (
                <div key={index} style={{ border: "1px solid  #E2E8ED" }} className='md:w-[40rem] w-[80vw] bg-[#F1F5F8] mb-3 p-3 rounded-[1rem]'>

                  {/* LAB NAME  */}
                  <div className='flex justify-between flex-wrap items-center overflow-x-auto'>

                    <div>
                      <p className='md:text-base text-sm md:mb-0 mb-2 '>Testa Lab - Brooklyn</p>
                    </div>

                    <div className='flex gap-2 items-center flex-wrap'>

                      <div className='flex gap-2 mb-2 md:mb-0'>
                        <div className='w-[1.5rem] h-[1.5rem] bg-[#E6F1FD] rounded-full flex justify-center items-center'>
                          <img src={RouteIcon} alt="" />
                        </div>
                        <p className=' text-[#606960] text-sm'>17.1 KM from you</p>
                      </div>

                      <div className='flex gap-2 flex-wrap'>
                        <div className='w-[1.5rem] h-[1.5rem] bg-[#E6F1FD] rounded-full flex justify-center items-center'>
                          <img src={ParkingIcon} alt="" />
                        </div>
                        <p className=' text-[#606960] text-sm'>Parking Available</p>
                      </div>

                      <div>

                      </div>

                    </div>

                  </div>

                  {/* LAB ADDRESS  */}
                  <div className='mt-3'>
                    <p className='text-[#606970] text-sm'>Address: <span className='text-black ml-2 text-sm'>121 Dekalb Ave, Brooklyn, NY 11201, United States</span></p>
                  </div>
                  {/* TIMING  */}
                  <div className='mt-3 flex justify-between items-center flex-wrap'>
                    <p className='text-[#606970] text-sm md:mb-0 mb-2'>Timings: <span className='text-black ml-2 text-sm'>8:00 am - 9:00 pm</span></p>
                    <Button style={{ border: "1px solid #1971F5" }} value={"Select Lab"} className={"text-[#1971F5] w-[8rem] h-[2.5rem] rounded-[10px]"} />
                  </div>
                </div>

              )
            })
          }



        </div>

      </div>

      <div className='flex items-center gap-10 mt-4'>
        <Button onClick={() => changeState(2)} value={"Back"} className='border-solid border-2 border-[#1971F5] text-[#1971F5] shadow-btnShadow w-[7rem] h-[3rem] rounded-[0.5rem]' />
        <Button onClick={submit} value={"Continue"} className='w-[7rem] h-[3rem] rounded-[0.5rem] bg-[#1971F5] text-white' />
      </div>
    </div>
  )
}

export default SampleCollection

