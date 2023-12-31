import React from 'react'
import cloudLogo from '../Assets/cloud-icon-8.png';
import {AiOutlineBars, AiOutlineCloseCircle} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav);
    }

    const handleClose = () => {
        setNav(!nav)
    };


  return (
    <div className='w-screen h-[80px] z-10 bg-[#f9f9f9] fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
            <h1 className='text-4xl font-bold mr-4 sm:text-3xl flex'> <img src={cloudLogo} className='w-8 mr-2' alt='Cloud-logo'/>Cloud</h1>
            <ul className='hidden md:flex gap-7 font-bold text-2xl px-40'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/support'><li>Support</li></Link>
                <Link to='/platform'><li>Platform</li></Link>
                <Link to='/pricing'><li>Pricing</li></Link>
            </ul>
        </div>

        <div className='hidden md:flex pr-4'>
            <Link to='/log'><button className='border-none bg-black text-white rounded-xl px-5 py-3 mr-4'>Login</button></Link>
            <Link to='/register'><button className='border-none bg-black text-white rounded-xl px-5 py-3 mr-43'>Register</button></Link>
        </div>

        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <AiOutlineBars size={25}/> : <AiOutlineCloseCircle size={25}/>}
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-[#f9f9f9] w-[100%] px-8'} onClick={handleClose}>
        <li className='border-b-2 py-3 border-black-300 w-full'>Home</li>
        <li className='border-b-2 py-3 border-black-300 w-full'>About</li>
        <li className='border-b-2 py-3 border-black-300 w-full'>Support</li>
        <li className='border-b-2 py-3 border-black-300 w-full'>Platform</li>
        <li className='border-b-2 py-3 border-black-300 w-full'>Pricing</li>

        <div className='flex flex-col my-4'>
            <button className='bg-black text-white px-8 py-3 mb-4 rounded-2xl'>Login</button>
            <button className='bg-black text-white px-8 py-3 mb-4 rounded-2xl'>Register</button>
        </div>
      </ul>
    </div>
  )
}

export default Navbar;
