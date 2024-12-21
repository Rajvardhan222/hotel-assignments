import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getGuestById } from '../../axios/guestAdmin/guestAdmin.api'
import Button from '../../components/Button'


function PrintGuest() {
  let {id} = useParams()
  let [guest,setGuest] = useState(null)
  useEffect(() => {
    getGuestById(id).then((response) => {
      console.log(response)
      setGuest(response.data.data)
    }).catch((error) => {
      console.log('Error getting guest: ', error.message)
    })
  
   
  }, [])
  let stayfromDate = new Date(guest?.stayfrom)
  let staytoDate = new Date(guest?.stayto)
  
  return (
    <>
  {guest && (
  <>
    <div className='print:flex print:flex-col print:gap-y-8'>
      <h1 className='print:font-bold print:text-xl'>Guest Details</h1>
      <p><strong>Name:</strong> {guest.name}</p>
      <p><strong>Email:</strong> {guest.email}</p>
      <p><strong>Phone:</strong> {guest.phone}</p>
      <p><strong>Address:</strong> {guest.address}</p>
      <p><strong>ID Proof:</strong> {guest.idproofno}</p>
      <p><strong>Check In:</strong> {stayfromDate.toLocaleDateString()}</p>
      <p><strong>Check Out:</strong> {staytoDate.toLocaleDateString()}</p>
      <p><strong>Purpose of Visit:</strong> {guest.purposeofvisit}</p>

    </div>
    <Button className={'print:hidden'} onClick={() => window.print()}>Print</Button>
    </>
  )
}</>
  )
}

export default PrintGuest