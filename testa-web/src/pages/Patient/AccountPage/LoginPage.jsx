import React from 'react'
import LoginForm from '../../../components/Form/LoginForm'
import Nav from '../../../components/Nav/Nav'
const LoginPage = () => {
  return (
    <div className='h-[100vh] overflow-hidden'>
      <Nav/>
      <LoginForm/>
    </div>
  )
}

export default LoginPage