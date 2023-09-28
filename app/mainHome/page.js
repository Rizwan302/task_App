'use client'
import React, { useEffect, useState } from 'react'
import Header from '../components/heard/header'
import Link from 'next/link'
import { RiDeleteBinLine } from 'react-icons/ri';
import { GrEdit } from 'react-icons/gr';



export default function MainHome() {
  const [data, setData] = useState({});

  const fatchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/showtask");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleDelete = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/deletetask/${taskId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error("Delete request failed");
      }

      // Update the UI by removing the deleted task from the data array
      setData((prevData) => prevData.filter((item) => item._id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  useEffect(() => {
    fatchData()
  }, [])
  return (
    <div>
      <Header />

      <div className=''>
        <h1 className=' text-4xl mt-6 w-4/5 m-auto font-bold'>Sticky Wall</h1>

        <div className=" mt-16 w-11/12 m-auto flex flex-wrap">

          {Array.isArray(data) ? (
            data.map((item) => (
              <div className=" bg-indigo-200 w-72 p-5 m-3 rounded" key={item._id}>
                <div className=' w-full justify-end snap-end text-right'>
                  <button className=' bg-red-500 p-3 mr-2 text-white rounded-full' onClick={() => handleDelete(item._id)}>
                    <RiDeleteBinLine />
                  </button>
                  <Link href='/edit'>
                    <button className='bg-green-500 p-3 text-white rounded-full'>
                      <GrEdit />
                    </button>
                  </Link>
                </div>
                <h1 className=' text-xl font-medium'>{item.title}</h1>
                <p className=' mt-2'>{item.description}</p>
                <p className=' mt-5 text-sm'>{item.time} & {item.day}</p>
              </div>
            ))
          ) : (
            <p className=' text-center text-9xl text-sky-600'>No data available</p>
          )}



          {/* ================== Edit Card ================ */}
          <div className="bg-slate-300 w-72 p-5 m-3 rounded">
            <Link href="/edit">
              <div className="flex justify-center items-center h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-24 h-24 text-gray-600"
                  viewBox="0 0 24 24">
                  <path d="M12 5v14M5 12h14"></path>
                </svg>
              </div>
            </Link>
          </div>
          {/* ================== Edit Card End ================ */}


        </div>
      </div>
    </div>
  )
}
