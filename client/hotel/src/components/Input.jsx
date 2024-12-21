import React from 'react'
import {forwardRef} from 'react'

function InputText({className,placeholder,type = "text",options=[],disabled=false,...props},ref) {
  return (
    <>
      {type == 'option' ? (
        <select {...props} ref={ref} disabled={disabled} className={` ${className} h-7 px-2 outline-none rounded-md bg-quinary`}>
          {options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      ) : (
        <input {...props} ref={ref} disabled={disabled} type={type} placeholder={placeholder} className={` ${className} h-7 px-2 outline-none rounded-md bg-quinary`} />
      )}
    </>
  )
}

export default  forwardRef(InputText)