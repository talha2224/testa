import React, { useEffect, useState } from 'react'
import { NavLink } from '../../Data/navLink'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoNotificationsOutline } from 'react-icons/io5'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useLocation, useNavigate } from 'react-router-dom'
import {HiLogout} from 'react-icons/hi'
import axios from 'axios'
import Logo from '../../assets/logo.png'
// import {baseUrl} from '../BaseUrl/url'
import { deleteCookie, getCookie } from '../cookie/cookies'
import Alert from '../Alert/Alert'

const Navbar = () => {
  const [showSideBar, setshowSideBar] = useState(false)
  const [userImage,setUserImage] = useState("")
  const [showAlert, setshowAlert] = useState(false)
  const currentUrl = useLocation().pathname.split('/')[1]
  const nav = useNavigate()  
  useEffect(()=>{
    axios.get(`/api/v1/patient/${getCookie("patientId")}`)
    .then((res)=>setUserImage(res?.data?.image))
  },[])
  
  const logout=()=>{
    deleteCookie('patientId')
    deleteCookie('patientToken')
    setshowAlert(true)
    setTimeout(() => {
      setshowAlert(false)
      nav("/")
    }, 2000);
  }
  
  return (
    <div className=' fixed top-0 left-0'>

      <div className='relative bg-[#E6F1FD] flex justify-center items-center w-[100vw] font-poppinsFont h-[6rem]'>

        <div className='flex justify-between items-center shadow-navShadow bg-white p-2 rounded-xl h-[4rem] w-[98%]'>

          <div className='flex items-center gap-4'>
            <img src={Logo} alt="logo" className='h-[1.2rem] pl-3 cursor-pointer' onClick={()=>nav('/')} />
            <div className='xl:flex items-center hidden'>
              {
                NavLink?.map((item) => {
                  return (
                    <div key={item?.id} onClick={()=>nav(`/${item?.link}`)} className={`flex items-center gap-2 cursor-pointer ${currentUrl===item.link ?"text-[#1971F5]":"text-[#606970]"}  ${currentUrl===item.link?"bg-[#E6F1FD]":"bg-[white]"} rounded-lg p-3`}>
                      {
                        item?.id === 1?
                        <span className='text-[1.5rem]'>{item?.icon}</span>:
                        <img src={item?.icon} alt="" className='w-[1.3rem]' />
                      }
                      <p className='text-sm'>{item.title}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>

          <div className='flex justify-end items-center gap-4 flex-1 pr-3'>
            <AiOutlineSearch className='text-xl cursor-pointer' />
            <IoNotificationsOutline className='text-xl cursor-pointer' />

            <div className='relative'>
              <img src={`${userImage? userImage: "./assests/face.jpeg"}`} alt="face" className='w-[2.3rem] h-[2.3rem] rounded-full' />
              <div className='w-[10px] h-[10px] rounded-full bg-[#1971F5] absolute top-[-5px] right-0'></div>
            </div>
            <HiLogout className='text-xl cursor-pointer' onClick={logout} />
            <GiHamburgerMenu className='xl:hidden block text-xl cursor-pointer' onClick={() => setshowSideBar(!showSideBar)} />
          </div>

        </div>

      </div>

      {
        showSideBar ?

          <div className={`absolute top-[6rem] w-screen xl:hidden bg-[#E6F1FD] `}>
            {
              NavLink?.map((item) => {
                return (
                  <div key={item?.id} onClick={()=>nav(`/${item?.link}`)} className='flex items-center gap-2 cursor-pointer text-[#606970] hover:text-[#1971F5]  hover:bg-[#E6F1FD] rounded-lg p-3'>
                  {
                    item?.id === 1?
                    <span className='text-[1.5rem]'>{item?.icon}</span>:
                    <img src={item?.icon} alt="" className='w-[1.3rem]' />
                  }
                  <p className='text-sm'>{item.title}</p>
                </div>
                )
              })
            }
          </div>
          : ""
      }

      {showAlert?<Alert error={false} message={"Logout Succesfull"}/>:""}

    </div>
  )
}

export default Navbar