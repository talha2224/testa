import React from 'react'
import Charts from '../../../components/Charts/Charts'
import Button from '../../../components/Button/Button'

const Chart = () => {

  return (
    <>
      <div className='mt-10  font-poppinsFont pl-4 pr-4 lg:flex lg:justify-between lg:flex-wrap z-[-30]'>

        <div className='md:w-[60vw] min-w-[60vw]'>
          <h1 className='mb-4 font-[600] text-xl tracking-wider'>Health Chart</h1>
          <Charts />
        </div>



        <div className='h-[17rem]'>

          <h1 className='mb-4 font-[600] text-xl tracking-wider'>Insurance</h1>
          <div style={{ backgroundImage: "url('./assests/bg.png')", backgroundRepeat: "no-repeat" }} className=' w-[20rem] h-[100%] rounded-[16px] p-3'>
            <p className='text-white text-sm mb-4'>Insurance Cover Plan</p>
            <div className='flex gap-[1rem] items-center'>
              <p className='text-white text-sm'>RX 61 90 75 A</p>
              <Button onClick={() => alert("BTN1")} value={"Active"} className='w-[4rem] h-[1.8rem] text-sm text-white rounded-2xl bg-[#FFFFFF33]' />
            </div>

            <div className='bg-[#FFFFFF33]  flex justify-between items-center p-2 rounded-[6px] mt-[8rem]'>
              <div className='flex gap-2 items-center'>
                <img src="./assests/com.png" alt="" className='w-[1.5rem] h-[1.5rem]' />
                <p className='text-white text-xs'>Insurance Company</p>
              </div>
              <Button value="See Details" className='bg-[#1971F5] text-xs text-white w-[6rem] h-[2rem] rounded-[6px] cursor-pointer' />
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Chart


