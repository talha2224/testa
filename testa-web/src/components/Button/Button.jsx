import React from 'react'

const Button = ({value,className,onClick,style}) => {
  return (
    <div>
      <button style={style} className={className} onClick={onClick}>{value}</button>
    </div>
  )
}

export default Button