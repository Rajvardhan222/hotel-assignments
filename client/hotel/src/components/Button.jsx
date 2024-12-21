import React from 'react'
import { useNavigate } from 'react-router-dom'
function Button({children,href='#',...props}) {
  let navigate = useNavigate()
  return (
    <div>
        <button onClick={()=>navigate(href)} {...props} 
        className='bg-secondary text-quinary px-8 py-1 rounded-md'
        >{children}</button>
    </div>
  )
}

export default Button