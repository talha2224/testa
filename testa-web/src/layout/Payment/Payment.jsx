import React, { useState } from 'react'
import MasterCardIcon from '../../assets/pay.svg'
import PaymentPopup from '../../components/popup/PaymentPopup'
const Payment = () => {
  const [showDetails, setshowDetails] = useState(false)

  return (
    <div className='pt-[6rem] pl-4 pr-4 font-poppinsFont bg-[#E6F1FD] h-[100vh] w overflow-y-auto'>

      <div className='flex justify-between items-center flex-wrap mb-3 sm:mb-0'>
        <h1 className='text-xl tracking-wide mb-4 pt-4 '>Payment Methods</h1>
        <div onClick={()=>setshowDetails(true)}>
          <button className='w-[13rem] h-[2.3rem] bg-[#1971F5] text-white rounded-[8px] md:text-sm text-xs'>Add New Payment Method</button>
        </div>
      </div>

      <div className='w-full overflow-x-scroll md:overflow-x-auto bg-white rounded-[16px]'>

        <table className='w-full'>
          <thead>
            <tr>
              <th className='p-4 text-start border-b-2 border-[#E9EBED] tracking-wider text-sm  whitespace-nowrap'>Card Number</th>
              <th className='p-4 text-start border-b-2 border-[#E9EBED] tracking-wider text-sm  whitespace-nowrap'>Billing Address</th>
              <th className='p-4 text-start border-b-2 border-[#E9EBED] tracking-wider text-sm  whitespace-nowrap'>Expiry Date</th>
              <th className='p-4 text-start border-b-2 border-[#E9EBED] tracking-wider text-sm  whitespace-nowrap'>Actions</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td className='p-4 border-b-2 border-[#E9EBED] text-sm whitespace-nowrap'>
                <img src={MasterCardIcon} alt="" className='w-[2rem] mb-2' />
                <p>***************** 3456</p>
              </td>
              <td className='p-4 border-b-2 border-[#E9EBED] text-sm whitespace-nowrap'>701 W Plymouth Ave, DeLand United States</td>
              <td className='p-4 border-b-2 border-[#E9EBED] text-sm whitespace-nowrap'>07/2028</td>
              <td className='p-4 border-b-2 border-[#E9EBED] text-[#F00] text-sm whitespace-nowrap'>Remove</td>
            </tr>

          </tbody>
        </table>

      </div>

      {
        showDetails ? <PaymentPopup closePopup={setshowDetails} /> : ""
      }

    </div>
  )
}

export default Payment
