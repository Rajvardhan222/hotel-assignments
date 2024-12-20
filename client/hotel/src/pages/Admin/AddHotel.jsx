import React from 'react'
import AddHotelForm from '../../components/AddHotelForm'

function AddHotel() {
  return (
    <div className='flex justify-center items-center h-[100vh] '>
      <AddHotelForm name={"Add New Hotel"}/>
    </div>
  )
}

export default AddHotel