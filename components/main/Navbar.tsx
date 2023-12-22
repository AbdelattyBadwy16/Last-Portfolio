import { Socials } from '@/helper'
import Image from 'next/image'
import React from 'react'

export default function Navbar() {
    return (
        <div className='w-full h-[65px] sm:block fixed hidden top-0 shadow-lg shadow-[#2A0E61]/50  bg-[#03001417] backdrop-blur-md z-[5000] px-10 '>
            <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
                <a href="#about" className='h-full w-auto flex flex-row items-center'>
                    <Image
                        src="/NavLogo.png"
                        alt="logoicon"
                        width="70"
                        height="70"
                        className='cursor-pointer hover:animate-slowspin'
                    >
                    </Image>

                    <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
                        Abdelatty Badwy
                    </span>
                </a>
                <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
                    <div className='flex items-center text-gray-50 justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full'>
                        <a href="#about" className='cursor-pointer'>About me</a>
                        <a href="#skills" className='cursor-pointer'>Skills</a>
                        <a href="#projects" className='cursor-pointer'>Projects</a>
                    </div>
                </div>
                <div className='flex flex-row gap-2'>
                    {
                        Socials.map((social) => (
                            <a href={social.link} key={social.name} target='_blank'>
                                <Image
                                    src={social.src}
                                    alt={social.name}
                                    key={social.name}
                                    style={{ borderRadius: '50%' }}
                                    width={24}
                                    height={24}
                                >
                                </Image>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
