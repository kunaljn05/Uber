import React from 'react'
import uberImage from '../../assets/uberImage.jpg'

import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='h-screen w-full flex flex-col'>
        <div className='w-full h-[80%]'>
            <img src={uberImage } className='bg-cover w-full h-full'/>
        </div>
        <div className='w-full h-[20%] bg-white flex justify-center items-center'>
        <div className='flex flex-col items-center gap-2 bg-slate-100'>
            <h2 className='font-bold text-2xl'>Get Started With Uber</h2>
            <Link to={"/login"} className='px-16 py-2 rounded text-white bg-black hover:text-black hover:bg-white border transition-all duration-300 '>Continue</Link>
        </div>
        </div>
    </div>
  )
}

export default Home