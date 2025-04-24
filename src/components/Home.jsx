import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Specialities from '../pages/Specialities'
import Prices from '../pages/Prices'
import Shops from '../pages/Shops'
import Differences from '../pages/Differences'
import AboutPage from '../pages/AboutPage'
import Reatched from '../pages/Reatched'
import Experat_Barbers from '../pages/Experat_Barbers'
import FeedBacks from '../pages/FeedBacks'
import Articles from '../pages/Articles'
import ContectForm from '../pages/ContectForm'
import Footer from '../pages/Footer'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSec from '../pages/HeroSec'
gsap.registerPlugin(ScrollTrigger);


function Home() {
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
          scrub: true,
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);
  return (
    <>
      <div id='#home' className="relative h-[90vh] md:h-[100vh] w-full">
        <img
          src="https://framerusercontent.com/images/G0PPV4ScSzlZ9lF7c32K9A66M4.webp"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-start px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32">
          <div className="text-white max-w-xl sm:max-w-2xl">
            <span ref={(el) => (sectionRef.current[0] = el)} className="block text-xs sm:text-sm md:text-base tracking-widest mb-3 sm:mb-4">
              BEST MENS PARLOUR IN YOUR AREA
            </span>
            <p ref={(el) => (sectionRef.current[1] = el)} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight leading-tight">
              <span>Own your </span>
              <span className="text-[#FF8442]">style</span>
              <br />
              <span>embrace your </span>
              <span className="text-[#FF8442]">power</span>
            </p>
            <Link
              ref={(el) => (sectionRef.current[2] = el)}
              to="/services"
              className="relative mt-4 inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-[#FF8442] border-2 border-[#FF8442] rounded-full hover:text-white group hover:bg-gray-50"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-[#FF8442] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-700 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="relative">Explore Services</span>
            </Link>

          </div>
        </div>
      </div>


      {/* Other Sections */}
      <HeroSec />
      <Specialities />
      <Prices />
      {/* <Shops /> */}
      <Differences />
      <AboutPage />
      <Reatched />
      <Experat_Barbers />
      <FeedBacks />
      <Articles />
      <ContectForm />
      <Footer />
    </>
  )
}

export default Home
