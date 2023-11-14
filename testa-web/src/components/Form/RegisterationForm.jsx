import React, { useEffect } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Alert from '../Alert/Alert'
import { useState } from 'react'
import axios from 'axios'
import { BsFillPersonFill, BsGenderFemale } from "react-icons/bs"
import { MdEmail } from 'react-icons/md'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import {IoCall} from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { setCookie } from '../cookie/cookies'
import { Oval } from 'react-loader-spinner'
import { baseUrl } from '../BaseUrl/url'

const RegisterationForm = () => {
  const nav = useNavigate()
  const [image, setimage] = useState([])
  const [response, setresponse] = useState({
    res: false,
    error: false,
    message: ""
  })
  const [showLoader, setshowLoader] = useState(false)
  const [showPassword, setshowPassword] = useState(false)
  const [confirmshowPassword, confirmsetshowPassword] = useState(false)
  const [data, setData] = useState({ name: "", email: "", password: "", confirmPassword: "", gender: "", longitude: "", latitude: "",number1:"",number2:"" })

  const changeFunc = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const onSubmitForm = (e) => {
    e.preventDefault()
    if (!data.name || !data.email || !data.password || !data.gender || !data.number1 || !data.number2 || !image) {
      setresponse({ ...response, res: true, error: true, message: "All Fields Are Required" })
      setTimeout(() => {
        setresponse({ ...response, res: false, error: false, message: "" })
      }, 3000);
    }
    else if (!data.longitude || !data.latitude) {
      setresponse({ ...response, res: true, error: true, message: "Please Allow Location In Order To Continue" })
      setTimeout(() => {
        setresponse({ ...response, res: false, error: false, message: "" })
      }, 3000);
    }
    else if (data.confirmPassword !== data.password) {
      setresponse({ ...response, res: true, error: true, message: "Password And Confirm Password Not Match" })
      setTimeout(() => {
        setresponse({ ...response, res: false, error: false, message: "" })
      }, 3000);
    }
    else {
      const formData = new FormData()
      formData.append("name", data.name)
      formData.append("email", data.email)
      formData.append("password", data.password)
      formData.append("gender", data.gender)
      formData.append("longitude", data.longitude)
      formData.append("latitude", data.latitude)
      formData.append("number1", data.number1)
      formData.append("number2", data.number2)
      formData.append("image", image)
      setshowLoader(true)
      axios.post(`/api/v1/patient/register`, formData)
      .then((res) => {
        setshowLoader(false)
        if (res.status === 200) {
          setresponse({ ...response, res: true,error:false, message: "Account Created🥳" })
          setCookie("id",res?.data?.info?._id)
          setCookie("token",res?.data?.createdToken)
          setshowLoader(false)
          setTimeout(() => {
            setresponse({ ...response,error:false, res: false, message: "" })
            nav(`/otp/verify/${res?.data?.info?._id}`)
          }, 3000);
        }
      })
      .catch((e)=>{
        setshowLoader(false)
        if(e.response.status){
          setresponse({ ...response, res: true,error:true, message: "Email Already Registered" })
          setTimeout(() => {
            setresponse({ ...response, res: false,error:true, message: "" })
          }, 3000);
        }
      })
    }
  }

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => { const { latitude, longitude } = position.coords; setData({ ...data, latitude, longitude }) },);
    }
  }, [])

  return (
    <>

      <div className='flex justify-center items-center w-screen h-screen font-poppinsFont mt-[3rem] bg-[#E6F1FD]'>

        <form className=' shadow-btnShadow bg-white p-2 rounded-[8px] h-[25rem] overflow-y-scroll md:m-0 m-2' onSubmit={onSubmitForm}>

          <h1 className='text-center text-[#606970] text-base md:text-xl mb-3'>Find Best Doctors Here</h1>

          <div>
            {/* NAME AND EMAIL  */}
            <div className='block md:flex md:gap-6 md:items-center md:flex-wrap'>
              <div>
                <h1 className='text-[#6d7072] mb-1'>Name</h1>
                <div className='relative'>
                  <Input type={"text"} changeFunc={changeFunc} name={"name"} className="md:w-[15rem] w-[100%] h-[2.5rem] border-2 border-solid border-[#E6F1FD] pl-2 pr-[2rem] outline-none rounded-[6px] mb-4" placeholder="Your Name" />
                  <BsFillPersonFill className='text-white bg-slate-700 p-1 w-[1.5rem] h-[1.5rem] rounded-full absolute top-[0.5rem] right-[0.5rem] cursor-pointer' />
                </div>
              </div>

              <div>
                <h1 className='text-[#606970] mb-1'>Email</h1>
                <div className='relative'>
                  <Input type={"email"} changeFunc={changeFunc} name={"email"} className="md:w-[15rem] w-[100%] h-[2.5rem] border-2 border-solid border-[#E6F1FD] pl-2 pr-10 outline-none rounded-[6px] mb-4" placeholder="Your Email" />
                  <MdEmail className='text-white bg-slate-700 p-1 w-[1.5rem] h-[1.5rem] rounded-full absolute top-[0.5rem] right-[0.5rem] cursor-pointer' />
                </div>
              </div>
            </div>

            <div className='block md:flex md:gap-6 md:items-center md:flex-wrap'>
              <div>
                <h1 className='text-[#6d7072] mb-1'>Phone Number</h1>
                <div className='relative'>
                  <Input type={"text"} changeFunc={changeFunc} name={"number1"} className="md:w-[15rem] w-[100%] h-[2.5rem] border-2 border-solid border-[#E6F1FD] pl-2 pr-[2rem] outline-none rounded-[6px] mb-4" placeholder="Your Phone" />
                  <IoCall className='text-white bg-slate-700 p-1 w-[1.5rem] h-[1.5rem] rounded-full absolute top-[0.5rem] right-[0.5rem] cursor-pointer' />
                </div>
              </div>

              <div>
                <h1 className='text-[#606970] mb-1'>Phone Number</h1>
                <div className='relative'>
                  <Input type={"text"} changeFunc={changeFunc} name={"number2"} className="md:w-[15rem] w-[100%] h-[2.5rem] border-2 border-solid border-[#E6F1FD] pl-2 pr-10 outline-none rounded-[6px] mb-4" placeholder="Alternative Number" />
                  <IoCall className='text-white bg-slate-700 p-1 w-[1.5rem] h-[1.5rem] rounded-full absolute top-[0.5rem] right-[0.5rem] cursor-pointer' />
                </div>
              </div>
            </div>

            {/* GENDER IMAGE */}
            <div className='block md:flex md:gap-6 md:items-center md:flex-wrap'>
              <div>
                <h1 className='text-[#606970] mb-1'>Gender</h1>
                <div className='relative'>
                  <Input type={"text"} changeFunc={changeFunc} name={"gender"} className="md:w-[15rem] w-[100%] h-[2.5rem] border-2 border-solid border-[#E6F1FD] pl-2 pr-4 outline-none rounded-[6px] mb-4" placeholder="Your Gender" />
                  <BsGenderFemale className='text-white bg-slate-700 p-1 w-[1.5rem] h-[1.5rem] rounded-full absolute top-[0.5rem] right-[0.5rem] cursor-pointer' />
                </div>
              </div>

              <div>
                <h1 className='text-[#606970] mb-1'>Image</h1>
                <div>
                  <input type={"file"} id='img' onChange={(e) => setimage(e.target.files[0])} name={"image"} className=" w-[15rem]" />
                </div>
              </div>
            </div>

            
            {/* PASSWORD CONFIRM PASSWORD  */}
            <div className='block md:flex md:gap-6 md:items-center md:flex-wrap'>
              <div>
                <h1 className='text-[#606970] mb-1 mt-4'>Password</h1>
                <div className='relative'>
                  <Input type={`${showPassword ? "text" : "password"}`} changeFunc={changeFunc} name={"password"} className="md:w-[15rem] w-[100%] h-[2.5rem] border-2 border-solid border-[#E6F1FD] pl-2 pr-4 outline-none rounded-[6px] mb-4" placeholder="Password" />
                  {
                    showPassword ?
                      <AiFillEyeInvisible onClick={() => setshowPassword(!showPassword)} className='text-white bg-slate-700 p-1 w-[1.5rem] h-[1.5rem] rounded-full absolute top-[0.5rem] right-[0.5rem] cursor-pointer' />
                      : <AiFillEye onClick={() => setshowPassword(!showPassword)} className='text-white bg-slate-700 p-1 w-[1.5rem] h-[1.5rem] rounded-full absolute top-[0.5rem] right-[0.5rem] cursor-pointer' />

                  }
                </div>
              </div>

              <div>
                <h1 className='text-[#606970] mb-1 mt-4'>Confirm Pssword</h1>
                <div className='relative'>
                  <Input type={`${confirmshowPassword ? "text" : "password"}`} changeFunc={changeFunc} name={"confirmPassword"} className="md:w-[15rem] w-[100%] h-[2.5rem] border-2 border-solid border-[#E6F1FD] pl-2 pr-4 outline-none rounded-[6px] mb-4" placeholder="Password" />
                  {
                    confirmshowPassword ?
                      <AiFillEyeInvisible onClick={() => confirmsetshowPassword(!confirmshowPassword)} className='text-white bg-slate-700 p-1 w-[1.5rem] h-[1.5rem] rounded-full absolute top-[0.5rem] right-[0.5rem] cursor-pointer' />
                      : <AiFillEye onClick={() => confirmsetshowPassword(!confirmshowPassword)} className='text-white bg-slate-700 p-1 w-[1.5rem] h-[1.5rem] rounded-full absolute top-[0.5rem] right-[0.5rem] cursor-pointer' />

                  }

                </div>
              </div>
            </div>

            <p className=''>Already have an account ? <span onClick={()=>nav("/login")} className='text-[#606970] cursor-pointer'>Login</span></p>

            <Button value={showLoader?<Oval radius={10} width={30} height={30} visible={true} ariaLabel='oval-loading' strokeWidth={10} secondaryColor="#1971F5" strokeWidthSecondary={10} wrapperStyle={{display:"flex",justifyContent:"center",alignItems:"center"}}  color='#E6F1FD'/>:"Create An Account"} 
            className={`bg-[#1971F5] text-white w-[100%] h-[2.5rem] rounded-[6px] mt-2 4 ${showLoader?"cursor-not-allowed pointer-events-none bg-sky-300":"cursor-pointer pointer-events-auto"}`} />
          </div>

        </form>

      </div>

      {
        response?.res ? <Alert error={response?.error} message={response?.message} /> : ""
      }

    </>
  )
}

export default RegisterationForm