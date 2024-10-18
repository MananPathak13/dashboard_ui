import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { role, studentsData, teachersData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


type Student = {
  id: number;
  photo:string;
  studentId:string;
  name:string;
  email?:string;
  phone:string;
  grade:number;
  class:string;
  address:string;
}
const columns = [
  {
    header: "Info",
    accessor: "info"
  },
  {
    header: "Student Id",
    accessor: "student-id",
    className: "hidden md:table-cell"
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell"
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell"
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell"
  },
  {
    header: "Actions",
    accessor: "acions"
  }

]
const StudentListPage = () => {

  const renderRow = (item:Student) =>(
    <tr key={item.id} className='border-b boder-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
      <td className='flex items-center gap-4 p-4'>
        <Image 
        src={item.photo} alt="" 
        width={40} height={40} 
        className='md:hidden xl:block w-10 h-10 rounded-full'/>
        <div className='flex flex-col'>
          <h3 className='font-semibold'>{item.name}</h3>
          <h4 className='text-xs text-gray-500'>{item.class}</h4>
        </div>
      </td>
      <td className='hidden md:table-cell'>{item.studentId}</td>
      <td className='hidden md:table-cell'>{item.grade}</td>
      <td className='hidden md:table-cell'>{item.phone}</td>
      <td className='hidden md:table-cell'>{item.address}</td>

      <td>
        <div className='flex items-center gap-2'>
          <Link href={`/list/teachers/${item.id}`}>
          <button className='w- h-7 flex items-cener justify-center rounded-full bg-lamaSky'>
            <Image src={"/view.png"} alt="view" width={16} height={16}/>          </button>
          </Link>
          {role === "admin" && (
          <Link href={`/list/teachers/${item.id}`}>
        <button className='w- h-7 flex items-cener justify-center rounded-full bg-lamaSky'>
          <Image src={"/delete.png"} alt="delete" width={16} height={16}/>          </button>
        </Link>
      )
      }
        </div>
      </td>
    </tr>
  )

  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/* TOP */}
      <div className='flex items-center justify-between'>
        <h1 className='hidden md:block text-lg font-semibold'>All Students</h1>
        <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
        <TableSearch/>
        <div className='flex items-center gap-4 self-end'>
          <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow'>
            <Image src="/filter.png" alt='filter' width={14} height={14}/>
          </button>
          <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow'>
            <Image src="/sort.png" alt='sort' width={14} height={14}/>
          </button>
          {role==="admin" &&(
          <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaPurple'>
            <Image src="/plus.png" alt='plus' width={14} height={14}/>
          </button>
          )}
        </div>
        </div>
      </div>
      {/* LIST */}
      <div>
        <Table columns={columns} renderRow={renderRow} data={studentsData}/>
      </div>
      {/* PAGINATION */}
      <div>
        <Pagination/>
      </div>
    </div>
  )
}

export default StudentListPage