import React from 'react'

function InputText({className,placeholder,type = "text",options=[]}) {
  return (
    <>
      {type === 'option' ? (
        <select className={` ${className} h-7 px-2 outline-none rounded-md bg-quinary`}>
          {options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      ) : (
        <input type={type} placeholder={placeholder} className={` ${className} h-7 px-2 outline-none rounded-md bg-quinary`} />
      )}
    </>
  )
}

export default InputText