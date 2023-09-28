import React from 'react'
import Link from 'next/link'

export default function Firstpage() {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-col">
                    <div className=" mx-auto border-slate-700 w-[60vw]  h-[70vh] flex flex-col justify-center items-center">
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className=" text-center ">
                                <div className=" w-96 h-full rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <img alt="content" className="object-cover object-center h-full w-full rounded-2xl" src="https://i.pinimg.com/564x/1f/3f/4c/1f3f4ce973d946578567f190e2773709.jpg" />
                                </div>

                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left snap-center">
                                <h2 className='text-4xl text-center mb-2'>Productive Mind</h2>
                                <p className="leading-relaxed text-base mb-4 mb-3">With only the features you need, Organic Mind is customized for individuals seeking a stress-free way to stay focused on their goals, projects, and tasks.</p>
                                <div className="text-center">
                                    <Link href="/singup">
                                        <button className="text-black justify-center py-1 rounded inline-flex bg-yellow-500 w-4/5 mx-auto">Get Started</button>
                                    </Link>
                                </div>
                                <p className='text-center my-2'>Already have an account? <Link href="/singin"
                                    className=' text-blue-600'>Sign in
                                </Link></p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
