'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

export const HeroContent = () => {
 
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className='flex sm:flex-row flex-col items-center justify-center px-20 mt-40 w-full z-[20]'
        >
            <div className='h-full w-full flex flex-col gap-5 justify-center m-auto sm:items-start items-center text-start'>
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
                    className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
                >
                    <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'></SparklesIcon>
                    <h1 className='Welcome-text text-[13px]'>Software Engineer Portfolio</h1>
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { x: -100, opacity: 0 },
                        visible: {
                            x: 0,
                            opacity: 1,
                            transition: {
                                delay: 0.5,
                                duration: 0.5,
                            },
                        },
                    }}
                    className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
                >
                    <span className='text-center sm:text-start'>
                        
                        <Typewriter
                            options={{
                                strings: ['Abdelatty Badwy', 'Software Enginner' ,'Frontend Developer','Providing the best project experience', 'World'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </motion.div>

                <motion.p
                    variants={{
                        hidden: { x: -100, opacity: 0 },
                        visible: {
                            x: 0,
                            opacity: 1,
                            transition: {
                                delay: 0.8,
                                duration: 0.5,
                            },
                        },
                    }}
                    className='text-lg text-gray-400 my-5 max-w-[600px] text-center sm:text-start'
                >
                    Greetings! I'm Abdelatty Badwy, a 20-year-old computer science student at SVU University.
                    Currently, I'm focusing on becoming a skilled frontend developer and am actively learning React JS ,also have skills in Data Structure,
                    Algorithm, and Problem Solving .
                </motion.p>

                <motion.a
                    variants={{
                        hidden: { x: -100, opacity: 0 },
                        visible: {
                            x: 0,
                            opacity: 1,
                            transition: {
                                delay: 1,
                                duration: 0.5,
                            },
                        },
                    }}
                    className='py-2 button-primary text-center p-5 text-white mb-[50px] cursor-pointer rounded-lg max-w-[200px]'
                    href="https://l.facebook.com/l.php?u=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1Npo-A6PBwcZ5y2xiyTu6UogFGiEkL5fn%2Fview%3Ffbclid%3DIwAR2qXYrnlxFKe9yf9BmcAd5momQ7FjK2stfuGhuH3bn7MZMYCBOM73OLmXk&h=AT0GdyG6NOXEPDDsUQVczDIfp-dHAs3E2JIxp-MZiCztaEQgRRuSuzrlVWTezgrD2_RcCfOkBSxRVyg4LVIRHKq-Ys0WqrEd0rp_jHdY4Fl5dJF6FurDhxjjRuOyYa2II0_8Xg"
                    target="_blank"
                >
                    Download CV
                </motion.a>
            </div>

            <motion.div
                variants={{
                    hidden: { x: 100, opacity: 0 },
                    visible: {
                        x: 0,
                        opacity: 1,
                        transition: {
                            delay: 0.8,
                            duration: 0.5,
                        },
                    },
                }}
                className='w-full h-full flex justify-center items-center'
            >
                <Image
                    src="/mainIconsdark.svg"
                    alt='Image'
                    height={650}
                    width={650}
                />

            </motion.div>
        </motion.div>
    )
}
