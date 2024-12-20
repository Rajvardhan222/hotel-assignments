import React from 'react';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';

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

function Table() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

return (
    <div className="p-4">
        <table className="min-w-full bg-quinary border ">
            <thead className="bg-secondary text-quinary">
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th key={header.id} className="px-4 py-2 border-b  text-left text-sm font-medium text-quinary">
                                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id} className=" bg-tertiary hover:bg-quinary ">
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id} className="px-4 py-2 border-b border-primary  text-sm text-gray-700">
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
            <button
                className={`px-4 py-2 bg-secondary text-white rounded disabled:opacity-50 ${table.getCanPreviousPage() ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
            >
                Previous
            </button>
            <span className="text-sm text-gray-700">
                Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            </span>
            <button
                className={`px-4 py-2 bg-secondary text-white rounded disabled:opacity-50 ${table.getCanNextPage() ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
            >
                Next
            </button>
        </div>
    </div>
);
}

export default Table;
