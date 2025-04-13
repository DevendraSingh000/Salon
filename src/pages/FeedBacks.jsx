import React, { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        image: "https://framerusercontent.com/images/jXRB2dFiFt9lskJ8KB2Aiv84.jpg",
        stars: 5,
        review: "FELT LIKE A WORK OF ART.",
        detail: "The barbers’ attention to detail and dedication to delivering top-notch cuts is unmatched.",
        name: "TIMOTHY R.",
        role: "Client, TrimHub Barbershop",
    },
    {
        image: "https://framerusercontent.com/images/jXRB2dFiFt9lskJ8KB2Aiv84.jpg",
        stars: 5,
        review: "I'VE NEVER FELT MORE CONFIDENT...",
        detail: "The attention to detail and the friendly atmosphere make every visit an enjoyable experience.",
        name: "MICHAEL T.",
        role: "Client, TrimHub Barbershop",
    },
    {
        image: "https://framerusercontent.com/images/GjW24ZDNDZrjN88bKSlP8KJEQU4.jpg?scale-down-to=512",
        stars: 5,
        review: "EXCEEDED ALL MY EXPECTATIONS...",
        detail: "The barber took the time to understand my preferences.",
        name: "DAVID R.",
        role: "Client, TrimHub Barbershop",
    },
    {
        image: "https://framerusercontent.com/images/OEsag5BZNGzn3TCgH9JfWFjfhNE.jpg",
        stars: 5,
        review: "AN ABSOLUTE LUXURY...",
        detail: "The shop's ambiance is inviting, and the staff creates a cozy environment.",
        name: "ALEX M.",
        role: "Client, TrimHub Barbershop",
    },
    {
        image: "https://framerusercontent.com/images/jXRB2dFiFt9lskJ8KB2Aiv84.jpg",
        stars: 5,
        review: "FELT LIKE A WORK OF ART.",
        detail: "The barbers’ attention to detail and dedication to delivering top-notch cuts is unmatched.",
        name: "TIMOTHY R.",
        role: "Client, TrimHub Barbershop",
    },
    {
        image: "https://framerusercontent.com/images/jXRB2dFiFt9lskJ8KB2Aiv84.jpg",
        stars: 5,
        review: "I'VE NEVER FELT MORE CONFIDENT...",
        detail: "The attention to detail and the friendly atmosphere make every visit an enjoyable experience.",
        name: "MICHAEL T.",
        role: "Client, TrimHub Barbershop",
    },
    {
        image: "https://framerusercontent.com/images/GjW24ZDNDZrjN88bKSlP8KJEQU4.jpg?scale-down-to=512",
        stars: 5,
        review: "EXCEEDED ALL MY EXPECTATIONS...",
        detail: "The barber took the time to understand my preferences.",
        name: "DAVID R.",
        role: "Client, TrimHub Barbershop",
    },
];

const FeedBacks = () => {
    const sliderRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleDotClick = (idx) => {
        const slider = sliderRef.current;
        const card = slider.querySelector("div.min-w-[250px]");
        if (!card) return;
        const cardWidth = card.offsetWidth + 24; // includes gap (adjusted for responsiveness)
        slider.scrollTo({
            left: idx * cardWidth,
            behavior: "smooth",
        });
        setActiveIndex(idx);
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
        <div className="w-full bg-black overflow-hidden py-8">
            <div
                ref={sliderRef}
                className="flex gap-6 overflow-x-auto px-4 pb-4 scroll-smooth cursor-grab"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{ scrollbarWidth: "none" }}
            >
                {testimonials.map((item, idx) => (
                    <div
                        
                        key={idx}
                        className="group relative min-w-[250px] sm:min-w-[280px] md:min-w-[300px] max-w-[300px] bg-black text-white border-2 border-[#ff8842] rounded-xl shadow-xl overflow-hidden transition-all duration-500 select-none"
                    >
                        {/* IMAGE */}
                        <div className="w-full h-40 overflow-hidden relative">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-24 rounded-full object-cover border-4 border-[#ff8842] mx-auto mt-4 transition-all duration-500 ease-in-out group-hover:border-none group-hover:w-full group-hover:h-40 group-hover:rounded-none group-hover:mt-0"
                            />
                        </div>

                        {/* CONTENT */}
                        <div className="p-4 flex flex-col items-center transition-opacity duration-500">
                            <div className="flex space-x-1 mb-2">
                                {[...Array(item.stars)].map((_, i) => (
                                    <span key={i} className="text-orange-400 text-lg">★</span>
                                ))}
                            </div>
                            <h3 className="text-center text-white font-semibold uppercase text-sm mb-2">
                                {item.review}
                            </h3>
                            <p className="text-gray-400 text-xs text-center mb-3">{item.detail}</p>
                            <p className="text-white font-semibold text-sm">{item.name}</p>
                            <p className="text-gray-500 text-xs">{item.role}</p>
                        </div>
                    </div>

                ))}
            </div>

            {/* Dots */}
            {/* <div className="flex justify-center mt-4 space-x-2">
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleDotClick(idx)}
                        className={`h-3 rounded-full transition-all ${activeIndex === idx ? "bg-[#ff8842] w-4" : "bg-gray-500 w-3"
                            }`}
                    />
                ))}
            </div> */}
        </div>
    );
};

export default FeedBacks;
