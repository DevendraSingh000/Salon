import React, { useEffect, useRef, useState } from 'react'
import { MdLocationPin } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function ContectForm() {
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
      <section className="w-full bg-black">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-10">
          {/* Header */}
          <div className="px-2 md:px-6 py-16">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div>
                <p ref={(el) => (sectionRef.current[0] = el)} className="text-[#FF8442] text-sm tracking-widest">GET IN TOUCH</p>
                <p ref={(el) => (sectionRef.current[1] = el)} className="text-white text-4xl md:text-5xl font-semibold font-sans">Contact Us</p>
              </div>
              <div className="w-full md:w-1/2 text-white text-base md:text-xl">
                <p ref={(el) => (sectionRef.current[2] = el)}>
                  Feel free to reach out to us with your inquiries through either phone or email.
                  We are here to provide you with the information you need.
                </p>
              </div>
            </div>
          </div>

          {/* Form + Info Section */}
          <div className="bg-[#2D2D2D] backdrop-blur-md w-full flex flex-col lg:flex-row gap-10 p-5 md:p-10 rounded-md">

            {/* Contact Form */}
            <div
              ref={(el) => (sectionRef.current[3] = el)}
              className="bg-[#141414] w-full sm:w-1/2 max-w-3xl mx-auto p-4 sm:p-6 md:p-10 rounded-lg"
            >
              <h1 className="text-white text-2xl md:text-2xl font-semibold uppercase mb-6 tracking-tight text-start">
                Send us a message
              </h1>
              <form className="w-full">
                <div className="mb-4">
                  <label className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full py-1 px-2 rounded bg-[#2D2D2D] sm:text-2xl border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FF8243] transition"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-white mb-2">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full py-1 px-2 rounded sm:text-2xl bg-[#2D2D2D] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FF8243] transition"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    placeholder='jkasjf'
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full py-1 px-2 rounded sm:text-2xl bg-[#2D2D2D] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FF8243] transition"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-white mb-2">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full py-1 px-2 rounded sm:text-2xl bg-[#2D2D2D] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FF8243] transition resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#FF8243] hover:bg-[#ff6e1d] text-white font-bold py-2 px-6 rounded w-full transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>


            {/* Contact Info */}
            <div ref={(el) => (sectionRef.current[4] = el)} className="w-full lg:w-1/2 px-2 md:px-8 py-4 md:py-10">
              <h1 className="text-white text-2xl md:text-2xl font-semibold pb-4 md:pb-6">Contact Information</h1>
              <div className="text-white space-y-6 text-base md:text-lg">
                <p className="flex items-start"><MdLocationPin className="text-[#FF8442] mr-4 mt-1" size={24} /> Address: 362, Jagannath Puri, Jhotwara, Jaipur</p>
                <p className="flex items-center"><IoCallOutline className="text-[#FF8442] mr-4" size={24} /> Hotline: (555) 123-4567</p>
                <p className="flex items-center"><MdOutlineEmail className="text-[#FF8442] mr-4" size={24} /> Email: info@barbershop.com</p>
                <div className="flex items-start">
                  <FaRegClock className="text-[#FF8442] mr-4 mt-1" size={24} />
                  <p>
                    Opening Hours:<br />
                    Mon to Fri: 9.00am - 8.30pm<br />
                    Sat: 10.00am - 6.30pm<br />
                    Sun: Closed
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <h2 ref={(el) => (sectionRef.current[5] = el)} className="text-white text-2xl md:text-3xl font-semibold mt-10 mb-4 uppercase">Follow Us On</h2>
              <div ref={(el) => (sectionRef.current[6] = el)} className="flex flex-wrap gap-6">
                <span className="text-white border-2  bg-[#2D2D2D] rounded-full group hover:scale-110 duration-300">
                  <RiFacebookCircleFill size={25} className="group-hover:text-[#FF8442] hover:scale-125 duration-300" />
                </span>
                <span className="text-white border-2  bg-[#2D2D2D] rounded-full group hover:scale-110 duration-300">
                  <FaTwitter size={25} className="group-hover:text-[#FF8442] hover:scale-125 duration-300" />
                </span>
                <span className="text-white border-2 bg-[#2D2D2D] rounded-full group hover:scale-110 duration-300">
                  <AiFillInstagram size={25} className="group-hover:text-[#FF8442] hover:scale-125 duration-300" />
                </span>
                <span className="text-white border-2  bg-[#2D2D2D] rounded-full group hover:scale-110 duration-300">
                  <BsYoutube size={25} className="group-hover:text-[#FF8442] hover:scale-125 duration-300" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default ContectForm
