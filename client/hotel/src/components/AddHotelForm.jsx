import React from 'react'
import InputText from './Input'
import Button from './Button'

function AddHotelForm({name}) {
  return (
    <>
    <div className=" shadow-md bg-gradient-to-br from-quaternary to-tertiary p-4 rounded-md">
        <div className="text-center p-5">
          <h4>{name}</h4>
        </div>
        <div className="px-7 w-full lg:px-28  md:px-16  ">
          <form className="grid  grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-3">
            <InputText />
            <InputText />
            <InputText className={'md:col-span-2'}/>
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