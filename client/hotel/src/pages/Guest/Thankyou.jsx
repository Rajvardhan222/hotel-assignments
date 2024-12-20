import React from 'react'
import { Link } from 'react-router-dom'

function Thankyou() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary sm:p-2 md:p-6 lg:p-14 ">
      <h1 className="text-4xl text-quinary font-bold mb-4">Thank You!</h1>
      <p className="text-lg text-quinary mb-6 text-center">We appreciate your registration. Welcome to our community!</p>
      <p className='text-8xl  md:py-4 text-center animate-pulse'>❤️</p>
     
      <Link to="/" className=" hover:underline text-tertiary">Go to Homepage</Link>
    </div>
  )
}

export default Thankyou