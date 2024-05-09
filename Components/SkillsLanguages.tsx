import Image from 'next/image';
import React from 'react';

interface Props {
    skill1: string;
    skill2: string;
    skill3: string;
    skill4: string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    level1: string;
    level2: string;
    level3: string;
    level4: string;
}

const SkillsLanguages = ({
    level1,
    level2,
    level3,
    level4,
    skill1,
    skill2,
    skill3,
    skill4,
    image1,
    image2,
    image3,
    image4,
}: Props) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mx-auto gap-[2rem] items-center'>
            <div className='relative mb-[2rem] hover:scale-110 transform transition-all duration-300 hover:-rotate-6 '>

                <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[10px] font-bold'>
                    {skill1}
                    <Image data-aos="fade-left" src={image1} alt={skill1} width={50} height={50} className='rounded-full' />
                </h1>
                <span className={`${level1} bottom-0 h-[6px] absolute bg-[#55e6a5] `}></span>
                {/* <span
          className={`block  w-full h-full absolute top-0 left-0 bg-[#55e6a5] transition-all duration-400 ease-in-out ${
            level1 === 'progress-bar' ? 'w-0' : 'w-full'
          }`}
        ></span> */}
            </div>

            <div className='relative mb-[2rem] hover:scale-110 transform transition-all duration-300 hover:-rotate-6'>

                <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[10px] font-bold'>
                    {skill2} <Image data-aos="fade-left" src={image2} alt={skill2} width={50} height={50} className='rounded-full' />
                </h1>
                <span className={`${level2} bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span>

            </div>

            <div className='relative mb-[2rem] hover:scale-110 transform transition-all duration-300 hover:-rotate-6 w-[100%]'>

                <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[10px] font-bold'>
                    {skill3} <Image src={image3} data-aos="fade-left" alt={skill3} width={50} height={50} className='rounded-full' />
                </h1>
                <span className={`${level3} bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span>

            </div>

            <div className='relative mb-[2rem] hover:scale-110 transform transition-all duration-300 hover:-rotate-6 '>

                <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[10px] font-bold'>
                    {skill4} <Image src={image4} data-aos="fade-left" alt={skill4} width={50} height={50} className='rounded-full' />
                </h1>
                <span className={`${level4} bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span>

            </div>
        </div>
    );
};

export default SkillsLanguages;
