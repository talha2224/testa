import React from 'react'

const Input = ({className,name,changeFunc,type,placeholder,defaultValue,style,value}) => {
  return (
    <div>
        <input style={style} type={type} name={name} value={value} placeholder={placeholder} className={className} onChange={(e)=>changeFunc(e)}/>
    </div>
  )
}

export default Input