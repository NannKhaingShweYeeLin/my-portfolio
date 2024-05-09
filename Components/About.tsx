import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Transforming <span className="text-yellow-400">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              {" "}
              I specialize in crafting attractive, functional websites using HTML, CSS, and JavaScript. With a background in web development since 2021,
               I focus on creating seamless user experiences across all devices and continuously updating my skills to stay ahead in the field.
            </p>
          </div>
          <button
            className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px]
                     font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
          >
            <Link href="https://docs.google.com/document/d/14nHBk53iM1gVV0BxJyB074mMByR7DUK9/edit?usp=sharing&ouid=101576735491303452656&rtpof=true&sd=true">
              <p>Download Cv</p>
            </Link>
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
          </button>
        </div>
        <div
          data-aos="fade-left"
          className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative"
        >
          <Image
            src="/images/he.jpg"
            alt="user"
            fill
            className="relative z-[11] w-[100%] h-[100%]
                    object-contain"
          />
          <div className="absolute w-[100%] h-[80%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
