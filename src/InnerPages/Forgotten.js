import React from 'react'

const Forgotten = () => {
  return (
    <div className='w-full p-6 m-auto bg-black rounded-md shadow-md lg:max-w-xl'>
        <h3>Forgotten Password</h3>
      <div className="mt-4">
            <label className="block text-sm font-semibold text-gray-800">Email</label>
                <div className="flex flex-col items-start">
                    <input
                    type="email"
                    name="email"
                    placeholder='Email'
                    className=" font-bold  placeholder:text-black placeholder:px-1 placeholder:font-bold block w-full px-4 py-2 my-6 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 "
                    />
                    <button className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600'>Reset</button>
                </div>
        </div>
    </div>
  )
}

export default Forgotten
