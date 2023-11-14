import React, { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Analytics from '../../../layout/Home/analaytics/Analytics'
import Vital from '../../../layout/Home/vital/Vital'
import Calender from '../../../layout/Home/calender/Calender'
import Reminder from '../../../layout/Home/reminder/Reminder'
import Chart from '../../../layout/Home/chart/Chart'
import { useNavigate } from 'react-router-dom'
import { getCookie } from '../../../components/cookie/cookies'

const Home = () => {
  const nav = useNavigate()
  useEffect(()=>{
    if(!getCookie("patientId")){
      nav("/")
    }
  },[])

  return (
    <div>
      <Navbar/>
      <Analytics/>
      <Vital/>
      <Chart/>
      <Calender/>
      <Reminder/>
    </div>
  )
}

export default Home