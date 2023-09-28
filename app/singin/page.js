'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Singin() {
  const router = useRouter();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")


  const changeData = (e) => {
    const check = e.target.name;
    const new_value = e.target.value;
    if (check === "email") {
      setEmail(new_value)
    } else {
      setPassword(new_value)
    }
  }


  const handelsubmite = async (e) => {
    try {
      e.preventDefault();
      const data = await fetch("http://localhost:3000/api/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }) // Construct the object here
      });

      console.log(data);
      if (data.ok) {
        const responseData = await data.json();
        if (responseData.success) {
          setTimeout(() => {
            // Assuming login is successful
            setMessage('User Successfully Login');
            setEmail('');
            setPassword('');
          }, 2000);

          router.push("/mainHome");
        } else {
          console.error(responseData.error);
        }
      } else {
        console.log("Error during login");
        // Handle other possible errors, such as network issues
      }
    } catch (err) {
      console.log(err);
    }

  }
  return (
    <div>
      <section className="text-gray-600 body-font">
        <p className='  text-black bg-green-600 w-4/5 text-base z-10 text-center m-auto'>{message}</p>

        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className=" mx-auto border-slate-700 w-[60vw]  h-[70vh] flex flex-col justify-center items-center">

            <div className="flex flex-col sm:flex-row mt-10">
              <div className=" text-center ">
                <div className=" w-96 h-full rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img alt="content" className="object-cover object-center h-full w-full rounded-2xl" src="https://i.pinimg.com/564x/1f/3f/4c/1f3f4ce973d946578567f190e2773709.jpg" />
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l bg-gray-100 border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left snap-center">
                <form onSubmit={handelsubmite}>
                  <div className=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto h-full w-full mt-10 md:mt-0">
                    <h2 className="text-blue-900 text-3xl font-semibold  title-font mb-5">SIGN IN FROM</h2>

                    <div className="relative mb-4">
                      <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                      <input type="email" id="email" placeholder='Enter the email' name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={email} onChange={changeData} />
                    </div>
                    <div className="relative mb-4">
                      <label for="full-name" className="leading-7 text-sm text-gray-600">Password</label>
                      <input type="password" id="full-name" placeholder='Enter the password' name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={password} onChange={changeData} />
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sing In</button>
                    <p className="text-sm text-center text-gray-500 mt-3">Create your account?
                      <Link href="/singup"
                        className=' text-blue-600'> Sign up
                      </Link>
                    </p>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
