import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import Button from '../../components/Button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import Alert from '../../components/Alert/Alert';
import axios from 'axios';

const Otp = () => {
    const [otp, setOtp] = useState('');
    const userId = useLocation().pathname.split("/")[3]
    const [response, setresponse] = useState({res: false,error: false,message: ""})
    const nav = useNavigate()

    const submitOtp = (e) => {
        e.preventDefault()
        if (!otp) {
            setresponse({ ...response, res: true, error: true, message: "Please Fill The Otp" })
            setTimeout(() => {
              setresponse({ ...response, res: false, error: false, message: "" })
            }, 3000);
        }
        else {
            let OTPNumber = parseFloat(otp)
            axios.put(`/api/v1/patient/verify/${userId}`,{otp:OTPNumber})
              .then((res) => {
                if (res.status===200){
                    setresponse({ ...response, res: true, error: false, message: "OTP Verified🥳" })
                    setTimeout(() => {
                      setresponse({ ...response, res: false, error: false, message: "" })
                      nav("/approval")
                    }, 3000); 
                }
              })
              .catch((e) =>{
                console.log(e)
                if (e.response.status===401){
                    setresponse({ ...response, res: true, error: true, message: "Invalid Otp" })
                    setTimeout(() => {
                      setresponse({ ...response, res: false, error: false, message: "" })
                    }, 3000); 
                }
            })
        }
    }
    return (
        <>
            <div className='bg-[#E6F1FD] w-screen h-screen font-poppinsFont'>

                <div className='flex justify-center items-center  w-screen h-screen'>
                    <div className='bg-white p-4 shadow-btnShadow h-[20rem] rounded-md flex justify-center items-center flex-col'>
                        <h1 className='mb-3 text-xl'>CHECK YOUR EMAIL</h1>
                        <OtpInput value={otp} onChange={setOtp} numInputs={4} renderInput={(props) => <input {...props} />} inputStyle={{ width: "3rem", height: "3rem", backgroundColor: "#E6F1FD", marginRight: "10px", color: "#1971F5", border: "1px solid gray" }} />
                        <div>
                            <Button value={"Verify Otp"} onClick={submitOtp} className={`bg-[#1971F5] text-white w-[15rem] mt-4 h-[2.5rem] rounded-[6px]`} />
                        </div>
                    </div>
                </div>

            </div>

            {
                response?.res ? <Alert error={response?.error} message={response?.message} /> : ""
            }
        </>
    )
}

export default Otp