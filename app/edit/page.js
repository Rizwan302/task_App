'use client'
import React, { useState } from 'react';
import Link from 'next/link';

export default function Edit() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const changeData = (e) =>{
    const check = e.target.name;
    const new_value = e.target.value;
    if(check === "title"){
      setTitle(new_value)
    }
    else if(check === 'description'){
      setDescription(new_value)
    }
  }

  const handelSubmite = async (e) => {
    try{
      e.preventDefault();
      const data = await fetch("http://localhost:3000/api/addtask", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description }) 
      });
      console.log(data);

    }catch(error){
      console.log(error)
    }
  }



  return (
    <div className=' w-full bg-[url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/architect.svg")]'>
      <div className=' w-11/12 m-auto  h-[100vh]'>


        <div className=" flex text-center snap-center ">
          <Link href="/mainHome">
            <button class="inline-flex items-center bg-blue-300 border-0 py-2 px-2 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-6 h-6">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          </Link>

        </div>

        <form className=' bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col'>
          <div className=''>
            <h1 className=' text-4xl text-blue-700 font-semibold from-transparent text-center'>Add New Task</h1>
          </div>

          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2 text-base">
              Title
            </label>
            <input type="text" name='title' value={title}
              className="flex-grow border border-gray-300 p-2 rounded-l focus:outline-none w-full focus:border-blue-500"
              placeholder="Enter Title..." onChange={changeData}/>

          </div>

          <div className='mt-3'>
            <textarea name="description" value={description} cols="45" rows="8" className=' w-full p-3 border border-gray-300 focus:border-blue-500' placeholder='Enter Task...' onChange={changeData}></textarea>
          </div>

          <button
            type="submit"
            className="md:w-full bg-sky-500 text-white font-bold py-2 px-4 border-b-4 hover:bg-sky-600 border-red-500 hover:border-gray-100 rounded-full mt-7" onClick={handelSubmite}
          >
            Submit
          </button>


        </form>

      </div>
    </div>
  )
}
