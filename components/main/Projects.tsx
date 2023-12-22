import React from 'react'
import ProjectCard from '../sub/ProjectCard'

function Projects() {
    return (
        <div id="projects" className='flex flex-col items-center justify-center py-20'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                My Projects
            </h1>
            <div className='h-full w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-10  px-10 cursor-pointer'>
                <ProjectCard
                    src="/NovaNook.png"
                    title="Modern React.js Ecommerce"
                    description="Here, we have an e-commerce full-stack project where I'm learning more and more features. 
                    For the implementation, I'm using React, React Redux, various hooks and custom hooks , and tailwind in the frontend.
                     In the backend, I'm utilizing Supabase to create a complete database and manage authentication."
                    link="https://github.com/AbdelattyBadwy16/NovaNook_Store_React"
                />

                <ProjectCard
                    src="/fastpizza.png"
                    title="FastPizza Website"
                    description="This is a website for pizza ordering.
                     You can enter your name, choose the desired orders, specify the priority of the order.For this website, I utilized React, React-Redux, React-Router,
                     various hooks including custom hooks, a Real Restaurant API, and Tailwind foYoutube Clone."
                    link="https://github.com/AbdelattyBadwy16/Fast-Pizza-React"
                />

                <ProjectCard
                    src="/youtube.png"
                    title="Youtube Clone Website"
                    description="Here, I'm using React and RapidAPI to create a 
                    YouTube clone with a lot of features. These features include searching for videos, playing them,
                     filtering videos by type, and displaying channels and their videos. All of this is done using real data from RapidAPI. I'm using technologies such as React, React Router, RapidAPI, 
                    various hooks (including custom hooks), and Tailwind for styling."
                    link="https://github.com/AbdelattyBadwy16/Youtube_Clone_React"
                />

                <ProjectCard
                    src="/GoTrip.png"
                    title="GoTrip Website"
                    description="This is a small project using react to save your trips where you go and have a dynamic map with all counties ."
                    link="https://github.com/AbdelattyBadwy16/GoTrip_Project_React"
                />

                <ProjectCard
                    src="/jawla.jpg"
                    title="jawla Website"
                    description="This is Airline reservation with auth and you can add money by visa to your account and buy a tickt to any trip you need this is implemented by html , css and javascript ."
                    link="https://github.com/AbdelattyBadwy16/GoTrip_Project_React"
                />

                <ProjectCard
                    src="/coffeshop.png"
                    title="Coffe Shop website"
                    description="This is a coffe shop website with beautfull ui and have more feature static shoping card , For the implementation, I'm using html , css , java scrip and bootstrap."
                    link="https://github.com/AbdelattyBadwy16/Coffe-shop"
                />
            </div>
        </div>
    )
}

export default Projects