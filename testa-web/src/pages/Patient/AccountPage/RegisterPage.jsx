import React, { useEffect } from 'react'
import RegisterationForm from '../../../components/Form/RegisterationForm'
import Nav from '../../../components/Nav/Nav'
import { useNavigate } from 'react-router-dom'
import { getCookie } from '../../../components/cookie/cookies'
const RegisterPage = () => {

  const nav = useNavigate()
    useEffect(() => {
      if (getCookie("patientId")) {
        nav("/home")
      }
    }, [])

  return (
    <div className='h-[100vh] overflow-hidden'>
      <Nav />
      <RegisterationForm />
    </div>
  )
}

export default RegisterPage