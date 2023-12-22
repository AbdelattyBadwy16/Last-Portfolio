"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { SparklesIcon } from '@heroicons/react/16/solid'

function SkillText() {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center '>
            <motion.div
                variants={{
                    hidden: { y: -100, opacity: 0 },
                    visible: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            delay: 0.5,
                            duration: 0.5
                        },
                    },
                }}
                className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
            >
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'></SparklesIcon>
                <h1 className='Welcome-text text-[13px]'>Think better with Next js 13</h1>
            </motion.div>
            <motion.div
                variants={{
                    hidden: { x: -100, opacity: 0 },
                    visible: {
                        x: 0,
                        opacity: 1,
                        transition: {
                            delay: 0.5,
                            duration: 0.5
                        },
                    },
                }}
                className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
            >
                Making apps with modern technologies
            </motion.div>
            <motion.div
                variants={{
                    hidden: { x: 100, opacity: 0 },
                    visible: {
                        x: 0,
                        opacity: 1,
                        transition: {
                            delay: 0.5,
                            duration: 0.5
                        },
                    },
                }}
                className='cursive text-[20px] text-gray-200 font-medium mt-[10px] text-center mb-[10px]'
            >
                Never miss a task ,deadline or idea
            </motion.div>
        </div>
    )
}

export default SkillText;