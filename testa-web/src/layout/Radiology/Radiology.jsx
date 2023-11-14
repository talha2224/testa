import React, { useState } from 'react'
import { labData } from '../../Data/laboratory'
import { AiFillEye } from 'react-icons/ai'
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import Popup from '../../components/popup/RadiologyPopup'
// import { useNavigate } from 'react-router-dom'
// import Button from '../../components/Button/Button'

const Radiology = () => {
  // const nav = useNavigate()
  const [data] = useState(labData)
  const [showDetails, setshowDetails] = useState(false)
  const [currentPage, setcurrentPage] = useState(1)
  const perPageRecord = 3
  const lastIndex = currentPage * perPageRecord;
  const firstIndex = lastIndex - perPageRecord;
  const records = data?.slice(firstIndex, lastIndex);
  const numberOfPage = Math.ceil(data.length / perPageRecord)
  const number = [...Array(numberOfPage + 1).keys()].slice(1)

  const previousPage = () => {
    if (currentPage !== 1) {
      setcurrentPage(currentPage - 1)
    }
    else {
      setcurrentPage(numberOfPage)
    }
  }
  const nextPage = () => {
    if (currentPage !== numberOfPage) {
      setcurrentPage(currentPage + 1)
    }
    else {
      setcurrentPage(1)
    }
  }
  const changePage = (n) => {
    setcurrentPage(n)
  }
  
  return (
    <div className={`pt-[6rem] pl-4 pr-4 font-poppinsFont bg-[#E6F1FD] h-[100vh]  pb-4 z-[-30] overflow-y-hidden`}>

      <div className='flex justify-between items-center flex-wrap mb-3 sm:mb-0'>
        <h1 className='text-xl font-bold tracking-wide mb-4 pt-4 '>Radiology Reports</h1>
        {/* <div onClick={() => nav('/lab/booking')}>
          <Button value="Book Your Test" className='w-[8rem] h-[2.3rem] bg-[#1971F5] text-white rounded-[8px] md:text-sm text-xs' onClick={() => nav('/lab/booking')} />
        </div> */}
      </div>

      <div className='w-full overflow-x-scroll md:overflow-x-auto bg-white rounded-[16px]'>
        <table className='w-full'>
          <thead>
            <tr>
              <th className='p-4 text-start border-b-2 border-[#E9EBED] tracking-wider text-sm  whitespace-nowrap'>Id</th>
              <th className='p-4 text-start border-b-2 border-[#E9EBED] tracking-wider text-sm  whitespace-nowrap'>Type</th>
              <th className='p-4 text-start border-b-2 border-[#E9EBED] tracking-wider text-sm  whitespace-nowrap'>Laboratory</th>
              <th className='p-4 text-start border-b-2 border-[#E9EBED] tracking-wider text-sm  whitespace-nowrap'>Date & Time</th>
              <th className='p-4 text-start border-b-2 border-[#E9EBED] tracking-wider text-sm  whitespace-nowrap'>Radiologist</th>
              <th className='p-4 text-start border-b-2 border-[#E9EBED] tracking-wider text-sm  whitespace-nowrap'>Actions</th>
            </tr>
          </thead>

          <tbody>
            {records?.map((item, index) => (
              <tr key={index}>
                <td className='p-4 border-b-2 border-[#E9EBED] text-sm whitespace-nowrap'>{index + 1}</td>
                <td className='p-4 border-b-2 border-[#E9EBED] text-sm whitespace-nowrap'>{item?.condition}</td>
                <td className='p-4 border-b-2 border-[#E9EBED] text-sm whitespace-nowrap'>{item?.labDeatils}</td>
                <td className='p-4 border-b-2 border-[#E9EBED] text-sm whitespace-nowrap'>{item?.date}</td>
                <td className='p-4 border-b-2 border-[#E9EBED]'>
                  <p className='flex justify-center items-center text-sm whitespace-nowrap w-[6rem] h-[2rem] rounded-[6px] cursor-pointer'>Dr Wole</p>
                </td>
                <td className='p-4 border-b-2 border-[#E9EBED] text-sm whitespace-nowrap'>
                  <div className='flex gap-4'>
                    <div className='w-[1.5rem] h-[1.5rem] rounded-full flex justify-center items-center bg-[#E6F1FD] cursor-pointer' onClick={() => setshowDetails(true)}>
                      <AiFillEye className='text-[#1971F5]' />
                    </div>
                  </div>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

      <div className='flex justify-center items-center gap-5 mt-5 overflow-y-hidden'>
        <div className='w-[2rem] h-[2rem] flex justify-center items-center rounded-[2px] bg-[#FFF] border-solid border-2 border-[#D9D9D9]'>
          <MdOutlineKeyboardArrowLeft className='cursor-pointer text-[#D9D9D9]' onClick={previousPage} />
        </div>
        {
          number?.map((item, index) => {
            return (
              <div key={index} className='flex gap-3 cursor-pointer'>
                <div className={`w-[2rem] h-[2rem] flex justify-center items-center rounded-[2px] bg-[#FFF] border-solid border-2 ${currentPage === item ? "border-[#1971F5]" : "border-[#D9D9D9]"}`} onClick={() => changePage(item)}>
                  <p style={{ color: currentPage === item ? '#1971F5' : 'black' }} className='text-xs' onClick={() => changePage(item)}>{item}</p>
                </div>
              </div>
            )
          })
        }
        <div className='w-[2rem] h-[2rem] flex justify-center items-center rounded-[2px] bg-[#FFF] border-solid border-2 border-[#D9D9D9]'>
          <MdOutlineKeyboardArrowRight className='cursor-pointer text-[#D9D9D9]' onClick={nextPage} />
        </div>
      </div>

      {
        showDetails ?
          <div className='fixed top-0 right-0 overflow-y-scroll h-fit w-screen'>
            <div className='bg-black opacity-50 h-full overflow-y-scroll w-screen fixed top-0 right-0'></div>
            <div className='w-[20rem] h-full overflow-y-scroll bg-white fixed top-0 right-0'>
              <Popup setShowPopup={setshowDetails} />
            </div>
          </div>
          : ""
      }
    </div>
  )
}

export default Radiology
