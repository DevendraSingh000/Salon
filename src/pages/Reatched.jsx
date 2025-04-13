import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Reatched() {

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
        <div className="bg-black w-full mt-10 sm:py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] max-w-[1200px] mx-auto">
                {card.map((item, index) => (
                    <div ref={(el) => (sectionRef.current[index+1] = el)} key={index} className="relative shadow-lg shadow-[#4a3f3f] text-white rounded-lg overflow-hidden">
                        {/* Image */}
                        <img
                            className="h-30 sm:h-72 md:h-80 lg:h-96 w-full object-cover"
                            src={item.path}
                            alt="Card visual"
                        />

                        {/* Text Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center px-4 text-center">
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                                {item.h1}
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl mt-2">{item.p}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Reatched;
