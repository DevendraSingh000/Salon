import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function ContectFormMain() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


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
    return (
        <>
            <div className='w-full py-20'>

                <div className="h-auto pb-12 text-center flex flex-col justify-center items-center text-black px-4">
                    <p ref={(el) => (sectionRef.current[0] = el)} className="text-[#FF8442] tracking-widest text-sm sm:text-base">REACH US THROUGH EMAIL</p>
                    <h1 ref={(el) => (sectionRef.current[1] = el)} className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">Send us a message</h1>
                    <p ref={(el) => (sectionRef.current[2] = el)} className="w-full md:w-2/3 mt-2 text-sm sm:text-base">
                        ExFeel free to reach out to us with your inquiries through message. We are here to provide you with the information you need.
                    </p>
                </div>

                <div  className='flex w-full justify-center'>
                    <div ref={(el) => (sectionRef.current[3] = el)} className="bg-[#141414]  w-full lg:w-1/2 p-6 md:p-10 rounded-lg">
                        <h1 className="text-white text-2xl md:text-2xl font-semibold uppercase mb-6 tracking-tight">
                            We will REPLY you soon
                        </h1>
                        <form>
                            <div className="mb-4">
                                <label className="block text-white mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='Devenra Singh'
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded bg-[#2D2D2D] border border-gray-600 text-white"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-white mb-2">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    placeholder='7891265854'
                                    onChange={handleChange}
                                    className="w-full p-3 rounded bg-[#2D2D2D] border border-gray-600 text-white"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-white mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='devenra637791@gmail.com'
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded bg-[#2D2D2D] border border-gray-600 text-white"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-white mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    placeholder='Write your Message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded bg-[#2D2D2D] border border-gray-600 text-white"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-[#FF8243] hover:bg-[#ff6e1d] text-white font-bold py-3 px-6 rounded w-full transition duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContectFormMain
