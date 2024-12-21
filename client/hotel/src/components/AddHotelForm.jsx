import React, { useState } from 'react'
import InputText from './Input'
import Button from './Button'
import {set, useForm} from 'react-hook-form'
import {addHotel} from '../axios/hotelAdmin/hotel.api'
import { useNavigate } from 'react-router-dom'
function AddHotelForm({name}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  let [error, setError] = useState(null)
  let [loading, setLoading] = useState(false)
let navigate = useNavigate()
  async function onSubmit(data) {
   try {
    setError(null)
     console.log(data)
     let requestPayload = new FormData()
     requestPayload.append('name', data.hotelName)
     requestPayload.append('address', data.address)
     requestPayload.append('logo', data.logo && data.logo[0])
 
     let request  = await addHotel(requestPayload)
     if(request.status === 200) {
       console.log('Hotel added successfully')
        navigate('/list')

     }else {
        console.log('Error adding hotel: ', request.data.message)
        setError(request.data.message)
     }
   } catch (error) {
     console.log('Error adding hotel: ', error.message)
    setError(error.message)
   }
   setLoading(false)
  }
  return (
    <>
    <div className=" shadow-md bg-gradient-to-br from-quaternary to-tertiary p-4 rounded-md">
        {error && <div className="bg-red-500 text-white p-2 text-center">{error}</div>}
        <div className="text-center p-5">
          <h4>{name}</h4>
        </div>
        <div className="px-7 w-full lg:px-28  md:px-16  ">
          <form className="grid  grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-3" 
          encType="multipart/form-data"
          onSubmit={handleSubmit(onSubmit)}>
          
            <InputText 
            
            placeholder="Hotel Name"
            {...register('hotelName', { required: 'Hotel Name is required' , minLength: { value: 3, message: 'Hotel Name should be at least 3 characters' } })}
            />
            <InputText 
            
            placeholder="address"
            {...register('address', { required: 'Address is required' , minLength: { value: 3, message: 'Address should be at least 3 characters' } })}
            />
            <InputText type='file' className={'md:col-span-2'}
            
            {...register('logo', { required: 'Image is required' })}
            />
            <div className="m-auto md:col-span-2">
              <Button>{loading ? 'loading':'Submit'}</Button>
            </div>
          </form>
        </div>
      </div>
      </>
  )
}

export default AddHotelForm