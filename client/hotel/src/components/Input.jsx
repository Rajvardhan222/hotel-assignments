import React from 'react'

function InputText({className}) {
  return (
    <input type='text' className={` ${className} 
    h-7 px-2 outline-none rounded-md bg-quinary 
    `}/>
  )
}

export default InputText