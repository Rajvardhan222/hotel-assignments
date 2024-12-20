import React from 'react'
import InputText from './Input'
import Button from './Button'

function GuestCheckInForm({name}) {
return (
    <>
        <div className="shadow-md bg-gradient-to-br from-quaternary to-tertiary p-4 rounded-md">
            <div className="text-center p-5">
                <h4>{name}</h4>
            </div>
            <div className="px-7 w-full lg:px-28 md:px-16">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-3">
                    <InputText placeholder="Name" className="col-span-1 md:col-span-2" />
                    <InputText placeholder="Email" className="col-span-1" />
                    <InputText placeholder="Phone Number" className="col-span-1" />
                    <InputText placeholder="ID Number" className="col-span-1 md:col-span-2" />
                    <InputText placeholder="Address" className="col-span-1 md:col-span-2" />
                    <InputText placeholder="Check-in Date" type='date' className="col-span-1" />
                    <InputText placeholder="Check-out Date" type='date' className="col-span-1" />
                    <InputText type={'option'} options={["Business","Tourist","Others"]} className="col-span-1 md:col-span-2" />
                    <div className="m-auto md:col-span-2">
                        <Button>Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    </>
)
}

export default GuestCheckInForm