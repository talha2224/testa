import React from 'react'


const Popup = ({ setShowPopup }) => {

  const getBackgroundColor = (item) => {
    switch (item) {
      case "Inprocess":
        return "#CEE4FF";
      case "Completed":
        return "#CEE4FF";
      case "Pending":
        return "#D32F2F33";
      default:
        return "#CEE4FF";
    }
  };
  const getColor = (item) => {
    switch (item) {
      case "Inprocess":
        return "#1971F5";
      case "Completed":
        return "#1DC560";
      case "Pending":
        return "#D32F2F";
      default:
        return "black";
    }
  };
  let testIs = "Cancelled"
  return (
    <div className='p-2'>

      <div className='bg-[#E6F1FD] flex justify-between items-center p-2 rounded-[6px]'>
        <p>Test Details</p>
        <div>
          <img src='/assests/close.png' className='float-right cursor-pointer text-sm ' onClick={() => setShowPopup(false)} />
        </div>
      </div>

      <div className='mt-4 p-2 rounded-[6px] border-2 border-solid border-[#E2E8ED]'>
        <div className='flex justify-between items-center mb-4'>
          <p>Medical Test</p>
          <button style={{ backgroundColor: getBackgroundColor("Inprocess"), color: getColor("Inprocess") }} className='text-sm whitespace-nowrap w-[6rem] h-[2rem] rounded-[6px] cursor-pointer'>Inprocess</button>
        </div>
        <p className='mb-2 text-sm'><span className='text-[#606970] text-sm'>Medical Test:</span> Blood Sugar Level Test</p>
        <p className='mb-2 text-sm'><span className='text-[#606970] text-sm'>Category:</span> Common Blood Tests</p>
        <p className='mb-2 text-sm'><span className='text-[#606970] text-sm'>Payment (Paid):</span> $125</p>
      </div>

      <div className='mt-4 p-2 rounded-[6px] border-2 border-solid border-[#E2E8ED]'>
        <p className='mb-4 text-sm'>Medical Test - From My Location</p>
        <p className='mb-2 text-sm'><span className='text-[#606970] text-sm'>My Address:</span> 121 Dekalb Ave, Brooklyn, NY 11201, United States</p>
        <p className='mb-2 text-sm'><span className='text-[#606970] text-sm'>Contact:</span> +1 1234567890</p>
        <p className='mb-2 text-sm'><span className='text-[#606970] text-sm'>Date:</span>8/13/2023</p>
        <p className='mb-2 text-sm'><span className='text-[#606970] text-sm'>Time:</span>12:00 pm - 1:00 pm</p>
      </div>

      <div className='mt-4 p-2 rounded-[6px] border-2 border-solid border-[#E2E8ED]'>
        <p className='mb-4 text-sm'>Testa Lab, Brooklyn</p>
        <p className='mb-2 text-sm'><span className='text-[#606970] text-sm'>Lab Address:</span> 121 Dekalb Ave, Brooklyn, NY 11201, United States</p>
        <p className='mb-2 text-sm'><span className='text-[#606970] text-sm'>Medical Expert:</span> N. Erika</p>
      </div>

      {
        testIs === "Inprocess" ?
          <><div className='mt-4 p-2 rounded-[6px] border-2 border-solid border-[#E2E8ED] bg-[#F1F5F8]'>
            <p className='mb-4 text-sm'>Results/Report</p>
            <p className='mb-2 text-sm text-[#606970]'>Your medical results or reports and special notes will be shown here when its done.</p>
          </div><button className='w-[100%] h-[2.4rem] mt-4 mb-4 rounded-[8px] shadow-btnShadow border-2 border-[#F46262] border-solid text-[#F46262] text-sm bg-white '>Cancel Booking</button></>
          :
          ""
      }

      {
        testIs === "Completed" ?
          <><div className='mt-4 p-2 rounded-[6px] border-2 border-solid border-[#E2E8ED] bg-[#F1F5F8]'>
            <p className='mb-4 text-sm'>Results/Report</p>
            <p className='mb-2 text-sm text-[#606970]'>Your medical results or reports and special notes will be shown here when its done.</p>
          </div><button className='w-[100%] h-[2.4rem] mt-4 mb-4 rounded-[8px] text-white text-sm bg-[#1971F5] '>Download all details in PDF</button></> :
          ""
      }

      {
        testIs === "Cancelled" ?
          <button className='w-[100%] h-[2.4rem] mt-4 mb-4 rounded-[8px] shadow-btnShadow border-2 border-[#F46262] border-solid text-[#F46262] text-sm bg-white '>Cancel Booking</button>
          :
          ""
      }

    </div>
  )
}


export default Popup