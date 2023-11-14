import React from 'react'
import {BsCheck2} from 'react-icons/bs'

const HeroPage5 = () => {
  return (
    <div className='w-full text-white my-2 rounded-t-[50px] bg-indigo-600'>
      <div className='max-w-[800px] bg-slate-900 absolute min-blend-overlay'></div>


      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='text-center py-8 text-slate-300'>
            <h2 className='text-3xl uppercase'>Pricing</h2>
            <h3 className='text-5xl font-bold text-white py-8'>The right price for your research</h3>
            <p className='text-3xl'>Reimagined digital asset management (DAM) to meet the unique needs of today focusing on flexible, intelligent automation, and scale.</p>
        </div>

        <div className='grid md:grid-cols-3'>

            <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>

                <div>
                    <p className='text-6xl py-4 font-bold flex'> &#x20A6;12000<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                </div>

                <div>
                    <p className='text-xl py-8 text-slate-500'>Extend your team's digital media capabilities for websites apps
                    </p>

                    <div className='text-xl'>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'><BsCheck2/></span>Upload widget, API, and search</p>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'><BsCheck2/></span>Remote fetch, auto-backup, and revision tracking</p>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'><BsCheck2/></span>Image and video transformations</p>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'><BsCheck2/></span>Video transcoding and adaptive streaming</p>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'><BsCheck2/></span>High performance delivery through a CDN</p>
                        <button className='w-full py-4 my-4 bg-slate-900 text-white rounded-2xl'>Get started</button>
                    </div>
                </div>
            </div>

            <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>PREMIUM</span>

                <div>
                    <p className='text-6xl py-4 font-bold flex'> &#x20A6;12000<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                </div>

                <div>
                    <p className='text-xl py-8 text-slate-500'>Delivery engaging visual experiences with advanced features and functionality. </p>

                    <div className='text-xl'>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'><BsCheck2/></span>Custom domain (CNAME) support</p>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'><BsCheck2/></span>Optional HTTPS SSL Certificate</p>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'><BsCheck2/></span>Authentication Options</p>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'><BsCheck2/></span>Remote fetch, auto-backup, and revision tracking</p>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'><BsCheck2/></span>High performance delivery through a CDN</p>
                        <button className='w-full py-4 my-4 bg-slate-900 text-white rounded-2xl'>Get started</button>
                    </div>
                </div>
            </div>

            <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>

                <div>
                    <p className='text-6xl py-4 font-bold flex'> &#x20A6;18000<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                </div>

                <div>
                    <p className='text-xl py-8 text-slate-500'>Extend your team's digital media capabilities for websites apps
                    </p>

                    <div className='text-xl'>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'><BsCheck2/></span>Upload widget, API, and search</p>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'><BsCheck2/></span>Remote fetch, auto-backup, and revision tracking</p>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'><BsCheck2/></span>Image and video transformations</p>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'><BsCheck2/></span>Video transcoding and adaptive streaming</p>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'><BsCheck2/></span>High performance delivery through a CDN</p>
                        <button className='w-full py-4 my-4 bg-slate-900 text-white rounded-2xl'>Get started</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPage5
