import React from 'react'
import Header from '../components/heard/header'
import Link from 'next/link'

export default function MainHome() {
  return (
    <div>
      <Header />

      <div className=''>
        <h1 className=' text-4xl mt-6 w-4/5 m-auto font-bold'>Sticky Wall</h1>

        <div className=" mt-16 w-11/12 m-auto flex flex-wrap">

          <div className=" bg-slate-300 w-72 p-5 m-3 rounded">
            <h1 className=' text-xl font-medium'>My Name IS Hello</h1>
            <p className=' mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla minus itaque corrupti labore et autem provident officiis vitae ipsum dolores saepe, voluptate praesentium ex non neque sequi. Quasi, itaque omnis.</p>
          </div>
          <div className=" bg-slate-300 w-72 p-5 m-3 rounded">
            <h1 className=' text-xl font-medium'>My Name IS Hello</h1>
            <p className=' mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla minus itaque corrupti labore et autem provident officiis vitae ipsum dolores saepe, voluptate praesentium ex non neque sequi. Quasi, itaque omnis.</p>
          </div>
          <div className=" bg-slate-300 w-72 p-5 m-3 rounded">
            <h1 className=' text-xl font-medium'>My Name IS Hello</h1>
            <p className=' mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla minus itaque corrupti labore et autem provident officiis vitae ipsum dolores saepe, voluptate praesentium ex non neque sequi. Quasi, itaque omnis.</p>
          </div>
          <div className=" bg-slate-300 w-72 p-5 m-3 rounded">
            <h1 className=' text-xl font-medium'>My Name IS Hello</h1>
            <p className=' mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla minus itaque corrupti labore et autem provident officiis vitae ipsum dolores saepe, voluptate praesentium ex non neque sequi. Quasi, itaque omnis.</p>
          </div>
          <div className=" bg-slate-300 w-72 p-5 m-3 rounded">
            <h1 className=' text-xl font-medium'>My Name IS Hello</h1>
            <p className=' mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla minus itaque corrupti labore et autem provident officiis vitae ipsum dolores saepe, voluptate praesentium ex non neque sequi. Quasi, itaque omnis.</p>
          </div>


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
