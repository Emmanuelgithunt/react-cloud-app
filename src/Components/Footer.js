import React from 'react'
import { MdFacebook } from "react-icons/md";
import {FaGithubSquare, FaLinkedin, FaTwitter, FaInstagram} from "react-icons/fa";
import { useState } from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    const [Subscribe, setSubscribe] = useState("");

    const submit = (e) => {
        e.preventDefault()
    };

  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-2 px-2'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-5 border-b-2 border-gray-600 py-8'>

        <div>
            <h6 className='font-bold uppercase pt-2'>Solution</h6>
            <ul>
                <li className='py-1'>Marketing</li>
                <li className='py-1'>Analytics</li>
                <li className='py-1'>Commerce</li>
                <li className='py-1'>Data</li>
                <li className='py-1'>Cloud</li>
            </ul>
        </div>

        <div>
            <h6 className='font-bold uppercase pt-2'>Community</h6>
            <ul>
                <li className='py-1'>Marketing</li>
                <li className='py-1'>Analytics</li>
                <li className='py-1'>Commerce</li>
                <li className='py-1'>Data</li>
                <li className='py-1'>Cloud</li>
            </ul>
        </div>

        <div>
            <h6 className='font-bold uppercase pt-2'>Support</h6>
            <ul>
                <li className='py-1'>Marketing</li>
                <li className='py-1'>Analytics</li>
                <li className='py-1'>Commerce</li>
                <li className='py-1'>Data</li>
                <li className='py-1'>Cloud</li>
            </ul>
        </div>

        <div>
            <h6 className='font-bold uppercase pt-2'>Company</h6>
            <ul>
                <li className='py-1'>Marketing</li>
                <li className='py-1'>Analytics</li>
                <li className='py-1'>Commerce</li>
                <li className='py-1'>Data</li>
                <li className='py-1'>Cloud</li>
            </ul>
        </div>

        <div>
            <h6 className='font-bold uppercase pt-2'>Legal</h6>
            <ul>
                <li className='py-1'>Marketing</li>
                <li className='py-1'>Analytics</li>
                <li className='py-1'>Commerce</li>
                <li className='py-1'>Data</li>
                <li className='py-1'>Cloud</li>
            </ul>
        </div>

        <div className='col-span-2 pt-8 mt-8 md:pt-2'>
            <p className='font-bold uppercase'>Subscribe to our newsletter</p>
            <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>

            <form className='flex flex-col sm:flex-row' onSubmit={submit}>
                <input type='email'
                placeholder='Enter email..' 
                className='w-full p-2 mr-4 rounded-md mb-4 text-black font-bold' 
                value={Subscribe} onChange={(e) => 
                setSubscribe(e.target.value)} />
                <button className='p-2 mb-4 bg-black rounded-2xl py-4'>Subscribe</button>
            </form>

        </div>
      </div>

      <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>@{year} Workflow, CLL. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <a href=''><FaGithubSquare/></a>
            <a href=''><FaLinkedin/></a>
            <a href=''><FaTwitter/></a>
            <a href=''><FaInstagram/></a>
            <a href=''>< MdFacebook/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
