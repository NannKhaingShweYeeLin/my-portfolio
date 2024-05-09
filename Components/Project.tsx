import React from 'react'
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
    return (
        <div id="project" className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
                <div>
                    <h1 className='heading'>
                        Proj <span className='text-yellow-400'>ect</span>
                    </h1>
                    {/* <h2 className="text-[15px] md:text-[20px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
          MERN PROJECT <span className="text-yellow-400"></span>
        </h2> */}
                    <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">
                        MERN PROJECT
                    </h1>
                    <div className="mb-[3rem] flex items-center md:space-x-10">
                        <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
                        <p className="text-[19px] text-slate-300 w-[80%]">
                            {" "}
                            In this project, we are developing a user management system where Users are categorized as Employees, Managers, or 
                            Admins. Managers/Admins can delete notes; anyone can create them. Employees can only view/edit assigned notes. 
                            Managers/Admins have full note control and exclusive access to User Settings. Using MongoDB, Express.js, Node.js,
                             and React.js, I handle both frontend and backend aspects.
                        </p>
                    </div>



                    <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                        <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
                            <Link href="https://github.com/NannKhaingShweYeeLin/technotes"><p>Github Link Frontend</p></Link>

                        </button>
                        <button className='flex items-center space-x-2 px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black'>
                            <Link href="https://github.com/NannKhaingShweYeeLin/technotes-api"><p>Github Link Backend </p></Link>

                        </button>
                        <button className='flex items-center space-x-2 px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black'>
                            <Link href="https://mern-blush-mu.vercel.app/"><p>Demo </p></Link>
                        </button>
                    </div>

                </div>
                <div
                    data-aos="fade-left"
                    className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative"
                >
                    <Image
                        src="/images/mern.PNG"
                        alt="user"
                        fill
                        className="relative z-[11] w-[100%] h-[100%]
                  object-contain"
                    />
                    {/* <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div> */}
                </div>
            </div>
            <br /><br /><br />

            <div className='container'>
                &nbsp; &nbsp; &nbsp;
            </div>

           

            {/* 4rd */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
                <div>

                    {/* <h2 className="text-[15px] md:text-[20px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
          MERN PROJECT <span className="text-yellow-400"></span>
        </h2> */}
                    <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">
                        SHOPPING CART APP
                    </h1>
                    <div className="mb-[3rem] flex items-center md:space-x-10">
                        <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
                        <p className="text-[19px] text-slate-300 w-[80%]">
                            {" "}
                            This is a shopping cart app, user can add to cart the item. also can see the amount of the item which is in card. It is created with reactjs , html and css.
                        </p>
                    </div>



                    <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                        <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
                            <Link href="https://github.com/NannKhaingShweYeeLin/shopping-cart-app"><p>Github Link </p></Link>
                        </button>
                        <button className='flex items-center space-x-2 px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black'>
                            <Link href="https://shoppingcart-beryl-omega.vercel.app/"><p>Demo </p></Link>
                        </button>

                    </div>

                </div>
                <div
                    data-aos="fade-left"
                    className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative"
                >
                    <Image
                        src="/images/shopping cart.PNG"
                        alt="user"
                        fill
                        className="relative z-[11] w-[100%] h-[100%]
                  object-contain"
                    />
                    {/* <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div> */}
                </div>
            </div>

            {/* 5th */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
                <div>

                    {/* <h2 className="text-[15px] md:text-[20px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
          MERN PROJECT <span className="text-yellow-400"></span>
        </h2> */}
                    <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">
                        FOOD RECIPE APP
                    </h1>
                    <div className="mb-[3rem] flex items-center md:space-x-10">
                        <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
                        <p className="text-[19px] text-slate-300 w-[80%]">
                            {" "}
                            This project is a food receipe app that utilizes API integration to fetch and display various recipes. The app allows
                            users to search for recipes based on ingredes, cuisine types, or dietary restrictions. Userscan view detailed
                            recipe information, including ingredients, instructions and nutitional facts. The app also provides a feature to 
                            save favorite recipes for future reference. It is built using HTML, CSS and JavaScript for the frontend API integration for fetching recipe data.
                        </p>
                    </div>



                    <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                        <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
                            <Link href="https://github.com/NannKhaingShweYeeLin/food-receipe-app"><p>Github Link </p></Link>
                        </button>
                        <button className='flex items-center space-x-2 px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black'>
                            <Link href="https://food-zeta-seven.vercel.app/"><p>Demo </p></Link>
                        </button>

                    </div>

                </div>
                <div
                    data-aos="fade-left"
                    className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative"
                >
                    <Image
                        src="/images/foo.PNG"
                        alt="user"
                        fill
                        className="relative z-[11] w-[100%] h-[100%]
                  object-contain"
                    />
                    {/* <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div> */}
                </div>
            </div>

            {/* 6th */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
                <div>

                    {/* <h2 className="text-[15px] md:text-[20px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
          MERN PROJECT <span className="text-yellow-400"></span>
        </h2> */}
                    <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">
                        EXPENSE-TRACKER-APP
                    </h1>
                    <div className="mb-[3rem] flex items-center md:space-x-10">
                        <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
                        <p className="text-[19px] text-slate-300 w-[80%]">
                            {" "}
                            EXPENSE-TRACKER-APP is a dynamic expense tracker app that lets you seamlessly add income and expenses while providing clear insights through 
                            interactive pie charts. Crafted with React.js for dynamic functionality and styled with HTML and CSS for a sleek user 
                            interface,  simplifies financial tracking, putting you in control of your finances with ease.
                        </p>
                    </div>



                    <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                        <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
                            <Link href="https://github.com/NannKhaingShweYeeLin/Expense-Tracker-React"><p>Github Link </p></Link>
                        </button>
                        <button className='flex items-center space-x-2 px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black'>
                            <Link href="https://expense-delta-sage.vercel.app/"><p>Demo </p></Link>
                        </button>

                    </div>

                </div>
                <div
                    data-aos="fade-left"
                    className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative"
                >
                    <Image
                        src="/images/expense.PNG"
                        alt="user"
                        fill
                        className="relative z-[11] w-[100%] h-[100%]
                  object-contain"
                    />
                    {/* <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div> */}
                </div>
            </div>

            {/* 7th */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
                <div>

                    {/* <h2 className="text-[15px] md:text-[20px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
          MERN PROJECT <span className="text-yellow-400"></span>
        </h2> */}
                    <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">
                        ABC LEARNING CENTER
                    </h1>
                    <div className="mb-[3rem] flex items-center md:space-x-10">
                        <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
                        <p className="text-[19px] text-slate-300 w-[80%]">
                            {" "}
                        ABC Learning Center is LinkedIn LinkedIn structure, offering a user-friendly interface crafted with HTML and CSS. 
                        Dive into classes, manage schedules, and embark on a journey of professional growth effortlessly.
                        </p>
                    </div>



                    <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                        <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
                            <Link href="https://github.com/NannKhaingShweYeeLin/ABC-Learning-Center"><p>Github Link </p></Link>
                        </button>
                        <button className='flex items-center space-x-2 px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black'>
                            <Link href="https://abc-eight-peach.vercel.app/"><p>Demo </p></Link>
                        </button>

                    </div>

                </div>
                <div
                    data-aos="fade-left"
                    className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative"
                >
                    <Image
                        src="/images/11.PNG"
                        alt="user"
                        fill
                        className="relative z-[11] w-[100%] h-[100%]
                  object-contain"
                    />
                    {/* <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div> */}
                </div>
            </div>

            {/* 8th */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
                <div>

                    {/* <h2 className="text-[15px] md:text-[20px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
          MERN PROJECT <span className="text-yellow-400"></span>
        </h2> */}
                    <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">
                        BOOK STORE  MERN PROJECT
                    </h1>
                    <div className="mb-[3rem] flex items-center md:space-x-10">
                        <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
                        <p className="text-[19px] text-slate-300 w-[80%]">
                            {" "}
                            This project involves the creation of a bookstore platform enabling users to create, 
                            edit, and delete entries, which are displayed using a card-based interface. Utilizing 
                            MongoDB for data storage and retrieval, alongside Express.js, Node.js, and React.js,
                             the project ensures seamless functionality and user experience. My responsibilities
                              encompass both frontend and backend development.
                        </p>
                    </div>


                    <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                        <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
                            <Link href="https://github.com/NannKhaingShweYeeLin/Book-Store-MERN-Stack"><p>Github Link </p></Link>
                        </button>
                        <button className='flex items-center space-x-2 px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black'>
                            <Link href=""><p>Demo </p></Link>
                        </button>

                    </div>

                </div>
                <div
                    data-aos="fade-left"
                    className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative"
                >
                    <Image
                        src="/images/book.png"
                        alt="user"
                        fill
                        className="relative z-[11] w-[100%] h-[100%]
                  object-contain"
                    />
                    {/* <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div> */}
                </div>
            </div>

            {/* 9th */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
                <div>

                    {/* <h2 className="text-[15px] md:text-[20px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
          MERN PROJECT <span className="text-yellow-400"></span>
        </h2> */}
                    <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">
                        CALCULATOR PROJECT
                    </h1>
                    <div className="mb-[3rem] flex items-center md:space-x-10">
                        <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
                        <p className="text-[19px] text-slate-300 w-[80%]">
                            {" "}
                            CALCULATOR PROJECT is a sleek and efficient calculator application built using React.js, HTML, and CSS.
                             With its intuitive interface and responsive design, performing calculations becomes a
                              breeze. Whether you are crunching numbers for work, school, or everyday tasks, offers 
                              a seamless user experience that simplifies mathematical operations.
                        </p>
                    </div>



                    <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                        <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
                            <Link href="https://github.com/NannKhaingShweYeeLin/Calculator"><p>Github Link </p></Link>
                        </button>
                        <button className='flex items-center space-x-2 px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black'>
                            <Link href="https://calculator1-liard.vercel.app/"><p>Demo </p></Link>
                        </button>

                    </div>

                </div>
                <div
                    data-aos="fade-left"
                    className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative"
                >
                    <Image
                        src="/images/calc.PNG"
                        alt="user"
                        fill
                        className="relative z-[11] w-[100%] h-[100%]
                  object-contain"
                    />
                    {/* <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div> */}
                </div>
            </div>

            {/* 10tth */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
                <div>

                    {/* <h2 className="text-[15px] md:text-[20px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
          MERN PROJECT <span className="text-yellow-400"></span>
        </h2> */}
                    <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">
                        DuBo-Martial-Arts
                    </h1>
                    <div className="mb-[3rem] flex items-center md:space-x-10">
                        <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
                        <p className="text-[19px] text-slate-300 w-[80%]">
                            {" "}
                            DuBo-Martial-Arts is a one of the GYM website, users can choose packages of the classes and have instructors on each classes.
                            In this project i am frontend part also created with HTML, CSS and JS.
                        </p>
                    </div>



                    <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                        <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
                            <Link href="https://nannkhaingshweyeelin.github.io/DuBo-Martial-Arts/"><p>Github Link </p></Link>
                        </button>
                        <button className='flex items-center space-x-2 px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black'>
                            <Link href="https://dubo-one.vercel.app/"><p>Demo </p></Link>
                        </button>

                    </div>

                </div>
                <div
                    data-aos="fade-left"
                    className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative"
                >
                    <Image
                        src="/images/dubo.JPG"
                        alt="user"
                        fill
                        className="relative z-[11] w-[100%] h-[100%]
                  object-contain"
                    />
                    {/* <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div> */}
                </div>
            </div>


 {/* 2nd */}
 

            {/* 3rd */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
                <div>

                    {/* <h2 className="text-[15px] md:text-[20px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
          MERN PROJECT <span className="text-yellow-400"></span>
        </h2> */}
                    <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">
                        Food Order
                    </h1>
                    <div className="mb-[3rem] flex items-center md:space-x-10">
                        <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
                        <p className="text-[19px] text-slate-300 w-[80%]">
                            {" "}
                            This is a food recipe app like user can choose the recipe and shop can add and remove then
                            have cart totals, can delivery, can see cart totals of delivery and item.It is only frontend part. It is created with react js, html ,and css.
                        </p>
                    </div>



                    <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                        <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
                            <Link href="https://github.com/NannKhaingShweYeeLin/mealdel"><p>Github Link </p></Link>
                        </button>
                        <button className='flex items-center space-x-2 px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black'>
                            <Link href=""><p>Demo </p></Link>
                        </button>

                    </div>

                </div>
                <div
                    data-aos="fade-left"
                    className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative"
                >
                    <Image
                        src="/images/shop.jpg"
                        alt="user"
                        fill
                        className="relative z-[11] w-[100%] h-[100%]
                  object-contain"
                    />
                    {/* <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div> */}
                </div>
            </div>

            {/* 14 */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
                <div>

                    {/* <h2 className="text-[15px] md:text-[20px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
          MERN PROJECT <span className="text-yellow-400"></span>
        </h2> */}
                    <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">
                        QUIZ PROJECT
                    </h1>
                    <div className="mb-[3rem] flex items-center md:space-x-10">
                        <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
                        <p className="text-[19px] text-slate-300 w-[80%]">
                            {" "}
                            Quiz is a dynamic quiz application crafted with React.js, Vite, HTML, and CSS,
                             designed to stimulate your intellect and foster interactive learning. Dive into
                              a world of knowledge with our vast array of quizzes, covering diverse topics and 
                              subjects. With its responsive design and intuitive interface,  offers a seamless 
                              experience across devices, ensuring engagement anytime, anywhere. Challenge yourself,
                               track your progress, and expand your horizons with Quiz.
                        </p>
                    </div>



                    <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                        <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
                            <Link href="https://github.com/NannKhaingShweYeeLin/Quiz"><p>Github Link </p></Link>
                        </button>
                        <button className='flex items-center space-x-2 px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black'>
                            <Link href="https://quiz1-ochre.vercel.app/"><p>Demo </p></Link>
                        </button>

                    </div>

                </div>
                <div
                    data-aos="fade-left"
                    className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative"
                >
                    <Image
                        src="/images/quiz.PNG"
                        alt="user"
                        fill
                        className="relative z-[11] w-[100%] h-[100%]
                  object-contain"
                    />
                    {/* <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div> */}
                </div>
            </div>
        </div>

        // 2nd

    )
}

export default Project
