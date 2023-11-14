import React, { useState } from 'react';
import { ImCross } from 'react-icons/im'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Alert from '../Alert/Alert'
import axios from 'axios';
import { vitalUrl } from '../BaseUrl/url';
import { getCookie } from '../cookie/cookies';
const CenterPopup = ({ closePopup, isVital }) => {
    const [details, setDetails] = useState({
        height: "",
        weight: "",
        gender: "",
        age: "",
        bloodGroup: "",
        bloodGenotype: "",
        patientId: getCookie('patientId')

    })
    const [health, setHealth] = useState({
        BMI: "",
        PulseRate: "",
        BloodPressure: "",
        GlucoseLevel: "",
        patientId: getCookie('patientId')
    })

    const [showALert, setShowAlert] = useState(false)
    const [error, seterror] = useState(false)
    const [msg, setmsg] = useState('')

    const onChangeInput = (e) => {
        if (isVital) {
            setDetails({ ...details, [e.target.name]: e.target.value })
        }
        else {
            setHealth({ ...health, [e.target.name]: e.target.value })
        }
    }


    const submitDetails = (e) => {
        e.preventDefault()
        const headers = {
            'Authorization': `Bearer ${getCookie('patientToken')}`,
            'Content-Type': 'application/json'
        };
        if (isVital) {
            if (!details.age || !details.bloodGenotype || !details.bloodGroup || !details.gender || !details.height || !details.weight) {
                setShowAlert(true)
                seterror(true)
                setmsg("All Fields Are Required")
                setTimeout(() => {
                    setShowAlert(false)
                    seterror(false)
                    setmsg("")
                }, 2000);
            }
            else {
                axios.post(`${vitalUrl}/create`, details, { headers })
                .then((res) => {
                        if (res.status) {
                            setShowAlert(true)
                            seterror(false)
                            setmsg("Details Added Sucessfully")
                            setTimeout(() => {
                                closePopup(false)
                                setShowAlert(false)
                                seterror(false)
                                setmsg("")
                            }, 2000);
                        }
                })
                .catch((e) => console.log(e))
            }
        }
        else {
            console.log(health)
            if (!health.BMI || !health.BloodPressure || !health.GlucoseLevel || !health.PulseRate) {
                setShowAlert(true)
                seterror(true)
                setmsg("All Fields Are Required")
                setTimeout(() => {
                    setShowAlert(false)
                    seterror(false)
                    setmsg("")
                }, 2000);
            }
            else {
                axios.post(`${vitalUrl}/health/create`, health, { headers })
                    .then((res) => {
                        if (res.status) {
                            setShowAlert(true)
                            seterror(false)
                            setmsg("Details Added Sucessfully")
                            setTimeout(() => {
                                closePopup(false)
                                setShowAlert(false)
                                seterror(false)
                                setmsg("")
                            }, 2000);
                        }
                    })
                    .catch((e) => console.log(e))
            }
        }
    }

    return (
        <>
            <div className='fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 font-poppinsFont'>
                <div className='bg-white p-4 rounded-lg shadow-lg md:w-[50%] w-[100%] m-2 md:m-0'>
                    <div className='flex justify-between items-center mb-[1rem]'>
                        <p>Enter Details Below</p>
                        <ImCross onClick={() => closePopup(false)} className='cursor-pointer' />
                    </div>

                    {/* MAIN DETAILS  */}
                    {
                        isVital ?
                            <div>
                                {/* HEIGHT WEIGHT  */}
                                <div className='flex gap-3 items-center mb-[10px]'>
                                    <div className=' flex-1'>
                                        <p className='mb-[4px]'>Height</p>
                                        <Input name="height" type={"number"} placeholder={"Height"} changeFunc={onChangeInput} className='w-full border-2 border-solid border-[#00000026] outline-none h-[2.4rem] rounded-[5px] pl-4' />
                                    </div>

                                    <div className='flex-1'>
                                        <p className='mb-[4px]'>Weight</p>
                                        <Input name="weight" type={"number"} placeholder={"Weight"} changeFunc={onChangeInput} className='w-full border-2 border-solid border-[#00000026] outline-none h-[2.4rem] rounded-[5px] pl-4' />
                                    </div>
                                </div>

                                {/* GENDER AGE  */}
                                <div className='flex gap-3 items-center mb-[10px]'>
                                    <div className=' flex-1'>
                                        <p className='mb-[4px]'>Gender</p>
                                        <Input name="gender" type={"text"} placeholder={"Gender"} changeFunc={onChangeInput} className='w-full border-2 border-solid border-[#00000026] outline-none h-[2.4rem] rounded-[5px] pl-4' />
                                    </div>

                                    <div className='flex-1'>
                                        <p className='mb-[4px]'>Age</p>
                                        <Input name="age" type={"number"} placeholder={"Age"} changeFunc={onChangeInput} className='w-full border-2 border-solid border-[#00000026] outline-none h-[2.4rem] rounded-[5px] pl-4' />
                                    </div>
                                </div>

                                {/* BLOOG AND TYPE  */}

                                <div className='flex gap-3 items-center mb-[10px]'>
                                    <div className=' flex-1'>
                                        <p className='mb-[4px]'>Blood Group</p>
                                        <Input name="bloodGroup" type={"text"} placeholder={"Blood Group"} changeFunc={onChangeInput} className='w-full border-2 border-solid border-[#00000026] outline-none h-[2.4rem] rounded-[5px] pl-4' />
                                    </div>

                                    <div className='flex-1'>
                                        <p className='mb-[4px]'>Blood Genotype</p>
                                        <Input name="bloodGenotype" type={"text"} placeholder={"Blood Genotype"} changeFunc={onChangeInput} className='w-full border-2 border-solid border-[#00000026] outline-none h-[2.4rem] rounded-[5px] pl-4' />
                                    </div>
                                </div>

                                {/* SUBMIT BUTTON */}
                                <Button value={"Submit"} onClick={submitDetails} className="w-[8rem] h-[3rem] bg-[#1971F5] text-white rounded-[8px]" />

                            </div>
                            :
                            <div>
                                {/* HEIGHT WEIGHT  */}
                                <div className='flex gap-3 items-center mb-[10px]'>
                                    <div className=' flex-1'>
                                        <p className='mb-[4px]'>BMI</p>
                                        <Input name="BMI" type={"number"} placeholder={"BMI"} changeFunc={onChangeInput} className='w-full border-2 border-solid border-[#00000026] outline-none h-[2.4rem] rounded-[5px] pl-4' />
                                    </div>

                                    <div className='flex-1'>
                                        <p className='mb-[4px]'>Blood Pressure</p>
                                        <Input name="BloodPressure" type={"number"} placeholder={"Blood Pressure"} changeFunc={onChangeInput} className='w-full border-2 border-solid border-[#00000026] outline-none h-[2.4rem] rounded-[5px] pl-4' />
                                    </div>
                                </div>

                                {/* GENDER AGE  */}
                                <div className='flex gap-3 items-center mb-[10px]'>
                                    <div className=' flex-1'>
                                        <p className='mb-[4px]'>Pulse Rate</p>
                                        <Input name="PulseRate" type={"number"} placeholder={"Pulse Rate"} changeFunc={onChangeInput} className='w-full border-2 border-solid border-[#00000026] outline-none h-[2.4rem] rounded-[5px] pl-4' />
                                    </div>

                                    <div className='flex-1'>
                                        <p className='mb-[4px]'>Glucose Level</p>
                                        <Input name="GlucoseLevel" type={"number"} placeholder={"Glucose Level"} changeFunc={onChangeInput} className='w-full border-2 border-solid border-[#00000026] outline-none h-[2.4rem] rounded-[5px] pl-4' />
                                    </div>
                                </div>

                                {/* SUBMIT BUTTON */}
                                <Button value={"Submit"} onClick={submitDetails} className="w-[8rem] h-[3rem] bg-[#1971F5] text-white rounded-[8px]" />

                            </div>
                    }


                </div>
            </div>
            {
                showALert ? <Alert message={msg} error={error} /> : ""
            }
        </>
    );
};

export default CenterPopup;