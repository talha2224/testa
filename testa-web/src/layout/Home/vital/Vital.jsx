import React, { useEffect, useState } from "react";
import { Circle } from "rc-progress";
import { getCookie } from '../../../components/cookie/cookies'
import axios from 'axios'
import { vitalUrl } from '../../../components/BaseUrl/url'
import { BiSolidEditAlt } from "react-icons/bi";
import CenterPopup from "../../../components/popup/CenterPopup";
const Vital = () => {

  const getBackgroundColor = (title) => {
    switch (title) {
      case "BMI":
        return "#CEE4FF";
      case "BloodPressure":
        return "#B4EDFF";
      case "PulseRate":
        return "#E3CEFF";
      case "Glucose":
        return "#B0F0DD";
      default:
        return "black";
    }
  };

  const [data, setData] = useState([])
  const [showPopup, setshowPopup] = useState(false)

  useEffect(() => {
    const headers = {
      'Authorization': `Bearer ${getCookie('patientToken')}`,
      'Content-Type': 'application/json'
    };
    axios.get(`/api/v1/vital-sign/health/patient/${getCookie("patientId")}`, { headers })
      .then((res) => { setData([res?.data]) })
  }, [showPopup])

  return (
    <>
      {
        data?.length > 0 ?
          <div className="p-4 mt-4 font-poppinsFont md:flex md:gap-[5.5rem]">

            <div className="w-[15rem] min-w-[15rem] relative -z-30">
              <h1 className="font-[600] tracking-wider">Health Score</h1>
              <Circle className="w-[6rem] float-right rounded-full" percent={90} strokeColor={"  #19C0F5"} strokeWidth={15} trailColor="#E6F1FD" trailWidth={15} />
              <p className=" absolute top-[3.8rem] right-[2.1rem] flex justify-center items-center float-right">90%</p>
              <div className="flex gap-1 mt-[5rem] text-sm">
                <p className="text-[#606970]">In Last 30 Days</p>
                <p className="text-[#1971F5]">20%</p>
              </div>
            </div>

            {data?.map((item, index) => {
              return (
                <div className="flex flex-1 overflow-x-scroll gap-[1rem] mt-[1rem] md:mt-0" key={item?._id}>

                  <div style={{ backgroundColor: getBackgroundColor("BMI") }} className="w-[15rem] h-[8rem] p-3 min-w-[15rem] rounded-[4px] cursor-pointer">
                    <div className="bg-white w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full mb-[10px]">
                      <img src="./assests/body.png" alt="" className=" w-[1.5rem]" />
                    </div>
                    <p className="text-[#606970] text-sm mb-[10px]">Body Mass Index</p>
                    <p>{item?.BMI}</p>
                  </div>

                  <div style={{ backgroundColor: getBackgroundColor("BloodPressure") }} className="w-[15rem] h-[8rem] p-3 min-w-[15rem] rounded-[4px] cursor-pointer">
                    <div className="bg-white w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full mb-[10px]">
                      <img src="./assests/heart.png" alt="" className=" w-[1.5rem]" />
                    </div>
                    <p className="text-[#606970] text-sm mb-[10px]">Blood Pressure</p>
                    <p>{item?.BloodPressure} mmHg</p>
                  </div>

                  <div style={{ backgroundColor: getBackgroundColor("PulseRate") }} className="w-[15rem] h-[8rem] p-3 min-w-[15rem] rounded-[4px] cursor-pointer">
                    <div className="bg-white w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full mb-[10px]">
                      <img src="./assests/pulse.png" alt="" className=" w-[1.5rem]" />
                    </div>
                    <p className="text-[#606970] text-sm mb-[10px]">Pulse Rate</p>
                    <p>{item?.PulseRate} bpm</p>
                  </div>

                  <div style={{ backgroundColor: getBackgroundColor("Glucose") }} className="w-[15rem] h-[8rem] p-3 min-w-[15rem] rounded-[4px] cursor-pointer">
                    <div className="bg-white w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full mb-[10px]">
                      <img src="./assests/inject.png" alt="" className=" w-[1.5rem]" />
                    </div>
                    <p className="text-[#606970] text-sm mb-[10px]">Glucose Level</p>
                    <p>{item?.GlucoseLevel} mg/dL</p>
                  </div>

                </div>
              )
            })
            }

          </div>
          :
          <div className='w-[12rem] h-[5rem] bg-[#F1F5F8] ml-[1.3rem] p-2 min-w-[12rem] rounded-[4px] cursor-pointer font-poppinsFont'>
            <div className="">
              <p className='mb-3 text-[#606970] text-sm'>Add Details</p>
              <p><BiSolidEditAlt onClick={() => setshowPopup(true)} className='text-[#1971F5] text-2xl' /></p>
            </div>
          </div>


      }


      {
        showPopup ? <CenterPopup closePopup={setshowPopup} isVital={false} /> : ""
      }
    </>
  );
};

export default Vital;
