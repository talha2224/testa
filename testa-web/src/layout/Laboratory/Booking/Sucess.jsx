import React from 'react'
import SucessIocn from '../../../assets/sucess.png'
import Button from '../../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
const Sucess = () => {
  const nav = useNavigate()

  return (

    <div className='mt-[8rem] flex justify-center items-center flex-col'>
      <img src={SucessIocn} alt="" />
      <h1 className=' font-bold text-2xl mt-2 text-center'>Success!</h1>
      <p className='text-[#3f4850] text-base mt-2 text-center'>You have booked your medical test successfully. you will be contacted for sample collection shortly.</p>
    <Button value={"Go to Laboratory Tests Listing"} onClick={()=>nav("/lab")} className={"w-[13rem] text-center h-[2.4rem] text-sm rounded-lg bg-[#1971F5] text-white mt-3"}/>
    </div>
  )
}

export default Sucess
