import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Prices() {

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
              start: 'top 80%',
              end: 'bottom 60%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }, []);


    const items = [
        { name: "Beard Trim and Sculpt", price: "827" },
        { name: "Tailored Haircuts", price: "827" },
        { name: "Luxury Shave", price: "927" },
        { name: "Classic Haircut", price: "727" },
        { name: "Beard Styling", price: "627" },
        { name: "Hair Wash & Massage", price: "527" },
        { name: "Hair Wash & Massage", price: "527" },
        { name: "Hair Wash & Massage", price: "527" },
        { name: "Hair Wash & Massage", price: "527" },
        { name: "Hair Wash & Massage", price: "527" },
    ];

    return (
        <div className='bg-[#141414] w-full min-h-screen px-4 sm:px-8 md:px-14 lg:px-20 py-10 md:py-16'>
            {/* Header Section */}
            <div  className='flex flex-col lg:flex-row justify-between items-start flex-wrap gap-y-6'>
                <div id="price">
                    <p ref={(el) => (sectionRef.current[0] = el)} className='text-[#FF8442] text-xs sm:text-sm tracking-widest px-1'>WHAT WE OFFER</p>
                    <p ref={(el) => (sectionRef.current[1] = el)} className='text-white text-2xl sm:text-3xl md:text-4xl font-sans font-semibold'>OUR PRICES</p>
                </div>
                <div  className='w-full lg:w-2/4 text-white text-sm md:text-base'>
                    <p ref={(el) => (sectionRef.current[2] = el)}>
                        Experience luxury grooming with our diverse services designed just for you. Discover clear pricing aligned with the value you get.
                    </p>
                </div>
            </div>

            {/* Price List */}
            <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8'>
                {items.map((item, i) => (
                    <div
                    ref={(el) => (sectionRef.current[i+3] = el)}
                        key={i}
                        className='hover:bg-[#0f0f0f] hover:p-5 p-4 rounded-md transition-all duration-300 text-white/70 hover:text-white'
                    >
                        <div className='flex sm:flex-row justify-between items-center sm:items-center gap-2 sm:gap-0 group'>
                            <h1 className='text-base sm:text-lg font-semibold text-white group-hover:text-[#FF8442] w-full sm:w-1/2'>
                                {item.name}
                            </h1>
                            <span className='hidden sm:block flex-1 h-0.5 bg-white mx-4 group-hover:bg-[#FF8442]'></span>
                            <p className='text-sm sm:text-base text-white group-hover:text-[#FF8442]'>${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Button */}
            <div className='w-full flex justify-center pt-10'>
                <Link
                ref={(el) => (sectionRef.current[14] = el)}
                    to="/services"
                    className="relative inline-flex items-center px-8 sm:px-10 md:px-12 py-2 overflow-hidden text-sm sm:text-base md:text-lg font-medium text-[#FF8442] border-2 border-[#FF8442] rounded-full group hover:text-white transition duration-500"
                >
                    <span className="absolute left-0 w-full h-0 bg-[#FF8442] transition-all duration-700 ease-in-out group-hover:h-full top-1/2 group-hover:top-0"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 transition-transform duration-700 transform translate-x-full group-hover:translate-x-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </span>
                    <span className="relative tracking-widest">VIEW ALL SERVICE PRICE</span>
                </Link>
            </div>
        </div>

    );
}

export default Prices;
