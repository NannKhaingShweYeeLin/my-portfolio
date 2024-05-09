import { CodeBracketIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Services = () => { 
  return (
    <div  className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
        <p className='heading'>
        My  <span className='text-yellow-400'>Services</span></p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
        <div data-aos="fade-right">
            <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
            uppercase font-semibold text-center p-[2rem]'>
                <CodeBracketIcon  className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Frontend</h1>
                <p className='text-[15px] text-[#d3d2d2] font-normal'>
                Frontend development services revolve around crafting engaging user experiences through intuitive interfaces and visually appealing designs. 
                Specializing in HTML, CSS, and JavaScript,Next Js, React JS I create responsive layouts and interactive features to enhance user engagement. Whether for websites
                 or applications, seamless integration and optimal performance across various devices and platforms are guaranteed
                    </p>
            </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
            <div className='bg-orange-700 hover:scale-110 transform transition-all duration-300 
            uppercase font-semibold text-center p-[2rem]'>
                <RocketLaunchIcon  className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Backend</h1>
                <p className='text-[15px] text-[#d3d2d2] font-normal'>
                Backend development involves building the server-side components of a website or application, handling data storage,
                 processing, and ensuring smooth functionality. Our backend development services include designing robust architectures 
                 and implementing scalable solutions using languages like  Node.js, and Spring Boot.
                 Tools used are Postman, MYSQL and MongoDB.
            </p>
            </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="500">
            <div className='bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
            uppercase font-semibold text-center p-[2rem]'>
                <CommandLineIcon  className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>UI/UX Design</h1>
                <p className='text-[15px] text-[#d3d2d2] font-normal'>
                For UI/UX design, we focus on creating seamless and intuitive user interfaces that enhance user satisfaction and engagement. Our UI/UX design
                 services encompass wireframing, prototyping, and visual design, ensuring a cohesive and visually appealing user experience across all platforms and devices.
                 Using Tools like Figma, WordPress and Axure RP.
                    </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Services