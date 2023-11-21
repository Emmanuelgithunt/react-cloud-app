import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div className="w-full p-6 m-auto bg-black rounded-md shadow-md lg:max-w-xl">
                <div>
                    <a href="/">
                        <h3 className="text-3xl font-semibold text-center text-purple-700 underline">
                            Sign Up
                        </h3>
                    </a>
                </div>
                    <form>
                        <div>
                          <label className="block text-sm font-semibold text-gray-800">Name</label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='Name'
                                    className="font-bold  placeholder:text-black placeholder:px-1 placeholder:font-bold block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm font-semibold text-gray-800">Email</label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Email'
                                    className="font-bold  placeholder:text-black placeholder:px-1 placeholder:font-bold block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm font-semibold text-gray-800">Password</label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder='Password'
                                    className=" font-bold  placeholder:text-black placeholder:px-1 placeholder:font-bold block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm font-semibold text-gray-800">Confirm Password</label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    placeholder='Confirm Password'
                                    className=" font-bold  placeholder:text-black placeholder:px-1 placeholder:font-bold block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                            >
                                Register
                            </button>
                        </div>
                        <Link to='/log' className="font-medium text-purple-600 hover:underline py-2 px-4 items-center">Already Registered</Link>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Register
