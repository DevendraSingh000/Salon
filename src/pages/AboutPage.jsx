import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function AboutPage() {

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

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <div className="w-full bg-[#000] py-16">
            <div
                ref={ref}
                className="relative w-[90%] max-w-6xl mx-auto overflow-hidden rounded-lg"
            >
                <motion.div style={{ y }} className="relative">
                    <img
                    ref={(el) => (sectionRef.current[0] = el)}
                        src="https://framerusercontent.com/images/CJCE1biZcri7Vzsu9gS5gPvVs.png"
                        alt="Shop View"
                        className="w-full h-[500px] object-cover brightness-50 blur-sm rounded-lg"
                    />
                    {/* Overlay content */}
                    <div className="absolute inset-0 flex flex-col justify-between text-white p-10">
                        {/* Top Left */}
                        <div>
                            <p ref={(el) => (sectionRef.current[1] = el)} className="text-[#FF8442] text-[10px] sm:text-[15px] tracking-widest mb-1">
                                OUR STORY
                            </p>
                            <p ref={(el) => (sectionRef.current[2] = el)} className="text-white text-2xl sm:text-4xl font-bold">ABOUT US</p>
                        </div>

                        {/* Center Content */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                            <div ref={(el) => (sectionRef.current[3] = el)} className="border-l-2 border-[#FF8442] pl-4 text-[14px] sm:text-[20px] ">
                                Welcome to TrimHub, where grooming is an art and style is a
                                statement. With a legacy built on tradition and an eye for
                                innovation, we blend classic techniques with modern trends to
                                craft the perfect look for you.
                            </div>
                            <div ref={(el) => (sectionRef.current[4] = el)} className="border-l-2 border-[#FF8442] pl-4 text-[14px] sm:text-[20px]">
                                Our team of expert barbers is more than skilled professionals –
                                they’re artists who meticulously sculpt each cut and shave with
                                precision. We offer an experience that's as welcoming as it is
                                stylish.
                            </div>
                        </div>

                        {/* Signature */}
                        <div className="mt-10 text-center md:text-left">
                            <p ref={(el) => (sectionRef.current[5] = el)} className="italic text-[13px] sm:text-lg">– Jackson Martinez</p>
                            <p ref={(el) => (sectionRef.current[6] = el)} className="text-[#FF8442] text-sm font-semibold">
                                FOUNDER, DRAPPERCRAFT BARBERS
                            </p>
                        </div>

                        {/* Top Right */}
                        <p className="absolute top-10 right-10 text-[#FF8442] text-sm font-semibold">
                            EST’D 2013
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default AboutPage;
