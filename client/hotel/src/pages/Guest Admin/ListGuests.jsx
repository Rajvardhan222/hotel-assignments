import React, { useEffect, useState } from 'react'
import Table from '../../components/Table'
import { getAllGuests } from '../../axios/guestAdmin/guestAdmin.api'
import Button from '../../components/Button'
// const data = [
//   { name: 'John', age: 28, job: 'Developer' },
//   { name: 'Jane', age: 25, job: 'Designer' },
// ];

// const columns = [
//   {
//     accessorKey: 'name', 
//     header: 'Name',
//   },
//   {
//     accessorKey: 'age',
//     header: 'Age',
//   },
//   {
//     accessorKey: 'job',
//     header: 'Job Title',
//   },
// ];
function ListGuests() {

  let [data, setData] = useState([])
  let [loading, setLoading] = useState(false)
  let [error, setError] = useState(null)
  let columns = [
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'phone',
      header: 'Phone',
    },
    {
      accessorKey: 'idproofno',
      header: 'ID Proof',
    },
    {
      accessorKey: 'address',
      header: 'Address',
    },
    {
      accessorKey: 'stayfrom',
      header: 'Check In',
    },
    {
      accessorKey: 'stayto',
      header: 'Check Out',
    },
    {
      accessorKey: 'purposeofvisit',
      header: 'Purpose of Visit',
    },
    {
      accessorKey:'print',
      header: "Print Details",
      
      cell: ({ row }) => (
        <div className='flex flex-row gap-5'>
          <Button href={`/guestAdmin/print/${row.original.id}`}>Print</Button>
          <Button href={`/guestAdmin/edit/${row.original.id}`}>Edit</Button>
        </div>
      )
      
    }
  ]

  useEffect(function getGuestList() {
    setError(null)
    setLoading(true)
    getAllGuests()
      .then((response) => {
        console.log(response.data)
        setData(response?.data?.data)
      })
      .catch((error) => {
        console.log('Error getting guests: ', error.message)
        setError(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  },[])
  return (
    <div className=''>
      <div className='sm:p-2 md:p-8 lg:p-10'>
        <h1 className='text-4xl text-center '>List of Guests</h1>
      </div>
      <div className='w-full overflow-x-scroll sm:p-3 lg:p-18'>
        <Table data={data} columns={columns} />
      </div>
    </div>
  )
}

export default ListGuests