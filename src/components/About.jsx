import React, { useEffect, useRef } from 'react'
import { HiOutlineSparkles } from "react-icons/hi2";
import ContectForm from '../pages/ContectForm';
import Footer from '../pages/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
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
  const card = [
    {
      path: "https://framerusercontent.com/images/ngbRE2PCWilwkffsckCCOFeroeQ.jpg?scale-down-to=512",
      h1: "10+",
      p: "Years og Experience",
    },
    {
      path: "https://framerusercontent.com/images/ngbRE2PCWilwkffsckCCOFeroeQ.jpg?scale-down-to=512",
      h1: "4.9",
      p: "Average Reviews",
    },
    {
      path: "https://framerusercontent.com/images/ngbRE2PCWilwkffsckCCOFeroeQ.jpg?scale-down-to=512",
      h1: "7+",
      p: "Prestigious Awards",
    },
    {
      path: "https://framerusercontent.com/images/ngbRE2PCWilwkffsckCCOFeroeQ.jpg?scale-down-to=512",
      h1: "3K+",
      p: "Satisfied Gentlemen",
    },

  ];
  return (

    <>
      <div className="relative w-full h-14 sm:h-28">
        <div className="absolute inset-0 -z-10 bg-[url('https://framerusercontent.com/images/MqHEokHdo8zTQVDxypZEntmHgQ.jpg?scale-down-to=2048')] bg-cover bg-center w-full h-full" />
        <div className="absolute inset-0 z-0 bg-black opacity-50" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white">
          <h1 ref={(el) => (sectionRef.current[0] = el)} className="text-3xl sm:text-5xl font-bold tracking-tighter">ABOUT US</h1>
        </div>
      </div>
      <p ref={(el) => (sectionRef.current[1] = el)} className='mt-6 sm:mt-20 px-6 sm:px-10 text-[13px] sm:text-3xl'>
        Welcome to TrimHub, where grooming is an art, precision is our creed, and your style is our canvas. We're not just a barber shop; we're your trusted grooming partner on a journey of self-expression and confidence.
      </p>

      <div ref={(el) => (sectionRef.current[2] = el)} className='my-6 sm:my-14 mx-6 sm:mx-10 pl-3 sm:pl-8 border-l-4 border-[#ff8442]'>
        <h1 className='text-[20px] sm:text-5xl mb-4 tracking-tighter' >Our Legacy of Excellence:</h1>
        <p className='text-[14px] sm:text-2xl'>With years of experience in the industry, TrimHub stands as a beacon of grooming excellence. Our barbers are more than just professionals; they are artisans, meticulously crafting each haircut and beard trim to perfection. We take pride in our legacy of precision and the trust our clients place in us</p>
      </div>
      <div ref={(el) => (sectionRef.current[3] = el)} className='my-6 sm:my-14 mx-6 sm:mx-10 pl-3 sm:pl-8 border-l-4 border-[#ff8442]'>
        <h1 className='text-[20px] sm:text-5xl mb-4 tracking-tighter' >A Space of Distinction:</h1>
        <p className='text-[14px] sm:text-2xl'>TrimHub is more than a grooming destination; it's an environment designed for your comfort and relaxation. Our modern and welcoming space is an oasis amidst the rush of everyday life. Here, you can unwind, unplug, and immerse yourself in the art of grooming.</p>
      </div>
      <div className="px-4  sm:py-12 sm:px-10 flex flex-col md:flex-col gap-8 items-center">
        <img
          src="https://framerusercontent.com/images/CEY1AweLTr7sk9PZIrGcqxIeySc.jpg?scale-down-to=2048"
          alt="TrimHub Interior"
          className="w-full md:w-full h-[300px] sm:h-[700px] rounded-xl shadow-md object-cover"
        />
        <p ref={(el) => (sectionRef.current[4] = el)} className="text-[13px] sm:text-3xl text-black md:w-full ">
          We invite you to experience TrimHub  a place where tradition meets innovation, where precision meets artistry, and where grooming becomes an extraordinary experience. Whether you're seeking a classic cut, a rejuvenating shave, or a stylish transformation, our doors are open to welcome you into the world of timeless grooming and experience:
        </p>
      </div>
      <div className="justify-center mt-4 mx-2 sm:mx-10 ">
        <div ref={(el) => (sectionRef.current[5] = el)} className="flex text-[12px] items-center gap-2 mb-4">
          <HiOutlineSparkles size={24} className="size-5 text-[#ff8442]" />
          <h1>Personalized Styling</h1>
        </div>
        <div ref={(el) => (sectionRef.current[6] = el)} className="flex text-[12px] items-center gap-2 mb-4">
          <HiOutlineSparkles size={24} className="size-5 text-[#ff8442] " />
          <h1>Client-Centric Approach</h1>
        </div>
        <div ref={(el) => (sectionRef.current[7] = el)} className="flex text-[12px] items-center gap-2 mb-4">
          <HiOutlineSparkles size={24} className="size-5 items-center flex text-[#ff8442]  " />
          <h1>Luxurious Shaves</h1>
        </div>
      </div>

      <div className=''>
        <video

          // controls
          muted
          loop
          autoPlay
          // muted
          className="w-full sm:h-[600px] rounded-lg break-inside-avoid shadow-md hover:scale-105 transition-transform duration-300"
        >
          <source src="https://framerusercontent.com/assets/sCLjG77PWSAlOgjcKi2sWxD2g.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="px-4 py-6 sm:py-12 sm:px-10 flex flex-col md:flex-col gap-8 items-center">
        <img
          src="https://framerusercontent.com/images/jOVtOKzn9NTSnk3HnHGvwOKYz8.jpg"
          alt="TrimHub Interior"
          className="w-full filter grayscale md:w-full  sm:h-[700px] rounded-xl shadow-md object-cover"
        />
        <p ref={(el) => (sectionRef.current[8] = el)} className=" sm:text-3xl text-black sm:my-10 md:w-full ">
          We invite you to experience TrimHub  a place where tradition meets innovation, where precision meets artistry, and where grooming becomes an extraordinary experience. Whether you're seeking a classic cut, a rejuvenating shave, or a stylish transformation, our doors are open to welcome you into the world of timeless grooming and experience:
        </p>
      </div>

      <div className='text-black text-[14px] sm:text-2xl  sm:w-full px-4 sm:px-44 text-center '>
        <p ref={(el) => (sectionRef.current[9] = el)} >Beyond the grooming chair, we believe in building connections. TrimHub is a place where conversations flow as smoothly as the clippers. It's a hub where stories are shared, experiences are cherished, and camaraderie is formed. Our clients are more than just customers; they're part of our community. Our stats say the words:</p>
        <p ref={(el) => (sectionRef.current[10] = el)} className='mt-4 sm:mt-8'>-Jackson Martinez</p>
        <p ref={(el) => (sectionRef.current[11] = el)} className='text-[#ff8442]  sm:mb-10'>-FOUNDER, DRAPPERCRAFT BARBERS</p>
      </div>


      <div>
        <div className='bg-[#fff] w-full h-full px-4 md:px-10 lg:px-20'>
          <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center py-5 sm:py-10 md:py-16 gap-6'>
            <div>
              <p ref={(el) => (sectionRef.current[12] = el)} className='text-[#FF8442] text-xs md:text-sm tracking-widest'>OUR TEAM</p>
              <p ref={(el) => (sectionRef.current[13] = el)} className='text-black text-2xl md:text-3xl lg:text-4xl font-sans'>Meet Our Expert Barbers</p>
            </div>
            <div className='w-full lg:w-2/4 text-black text-sm md:text-base'>
              <p>Ultimate grooming for the modern man. Look and feel your best with our skilled stylists and premium products.</p>
            </div>
          </div>
        </div>
      </div>

      <div className=' w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 justify-center sm:justify-between items-center gap-4 rounded-xl'>
        {img.map((item, i) => (
          <div key={i} className=" bg-black border rounded-md overflow-hidden group transition-all duration-300">
            <div className="relative">
              <img
                src={item.path}
                alt={item.name}
                className="w-full sm:h-[400px] hover:brightness-75 object-cover transition-transform duration-300 group-hover:scale-90"
              />
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


      <div className="bg-black w-full py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-[90%] max-w-[1200px] mx-auto">
          {card.map((item, index) => (
            <div key={index} className="relative shadow-lg shadow-[#4a3f3f] text-white rounded-lg overflow-hidden">
              {/* Image */}
              <img
                className="h-52 sm:h-72 md:h-80 lg:h-64 w-full object-cover"
                src={item.path}
                alt="Card visual"
              />

              {/* Text Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center px-4 text-center">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-bold leading-tight">
                  {item.h1}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mt-2">{item.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContectForm />
      <Footer />
    </>
  )
}

export default About
