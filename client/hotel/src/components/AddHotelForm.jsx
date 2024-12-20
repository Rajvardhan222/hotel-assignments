import React from 'react'
import InputText from './Input'
import Button from './Button'
import {useForm} from 'react-hook-form'

function AddHotelForm({name}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  async function onSubmit(data) {
    console.log(data)
  }
  return (
    <>
    <div className=" shadow-md bg-gradient-to-br from-quaternary to-tertiary p-4 rounded-md">
        <div className="text-center p-5">
          <h4>{name}</h4>
        </div>
        <div className="px-7 w-full lg:px-28  md:px-16  ">
          <form className="grid  grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-3" 

          
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
            
            {...register('image', { required: 'Image is required' })}
            />
            <div className="m-auto md:col-span-2">
              <Button>Submit</Button>
            </div>
          </form>
        </div>
      </div>
      </>
  )
}

export default AddHotelForm