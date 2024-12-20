import React from 'react'
import Table from '../../components/Table'
const data = [
  { name: 'John', age: 28, job: 'Developer' },
  { name: 'Jane', age: 25, job: 'Designer' },
];

const columns = [
  {
    accessorKey: 'name', 
    header: 'Name',
  },
  {
    accessorKey: 'age',
    header: 'Age',
  },
  {
    accessorKey: 'job',
    header: 'Job Title',
  },
];
function ListGuests() {
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