"use client";
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';

function Encryption() {
  return (
    <div className='flex flex-row relative items-center justify-center min-h-screen sm:text-center w-full h-full'>
      <div className='absolute text-gray-50 w-auto top-0 z-[5]'>
        <motion.div
          variants={{
            hidden: { y: -100, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5
              },
            },
          }}
          className='text-[40px] w-auto h-auto top-0 z-[5] text-center sm:text-start'
        >

          Performance
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> & </span>
          Security

        </motion.div>
      </div>
      <div className='flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto'>
        <div className='flex flex-col items-center group cursor-pointer w-auto h-auto'>
          <Image
            src="/LockTop.png"
            alt="lock"
            width={50}
            height={50}
            className='translate-y-5 translate-all duration-200 group-hover:translate-y-11'
          ></Image>
          <Image
            src="/LockMain.png"
            alt="lock"
            width={70}
            height={70}
            className='z-10'
          ></Image>
        </div>
        <div className='Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9]'>
          <h1 className='Welcome-text text-[12px]'>Encryption</h1>
        </div>
      </div>

      <div className="cursive text-[20px] font-medium text-center text-gray-300">
         Don`t worry about Secure and Performance 
      </div>

      <div className='w-full flex items-start justify-center absolute'>
        <video
          loop
          muted
          autoPlay
          preload='false'
          playsInline
          className='w-full h-auto'
          src='/encryption.webm'
        >

        </video>
      </div>
    </div>
  )
}

export default Encryption