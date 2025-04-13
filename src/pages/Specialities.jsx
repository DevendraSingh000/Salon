import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Specialities() {
    const sectionRef = useRef([]);
    
      useEffect(() => {
        gsap.fromTo(
          sectionRef.current,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay:0.5,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 90%',
              end: 'bottom 60%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }, []);

    const img = [
        {
            btnPath: "",
            path: "https://framerusercontent.com/images/2IgCXVRzriu0Hlp2nVu8YqiiFHo.webp",
            heading: "HAIRCUT AND HAIRSTYLING"
        },
        {
            btnPath: "",
            path: "https://framerusercontent.com/images/4hlgjepkDTmiXF9ycqCdFgbmMyU.webp",
            heading: "BEARD STYLING"
        },
        {
            btnPath: "",
            path: "https://framerusercontent.com/images/kNIKoWIJTyhtfTowh6rfNgWXk.webp",
            heading: "GROOMING AND SINCARE"
        },
        {
            btnPath: "",
            path: "https://framerusercontent.com/images/bKJ1plX05rPtdk3fiojUjJcdpms.webp",
            heading: "COLOR &TREATMENT"
        },
    ]
    return (
        <>
            <div className='bg-[#141414] w-full h-full px-4 md:px-10 lg:px-20'>
                <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center py-10 md:py-16 gap-6'>
                    <div>
                        <p ref={(el) => (sectionRef.current[0] = el)} className='text-[#FF8442] text-xs md:text-sm tracking-widest'>OUR MAIN SERVICES</p>
                        <p ref={(el) => (sectionRef.current[1] = el)} className='text-white text-2xl md:text-3xl lg:text-4xl font-sans'>OUR SPECIALITIES</p>
                    </div>
                    <div ref={(el) => (sectionRef.current[2] = el)} className='w-full lg:w-2/4 text-white text-sm md:text-base'>
                        <p >Our team of expert barbers brings together passion, skill, and dedication to elevate your grooming experience. </p>
                    </div>
                </div>
            </div>

            <div className='images bg-[#141414] gap-6 md:gap-10 xl:gap-14 grid grid-cols-1 sm:grid-cols-2 px-4 md:px-10 lg:px-16 pb-10'>
                {
                    img.map((item, i) => {
                        return (
                            <div ref={(el) => (sectionRef.current[i+3] = el)} className='relative bg-white h-full group' key={i}>
                                <Link to={item.btnPath}>
                                    <button className='absolute hover:w-[90%] transition-all duration-500 bottom-6 bg-neutral-400/20 mx-4 border-l-2 border-[#FF8442] h-12 w-[70%] text-sm md:text-lg text-white z-10'>
                                        {item.heading}
                                    </button>
                                </Link>
                                <img
                                    src={item.path}
                                    alt={`Service ${i}`}
                                    className='w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 z-0'
                                />
                            </div>
                        )
                    })
                }
            </div>

            <div className='browsAllServices w-full flex justify-center py-10 bg-[#141414] px-4'>
                <Link
                    ref={(el) => (sectionRef.current[7] = el)}
                    href="#_"
                    className="relative mt-4 inline-flex items-center px-8 md:px-12 py-2 overflow-hidden text-base md:text-lg font-medium text-[#FF8442] border-2 border-[#FF8442] rounded-full hover:text-white group hover:bg-gray-50"
                >
                    <span className="absolute left-0 block w-full h-0 transition-all bg-[#FF8442] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-700 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-700 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </span>
                    <span className="relative tracking-widest">BROWSE ALL SERVICES</span>
                </Link>
            </div>

        </>
    )
}

export default Specialities
