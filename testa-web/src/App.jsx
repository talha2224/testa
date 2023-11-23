import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Patient/HomePage/Home'
import Lab from './pages/Patient/LabPage/Lab'
import Booking from './pages/Patient/LabPage/Booking'
import RegisterPage from './pages/Patient/AccountPage/RegisterPage'
import LoginPage from './pages/Patient/AccountPage/LoginPage'
import Otp from './pages/Otp/Otp'
import AdminApproval from './pages/Otp/AdminApproval'
import SucessBooking from './pages/Patient/LabPage/SucessBooking'
import Radiology from './pages/Patient/RadiologyPage/RadiologyPage'
import PrescriptionPage from './pages/Patient/PrescriptionPage/PrescriptionPage'
import ReminderPage from './pages/Patient/ReminderPage/ReminderPage'
import ProfilePage from './pages/Patient/ProfilePage/ProfilePage'
import PaymentPage from './pages/Patient/PaymentPage/PaymentPage'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<RegisterPage/>}/>
      <Route path='/otp/verify/:id' element={<Otp/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/approval' element={<AdminApproval/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/lab' element={<Lab/>}/>
      <Route path='/lab/booking' element={<Booking/>}/>
      <Route path='/lab/booking/sucess' element={<SucessBooking/>}/>
      <Route path='/radiology' element={<Radiology/>}/>
      <Route path='/prescription' element={<PrescriptionPage/>}/>
      <Route path='/reminder' element={<ReminderPage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='/payment' element={<PaymentPage/>}/>
    </Routes>
    </>
  )
}

export default App
