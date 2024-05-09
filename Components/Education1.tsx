import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import React from "react";
import Image from "next/image";
import Link from "next/link";


const Education1 = () => {
  return (
    <div id="education"  className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem] bg-[#09101a]'">
       <h1 className='heading'>Education </h1> 
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] pt-[2rem] md:pt-[rem] items-center">
        <div>
         
          
        <div className="mb-[3rem] flex items-center md:space-x-10">
          
          <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm">
          
          </span>
          <div className="text-[19px] text-slate-300 w-[80%]">
            {" "}
            
            <h1>
              Lithan <span className="text-yellow-400">Educlass</span> Academy
            </h1>
            <p>Singapore</p>
            <br />
            <h3>Pearson level 3 diploma in IT 2022</h3>
            <p className="text-yellow-400">(finished)</p>
            <h3>Pearson level4 diploma in IT 2023</h3>{" "}
            <p className="text-yellow-400">(finished)</p>
            <br />
          </div>
        </div>
        <div className="mb-[3rem] flex items-center md:space-x-10">
          <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>

          <h3 className="text-[19px] text-slate-300 w-[80%]">
            Pearson level 5 Higher National Diploma in Computing (application
            development)
          </h3>
          <p className="text-yellow-400">(current)</p>
        </div>
        </div>
        <div
          data-aos="fade-left"
          className=" mx-auto md:mx-0 mt-[2rem] lg:mt-0 w-[100px] h-[200px] relative"
        >
          <Image
            src="/images/edu.jpg"
            alt="user"
            fill
            className="relative z-[11] 
                    object-contain"
          />
         
        </div>
      </div>
    </div>
  );
};

export default Education1;
