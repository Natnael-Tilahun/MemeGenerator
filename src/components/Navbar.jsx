import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-gradient-to-r from-[#601c79] to-[#A626D3] h-16 text-white flex justify-between items-center px-4 gap-3 md:px-16'>
        <div className='flex gap-1'>
            <img src='/TrollFaceLogo.png' className='w-8' />
            <h1 className='text-lg font-bold'>Meme Generator</h1>
        </div>
   
        <h1>React Course - Project 4</h1>
    </div>
  )
}

export default Navbar