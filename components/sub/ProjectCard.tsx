import Image from 'next/image';
import React from 'react'

interface Props {
    src: string;
    title: string;
    description: string;
    link : string;
}

function ProjectCard({ src, title, description ,link}: Props) {
    return (
        <div className='relative overflow-hidden rounded-lg shadw-lg border z-[1000] border-[#2A0E61]'>
            <img
                src={src}
                alt={title}
                width={100}
                height={100}
                className='w-full object-contain'
            >
            </img>

            <div className='relative p-4'>
                <h1 className='text-2xl font-semibold text-white'>{title}</h1>
                <p className='mt-2 text-gray-300'>{description}<a href={link} target="_blank" className='text-yellow-500 font-bold cursor-pointer'> Show code and live demo .</a></p>
            </div>
        </div>
    )
}

export default ProjectCard