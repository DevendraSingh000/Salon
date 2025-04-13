import React, { useEffect, useRef } from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Experat_Barbers() {
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
    const img = [
        {
            path: "https://framerusercontent.com/images/m0SyhjwTrbwcPfC8q9Dv8GVYwOY.webp",
            name: "Jackson Martinez",
            role: "Hair Specialist"
        },
        {
            path: "https://framerusercontent.com/images/cVoUO4iENn0zIoOgSkC93zIK0c.webp",
            name: "Liam Turner",
            role: "Beard Grooming Expert"
        },
        {
            path: "https://framerusercontent.com/images/4hmhEUpa6QRURgjR5x8pATTl8.webp",
            name: "Connor Brooks",
            role: "Facial Treatments Specialist"
        },
        {
            path: "https://framerusercontent.com/images/N5lygimHgz78bte8jVMyZCwbcqU.webp",
            name: "Ethan Williams",
            role: "Color Specialist"
        },
    ];

    return (
        <div className='bg-black pb-20 flex flex-col justify-center items-center  px-1'>
            <div className='flex flex-col px-12 py-8 lg:flex-row justify-between sm:items-start items-center flex-wrap gap-y-6'>
                <div id="price">
                    <p ref={(el) => (sectionRef.current[0] = el)} className='text-[#FF8442] text-xs sm:text-sm tracking-widest px-1'>OUR TEAM</p>
                    <p ref={(el) => (sectionRef.current[1] = el)} className='text-white text-2xl sm:text-3xl md:text-4xl font-sans font-semibold'>Meet Our Expert Barbers</p>
                </div>
                <div ref={(el) => (sectionRef.current[2] = el)} className='w-full lg:w-2/4 text-white text-sm md:text-base sm:text-start text-center'>
                    <p>
                        Experience luxury grooming with our diverse services designed just for you. Discover clear pricing aligned with the value you get.
                    </p>
                </div>
            </div>
            <div className=' w-[90%] mx-auto flex flex-wrap justify-center sm:justify-between items-center gap-4 rounded-xl'>
                {img.map((item, i) => (
                    <div ref={(el) => (sectionRef.current[i+3] = el)} key={i} className="w-52 bg-black border rounded-md overflow-hidden group transition-all duration-300">
                        <div className="relative">
                            <img
                                src={item.path}
                                alt={item.name}
                                className="w-full h-60 hover:brightness-75 object-cover transition-transform duration-300 group-hover:scale-90"
                            />
                            <div className="absolute  inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <a href="#" className="text-[#1877F2] text-xl hover:scale-105 bg-gray-800 p-3 rounded-full hover:bg-white hover:text-black transition">
                                    <FaFacebookF />
                                </a>
                                <a href="#" className="text-[#f73af7] text-xl bg-gray-800 p-3 rounded-full hover:bg-white hover:text-black transition">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="text-[#26CC64] text-xl bg-gray-800 p-3 rounded-full hover:bg-white hover:text-black transition">
                                    <FaWhatsapp />
                                </a>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="relative overflow-hidden text-center py-4 border-l-4 border-orange-500 bg-black group transition-all duration-300">
                            <div className="absolute inset-0 bg-[#FF8442] w-0 group-hover:w-full transition-all duration-500 ease-out z-0"></div>
                            <div className="relative z-10">
                                <h3 className="text-white text-lg font-bold group-hover:text-black">
                                    {item.name}
                                </h3>
                                <p className="text-white text-sm group-hover:text-black">{item.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experat_Barbers;
