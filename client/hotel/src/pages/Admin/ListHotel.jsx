import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Table from "../../components/Table";
import { getHotels } from "../../axios/hotelAdmin/hotel.api";
import { useNavigate } from "react-router-dom";
import { createColumnHelper } from "@tanstack/react-table";

//
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
let columns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "logo",
    header: "Logo",
    cell: ({ row }) => (<img src={row.original.logo} className="w-20 h-14" alt="logo" />),
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({row}) => <Button href={`/qr/${row.original.name}`}>Show QR</Button>,
  },
]
function ListHotel() {
  let [data, setData] = useState([]);
  let columnHelper = createColumnHelper()
  
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);

  useEffect(function getHotelList() {
    setError(null);
    setLoading(true);
    getHotels()
      .then((response) => {
        
        console.log(response.data)
        // add action column to show qr code
        console.log(response.data)
        let newData = response?.data?.data?.map((hotel) => {
            return {
              ...hotel,
             
            };
        });
        setData(newData);
        
            })
            .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  let navigate = useNavigate()
  return (
    <div className="w-full h-full bg-quinary p-2">
      <div className="grid grid-cols-1 gap-y-3">
        <div className="grid grid-cols-2 bg-tertiary sm:p-1 md:p-2 lg:p-3 xl:p-4">
          <div>
            <h1 className="text-2xl font-semibold">List of Hotels</h1>
          </div>
          <div className="flex justify-end">
            <Button onClick={
              ()=>{
                navigate("/add")}
            } >Add Hotel</Button>
          </div>
        </div>
        <div>
          <div className="overflow-x-scroll sm:p-0 md:p-2 lg:p-3 xl:p-4">
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500 font-semibold">{error}</p>}
           {!loading && 
            <Table data={data} columns={columns} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListHotel;
