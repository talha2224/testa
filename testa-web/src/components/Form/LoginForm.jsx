import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Alert from '../Alert/Alert'
import { useState } from 'react'
import axios from 'axios'
import { MdEmail } from 'react-icons/md'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { setCookie } from '../cookie/cookies'
import { Oval } from 'react-loader-spinner'

const LoginForm = () => {

  const nav = useNavigate()
  const [response, setresponse] = useState({
    res: false,
    error: false,
    message: ""
  })
  const [showLoader, setshowLoader] = useState(false)
  const [showPassword, setshowPassword] = useState(false)
  const [data, setData] = useState({ email: "", password: "" })

  const changeFunc = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const onSubmitForm = (e) => {
    e.preventDefault()
    setshowLoader(true)
    if (!data.email || !data.password) {
      setshowLoader(false)
      setresponse({ ...response, res: true, error: true, message: "All Fields Are Required" })
      setTimeout(() => {
        setresponse({ ...response, res: false, error: false, message: "" })
      }, 3000);
    }
    else {
      axios.post(`/api/v1/patient/login`,data)
        .then((res) => {
          console.log(res)
          alert("SUCESS")
          setshowLoader(false)
          if (res.status === 200) {
            setresponse({ ...response, res: true,error:false, message: "Login Sucessfull🥳" })
            setCookie("patientId",res?.data?.info?._id)
            setCookie("patientToken",res?.data?.token)
            setshowLoader(false)
            setTimeout(() => {
              setresponse({ ...response,error:false, res: false, message: "" })
              nav("/home")
            }, 3000);
          }
        })
        
        .catch((e) => {
          setshowLoader(false)
          console.log(e,"e1")
          if(e?.response?.status===404){
            setresponse({ ...response, res: true, error: true, message: "Email Not Registered" })
            setTimeout(() => {
              setresponse({ ...response, res: false, error: false, message: "" })
            }, 3000); 
          }
          else if(e?.response?.status===403){
            setresponse({ ...response, res: true,error:false, message: "Login Sucessfull🥳" })
            setTimeout(() => {
              setresponse({ ...response,error:false, res: false, message: "" })
              nav("/approval")
            }, 3000);
          }
          else if(e?.response?.status===401){
            setresponse({ ...response, res: true, error: true, message: "You Did not verify your Email Please Register Again" })
            setTimeout(() => {
              setresponse({ ...response, res: false, error: false, message: "" })
            }, 3000); 
          }
          else if(e?.response?.status===409){
            setresponse({ ...response, res: true, error: true, message: "Invalid Credentials" })
            setTimeout(() => {
              setresponse({ ...response, res: false, error: false, message: "" })
            }, 3000); 
          }
          else{
            console.log(e,'e2')
            setresponse({ ...response, res: true, error: true, message: "Check Your Internet Connection" })
            setTimeout(() => {
              setresponse({ ...response, res: false, error: false, message: "" })
            }, 3000); 
          }
        })
    }
  }
  return (
    <>

      <div className='flex justify-center items-center w-screen h-screen font-poppinsFont mt-[3rem] bg-[#E6F1FD]'>

        <div className=' shadow-btnShadow bg-white p-2 rounded-[8px] h-fit overflow-y-hidden md:m-0 m-2'>

          <h1 className='text-center text-[#606970] text-base md:text-xl mb-3'>WELCOME BACK</h1>


          <h1 className='text-[#606970] mb-1'>Email</h1>

          <div className='relative'>
            <Input type={"email"} changeFunc={changeFunc} name={"email"} className="w-[100%] h-[2.5rem] border-2 border-solid border-[#E6F1FD] pl-2 pr-10 outline-none rounded-[6px] mb-4" placeholder="Your Email" />
            <MdEmail className='text-white bg-slate-700 p-1 w-[1.5rem] h-[1.5rem] rounded-full absolute top-[0.5rem] right-[0.5rem] cursor-pointer' />
          </div>

          {/* PASSWORD  */}
          <h1 className='text-[#606970] mb-1 mt-4'>Password</h1>
          <div className='relative'>
            <Input type={`${showPassword ? "text" : "password"}`} changeFunc={changeFunc} name={"password"} className=" w-[100%] h-[2.5rem] border-2 border-solid border-[#E6F1FD] pl-2 pr-4 outline-none rounded-[6px] mb-4" placeholder="Password" />
            {
              showPassword ?
                <AiFillEyeInvisible onClick={() => setshowPassword(!showPassword)} className='text-white bg-slate-700 p-1 w-[1.5rem] h-[1.5rem] rounded-full absolute top-[0.5rem] right-[0.5rem] cursor-pointer' />
                : <AiFillEye onClick={() => setshowPassword(!showPassword)} className='text-white bg-slate-700 p-1 w-[1.5rem] h-[1.5rem] rounded-full absolute top-[0.5rem] right-[0.5rem] cursor-pointer' />

            }
          </div>

          <p className=''>Don't have an account ? <span onClick={() => nav("/")} className='text-[#606970] cursor-pointer'>Register</span></p>
          <Button onClick={onSubmitForm} value={showLoader ? <Oval radius={10} width={30} height={30} visible={true} ariaLabel='oval-loading' strokeWidth={10} secondaryColor="#1971F5" strokeWidthSecondary={10} wrapperStyle={{ display: "flex", justifyContent: "center", alignItems: "center" }} color='#E6F1FD' /> : "Login To Your Account"}
            className={`bg-[#1971F5] text-white w-[100%] h-[2.5rem] rounded-[6px] mt-2 4 ${showLoader ? "cursor-not-allowed pointer-events-none bg-sky-300" : "cursor-pointer pointer-events-auto"}`} />


        </div>

      </div>

      {
        response?.res ? <Alert error={response?.error} message={response?.message} /> : null
      }

    </>
  )
}

export default LoginForm