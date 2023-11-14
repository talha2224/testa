import SelectLocation from '../components/Laboratory/SelectLocation'

import {MdOutlineLocationOn} from 'react-icons/md'
import {BsHospital, BsListCheck} from 'react-icons/bs'
import {CiStethoscope} from 'react-icons/ci'
import SelectType from '../components/Laboratory/SelectType'
import Checkout from '../components/Laboratory/Checkout'
import SampleCollection from '../components/Laboratory/SampleCollection'
export const steps = [
    {
        id:11,
        refId:1,
        title:"Select Your Location",
        icon:<MdOutlineLocationOn/>,
        div:true
    },
    {
        id:12,
        refId:2,
        title:"Choose Medical Test",
        icon:<CiStethoscope/>,
        div:true
    },
    {
        id:11,
        refId:3,
        title:"Sample Collection",
        icon:<BsHospital/>,
        div:true
    },
    {
        id:11,
        refId:4,
        title:"Checkout Details",
        icon:<BsListCheck/>,
        div:false
    }
]

export const stepsDetails= [
    {
        id:1,
        component:<SelectLocation/>
    },
    {
        id:2,
        component:<SelectType/>
    },
    {
        id:3,
        component:<SampleCollection/>
    },
    {
        id:4,
        component:<Checkout/>
    }
]