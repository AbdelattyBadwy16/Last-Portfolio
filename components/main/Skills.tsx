import { Backend_skill, Frontend_skill, Full_stack, Other_skill } from '@/helper'
import React from 'react'
import SkillsDataProvider from '../sub/SkillsDataProvider'
import SkillText from '../sub/SkillText'

function Skills() {
    return (
        <div id="skills" className='flex flex-col items-center justify-center gap-3 h-full relative pb-70 overflow-hidden py-20' style={{ transform: 'scale(0.9)' }}>
            <SkillText />
            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {
                    Frontend_skill.map((image, index) => (
                        <SkillsDataProvider
                            src={image.Image}
                            height={image.height}
                            width={image.width}
                            index={index}
                            name = {image.skill_name}
                            key={image.skill_name}
                        >

                        </SkillsDataProvider>
                    ))
                }
            </div>
            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {
                    Backend_skill.map((image, index) => (
                        <SkillsDataProvider
                            src={image.Image}
                            height={image.height}
                            width={image.width}
                            index={index}
                            name = {image.skill_name}
                            key={image.skill_name}
                        >

                        </SkillsDataProvider>
                    ))
                }
            </div>
            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {
                    Full_stack.map((image, index) => (
                        <SkillsDataProvider
                            src={image.Image}
                            height={image.height}
                            width={image.width}
                            index={index}
                            name = {image.skill_name}
                            key={image.skill_name}
                        >

                        </SkillsDataProvider>
                    ))
                }
            </div>
            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {
                    Other_skill.map((image, index) => (
                        <SkillsDataProvider
                            src={image.Image}
                            height={image.height}
                            width={image.width}
                            index={index}
                            name = {image.skill_name}
                            key={image.skill_name}
                        >

                        </SkillsDataProvider>
                    ))
                }
            </div>


            <div className='w-full h-full absolute'>
                <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
                    <video
                        className='w-full h-auto'
                        preload='false'
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/cards-video.webm"
                    >

                    </video>
                </div>
            </div>
        </div>
    )
}

export default Skills