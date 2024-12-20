import Button from "../../components/Button"
import Table from "../../components/Table"

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

function ListHotel() {
  return (
    <div className="w-full h-full bg-quinary p-2">
        <div className="grid grid-cols-1 gap-y-3">
          <div className="grid grid-cols-2 bg-tertiary sm:p-1 md:p-2 lg:p-3 xl:p-4">
            <div>
              <h1 className="text-2xl font-semibold">List of Hotels</h1>
            </div>
            <div className="flex justify-end">
             <Button>Add Hotel</Button>
            </div>
          </div>
          <div>
            <div className="overflow-x-scroll sm:p-0 md:p-2 lg:p-3 xl:p-4">
              <Table data={data} columns={columns} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default ListHotel