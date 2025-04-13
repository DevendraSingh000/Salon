import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import ContectForm from '../pages/ContectForm';
import Footer from '../pages/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContectFormMain from '../pages/ContectFormMain';
gsap.registerPlugin(ScrollTrigger);


function Contect() {

   const sectionRef = useRef([]);
   const mapRef = useRef([]);
  
   useEffect(() => {
    gsap.fromTo(
      mapRef.current,
      { opacity: 0.5, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: mapRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true, // scroll ke sath zoom effect
        },
      }
    );
  }, []);
    useEffect(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 10, y: 100 },
        {
          opacity: 10,
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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="relative w-full h-28">
        <div className="absolute inset-0 -z-10 bg-[url('https://framerusercontent.com/images/MqHEokHdo8zTQVDxypZEntmHgQ.jpg?scale-down-to=2048')] bg-cover bg-center w-full h-full" />
        <div className="absolute inset-0 z-0 bg-black opacity-50" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white">
          <h1 ref={(el) => (sectionRef.current[0] = el)} className="text-3xl sm:text-5xl font-bold tracking-tighter">OUR SERVICES</h1>
        </div>
      </div>

      <div className="adderssBox w-full bg-[#0A0A0A] py-10 px-6 sm:px-10 md:px-16 flex flex-col sm:flex-row flex-wrap sm:justify-between items-center gap-8 sm:gap-0">
        {/* Location */}
        <div ref={(el) => (sectionRef.current[1] = el)} className="flex flex-col items-center text-center sm:border-r border-[#232323] sm:w-1/3 w-full sm:px-4">
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
        <div ref={(el) => (sectionRef.current[2] = el)} className="flex flex-col items-center text-center sm:border-r border-[#232323] sm:w-1/3 w-full sm:px-4">
          <FiPhoneCall className="text-[#FF8442] text-2xl mb-2" />
          <p className="text-white font-medium text-2xl mb-2">CONTACT</p>
          <p className="text-white font-medium text-lg max-w-xs"> (555) 123-4567 </p>
          <p className="text-white font-medium text-lg max-w-xs"> info@barbershop.com </p>
        </div>

        {/* Opening Hours */}
        <div ref={(el) => (sectionRef.current[3] = el)} className="flex flex-col items-center text-center sm:w-1/3 w-full sm:px-4">
          <MdOutlineAccessTime className="text-[#FF8442] text-2xl mb-2" />
          <p className="text-white font-medium text-2xl mb-2">OPENING HOURS</p>
          <p className="text-white font-medium max-w-xs">
            Mon to Fri: 9:00am - 8:30pm, <br />
            Sat: 10:00am - 6:30pm, <br />
            Sun: Closed
          </p>
        </div>
      </div>
      <div className='bg-[#0A0A0A] flex flex-col items-center justify-center py-8'>
        <h2 ref={(el) => (sectionRef.current[4] = el)} className="text-white text-2xl md:text-3xl font-semibold mb-4 uppercase">Follow Us On</h2>
        <div className="flex flex-wrap gap-6">
          <span ref={(el) => (sectionRef.current[5] = el)} className="text-white border-2 bg-[#2D2D2D] rounded-full group hover:scale-110 duration-300">
            <RiFacebookCircleFill size={25} className="group-hover:text-[#FF8442] hover:scale-125 duration-300 p-1" />
          </span>
          <span ref={(el) => (sectionRef.current[6] = el)} className="text-white border-2 bg-[#2D2D2D] rounded-full group hover:scale-110 duration-300">
            <FaTwitter size={25} className="group-hover:text-[#FF8442] hover:scale-125 duration-300 p-1" />
          </span>
          <span ref={(el) => (sectionRef.current[7] = el)} className="text-white border-2 bg-[#2D2D2D] rounded-full group hover:scale-110 duration-300">
            <AiFillInstagram size={25} className="group-hover:text-[#FF8442] hover:scale-125 duration-300 p-1" />
          </span>
          <span ref={(el) => (sectionRef.current[8] = el)} className="text-white border-2 bg-[#2D2D2D] rounded-full group hover:scale-110 duration-300">
            <BsYoutube size={25} className="group-hover:text-[#FF8442] hover:scale-125 duration-300 p-1" />
          </span>
        </div>

      </div>
      
      <ContectFormMain />
      <div ref={(el) => (mapRef.current[0] = el)} className="w-full h-[400px]">
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5865261987495!2d75.78728371443197!3d26.902036766377215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db59dd43e7c55%3A0x3fc1e4019d90b7c!2sAjmeri%20Gate%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1689491476768!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-0 w-full h-full"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </>
  )
}

export default Contect
