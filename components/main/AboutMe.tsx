'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Typewriter from 'typewriter-effect';

function AboutMe() {
    const [ref, inView] = useInView({
        triggerOnce: true
    })
    return (
        <motion.div id="about" className='mt-[50px]'
        >
            <h1 className='text-[40px] font-semibold text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                About Me
            </h1>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className='flex justify-around items-center flex-col md:flex-row '>
                <motion.div>
                    <ul className='Welcome-text text-[20px] list-none md:text-start text-center mb-10'>
                        <motion.li
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
                            className='m-5 flex'><img className='mr-2' src="/programer.png" width={20} height={20}></img>I am a competitive programmer at&ensp;
                            <span className='underline'>
                                <Typewriter
                                    options={{
                                        strings: [' CodeForces', ' AtCoder', ' LeetCode'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>.</motion.li>
                        <motion.li
                            variants={{
                                hidden: { x: -100, opacity: 0 },
                                visible: {
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 1,
                                        duration: 0.5
                                    },
                                },
                            }}
                            className='m-5 flex'><img className='mr-2' src="/std.png" width={20} height={20}></img>I am a student in the Faculty of Computers & Informatics at South Vallay University.</motion.li>
                        <motion.li
                            variants={{
                                hidden: { x: -100, opacity: 0 },
                                visible: {
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 1.5,
                                        duration: 0.5
                                    },
                                },
                            }}
                            className='m-5 flex'><img className='mr-2' src="/soft.png" width={20} height={20}></img>I love to use software to solve any real-life problem.</motion.li>
                        <motion.li
                            variants={{
                                hidden: { x: -100, opacity: 0 },
                                visible: {
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 2,
                                        duration: 0.5
                                    },
                                },
                            }}
                            className='m-5 flex'><img className='mr-2' src="/front.png" width={20} height={20}></img>I’m currently learning Frontend With React.js and Next.js.</motion.li>
                        <motion.li
                            variants={{
                                hidden: { x: -100, opacity: 0 },
                                visible: {
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 2.5,
                                        duration: 0.5
                                    },
                                },
                            }}
                            className='m-5 flex'><img className='mr-2' src="/new.png" width={20} height={20}></img>Always learning new things.</motion.li>
                        <motion.li
                            variants={{
                                hidden: { x: -100, opacity: 0 },
                                visible: {
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 3,
                                        duration: 0.5
                                    },
                                },
                            }}
                            className='m-5 flex'><img className='mr-2' src="/algo.png" width={20} height={20}></img>I love to learn new data structures and algorithm.</motion.li>
                        <motion.li
                            variants={{
                                hidden: { x: -100, opacity: 0 },
                                visible: {
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 3.5,
                                        duration: 0.5
                                    },
                                },
                            }}
                            className='m-5 flex'><img className='mr-2' src="/A.png" width={20} height={20}></img>ACPC Finalist.</motion.li>
                    </ul>
                </motion.div>
                <motion.div
                    variants={{
                        hidden: { x: 100, opacity: 0 },
                        visible: {
                            x: 0,
                            opacity: 1,
                            transition: {
                                delay: 0.0,
                                duration: 0.5,
                            },
                        },
                    }}>
                    <img src="/me.jpg" className='rounded-lg' width={400} height={400}></img>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default AboutMe