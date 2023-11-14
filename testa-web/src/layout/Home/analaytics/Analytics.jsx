import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getCookie } from '../../../components/cookie/cookies';
import CurrentTime from '../../../helper/currentTime';
import {BiSolidEditAlt} from 'react-icons/bi'
import CenterPopup from '../../../components/popup/CenterPopup';


const Analytics = () => {
    const [AnalyticsData, setAnalyticsData] = useState([]);
    const [PatientInfo, setPatientInfo] = useState([]);
    const [showPopup, setshowPopup] = useState(false)
    
    useEffect(() => {
        const headers = {
            'Authorization': `Bearer ${getCookie('patientToken')}`,
            'Content-Type': 'application/json',
          };
        axios.get(`/api/v1/patient/${getCookie("patientId")}`)
            .then((res) => setPatientInfo(res?.data));

        axios.get(`/api/v1/vital-sign/patient/${getCookie("patientId")}`,{headers})
          .then((res) =>setAnalyticsData([res.data]));
    }, [showPopup]);

    useEffect(()=>{

    },[])

    return (
        <>
            <h1 className='p-4 mt-[6rem] font-poppinsFont tracking-wider font-[600] text-xl'>My Health Analytics</h1>

            <div className='block sm:flex gap-1 overflow-x-auto font-poppinsFont p-4 items-center'>

                {/* PATIENT INFO */}
                <div className='flex gap-3 cursor-pointer min-w-max'>
                    <img src={PatientInfo.image} alt="face" className='w-[3rem] h-[3rem] rounded-full' />

                    <div>
                        <p className='text-sm mb-1'>{PatientInfo?.name}</p>
                        <p className='text-sm mb-1 text-[#1971F5]'>PID: {PatientInfo?._id}</p>

                        <div className='flex gap-3 items-center'>
                            <p className='text-xs text-[#606970] flex gap-2'>Local Time: <CurrentTime /></p>
                            <button className='w-[4rem] h-[1.3rem] text-xs bg-slate-200 text-[#1971F5] rounded-2xl'>Patient</button>
                        </div>

                    </div>

                </div>

                {/* LINE */}
                <div className='hidden sm:flex w-[1px] h-[5rem] bg-[#00000026] ml-4 mr-4'></div>

                {/* HEALTH DATA */}
                <div className='flex gap-[1rem] overflow-scroll mt-[1rem]  sm:mt-0'>
                    {
                        AnalyticsData.length === 0 ?

                            <div className='w-[12rem] h-[5rem] bg-[#F1F5F8] p-2 min-w-[12rem] rounded-[4px] cursor-pointer '>
                                <p className='mb-3 text-[#606970] text-sm'>Add Details</p>
                                <p onClick={()=>setshowPopup(true)}><BiSolidEditAlt className='text-[#1971F5] text-2xl'/></p>
                            </div>
                            :
                            AnalyticsData?.map((item, index) => {
                                return (
                                    <div className='flex gap-[1rem] overflow-scroll mt-[1rem]  sm:mt-0' key={item?._id}>
                                        <div className='w-[12rem] h-[5rem] bg-[#F1F5F8] p-2 min-w-[12rem] rounded-[4px] cursor-pointer '>
                                            <p className='mb-3 text-[#606970] text-sm'>{"Height"}</p>
                                            <p>{item?.height}cm</p>
                                        </div>
                                        <div className='w-[12rem] h-[5rem] bg-[#F1F5F8] p-2 min-w-[12rem] rounded-[4px] cursor-pointer '>
                                            <p className='mb-3 text-[#606970] text-sm'>{"Weight"}</p>
                                            <p>{item?.weight}lbs</p>
                                        </div>
                                        <div className='w-[12rem] h-[5rem] bg-[#F1F5F8] p-2 min-w-[12rem] rounded-[4px] cursor-pointer '>
                                            <p className='mb-3 text-[#606970] text-sm'>{"Gender"}</p>
                                            <p>{item?.gender}</p>
                                        </div>
                                        <div className='w-[12rem] h-[5rem] bg-[#F1F5F8] p-2 min-w-[12rem] rounded-[4px] cursor-pointer '>
                                            <p className='mb-3 text-[#606970] text-sm'>{"Age"}</p>
                                            <p>{item?.age}</p>
                                        </div>
                                        <div className='w-[12rem] h-[5rem] bg-[#F1F5F8] p-2 min-w-[12rem] rounded-[4px] cursor-pointer '>
                                            <p className='mb-3 text-[#606970] text-sm'>{"Bloog Group"}</p>
                                            <p>{item?.bloodGroup}</p>
                                        </div>
                                        <div className='w-[12rem] h-[5rem] bg-[#F1F5F8] p-2 min-w-[12rem] rounded-[4px] cursor-pointer '>
                                            <p className='mb-3 text-[#606970] text-sm'>{"Blood Genotype"}</p>
                                            <p>{item?.bloodGenotype}</p>
                                        </div>

                                    </div>
                                )
                            })
                    }
                </div>

            </div>

            {
                showPopup ? <CenterPopup closePopup={setshowPopup} isVital={true}/>:""
            }
        </>
    );
}

export default Analytics;
