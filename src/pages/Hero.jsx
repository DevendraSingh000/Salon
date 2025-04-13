import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Hero() {
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
    return (
        <>
            <div className="w-full bg-[#0A0A0A] py-10 px-6 sm:px-10 md:px-16 flex flex-col sm:flex-row flex-wrap sm:justify-between items-center gap-8 sm:gap-0">
                {/* Location */}
                <div ref={(el) => (sectionRef.current[0] = el)} className="flex flex-col items-center text-center sm:border-r border-[#232323] sm:w-1/3 w-full sm:px-4">
                    <SlLocationPin className="text-[#FF8442] text-2xl mb-2" />
                    <p className="text-white font-medium text-2xl mb-2">LOCATION</p>
                    <p className="text-white font-medium text-lg max-w-xs mb-2">123, Main Street, Cityville, Stateburg, 98273</p>
                    <Link
                        to="https://www.google.com/maps"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="flex items-center gap-1 hover:scale-105 transition-all text-[#FF8442] mt-1">
                            <span>SEE ON MAP</span>
                            <IoIosArrowForward className="text-xl" />
                        </button>
                    </Link>
                </div>

                {/* Contact */}
                <div ref={(el) => (sectionRef.current[1] = el)} className="flex flex-col items-center text-center sm:border-r border-[#232323] sm:w-1/3 w-full sm:px-4">
                    <FiPhoneCall className="text-[#FF8442] text-2xl mb-2" />
                    <p className="text-white font-medium text-2xl mb-2">CONTACT</p>
                    <p className="text-white font-medium text-lg max-w-xs"> (555) 123-4567 </p>
                    <p className="text-white font-medium text-lg max-w-xs"> info@barbershop.com </p>
                </div>

                {/* Opening Hours */}
                <div ref={(el) => (sectionRef.current[2] = el)} className="flex flex-col items-center text-center sm:w-1/3 w-full sm:px-4">
                    <MdOutlineAccessTime className="text-[#FF8442] text-2xl mb-2" />
                    <p className="text-white font-medium text-2xl mb-2">OPENING HOURS</p>
                    <p className="text-white font-medium max-w-xs">
                        Mon to Fri: 9:00am - 8:30pm, <br />
                        Sat: 10:00am - 6:30pm, <br />
                        Sun: Closed
                    </p>
                </div>
            </div>
        </>
    )
}

export default Hero
