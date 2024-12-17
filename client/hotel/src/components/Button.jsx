import React from 'react'

function Button({children}) {
  return (
    <div>
        <button
        className='bg-secondary text-quinary px-8 py-1 rounded-md'
        >{children}</button>
    </div>
  )
}

export default Button