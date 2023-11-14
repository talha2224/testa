import React, { createContext, useState } from 'react'
export const BookingProvider = createContext();

const LabContext = ({children}) => {
    const [Userlocation, setUserlocation] = useState('123')
    const [currentState,setCurrentState] = useState(1)
    
    const changeLocation = (value)=>{
      setUserlocation(value)
    }
    const changeState = (value)=>{
      setCurrentState(value)
    }

  return (
    <BookingProvider.Provider value={{Userlocation,changeLocation,changeState,currentState}}>
      {children}
    </BookingProvider.Provider>
  )
}

export default LabContext

    // const [showMenu, setshowMenu] = useState(false)
    // const [searchValue, setsearchValue] = useState('')
    // const {updateSearchValue} = useContext(SearchContext);
    // const nav = useNavigate()

    
    // const onChangeHandler = (e)=>{
    //     setsearchValue(e.target.value)
    // }

    // const onSearch=()=>{
    //     updateSearchValue(searchValue)
    // }
    // const handleEnterKey = (e)=>{
    //     if(e.key==='Enter'){
    //         updateSearchValue(searchValue)
    //     }
    // }