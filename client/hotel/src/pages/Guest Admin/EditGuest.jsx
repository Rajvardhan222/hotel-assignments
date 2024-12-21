import  { useEffect, useState } from 'react'
import GuestCheckInForm from '../../components/GuestCheckInForm'
import { useParams } from 'react-router-dom'
import { getGuestById } from '../../axios/guestAdmin/guestAdmin.api'
import { set } from 'react-hook-form'

function EditGuest() {
  let {id} = useParams()
  let [guest,setGuest] = useState(null)
  let [hotelId, setHotelId] = useState(null)
  useEffect(() => {
    getGuestById(id).then((response) => {
      console.log(response.data.data.id)
     setHotelId(response.data.data.id)
      setGuest(response.data.data)
      console.log(response.data.data)
    }).catch((error) => {
      console.log('Error getting guest: ', error.message)
    })
  
   
  }, [])

  console.log(guest?.id)
  return (
    <div>
     {guest && <GuestCheckInForm name="Edit Guest Detail" 
      edit={true}
      data={
        { guestid: id,
          name: guest?.name,
          email: guest?.email,
          phone: guest?.phone,
          id: guest?.idproofno,
          address: guest?.address,
          checkIn: guest?.stayfrom,
          checkOut: guest?.stayto,
          purpose: guest?.purposeofvisit
        }
      }
      hotelid={hotelId}
      />}
    </div>
  )
}

export default EditGuest