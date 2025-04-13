import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Articles() {
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
    const articles = [
        {
            id: 1,
            title: "THE ULTIMATE BEARD GROOMING KIT FOR THE MODERN GENTLEMAN",
            category: "PRODUCT REVIEW",
            date: "AUGUST 25, 2023",
            image: "https://framerusercontent.com/images/2O9PoZRmEJK52nscXeQPs15JkQ.webp",
        },
        {
            id: 2,
            title: "UNLOCKING THE ART OF TIMELESS GROOMING: A JOURNEY TO THE BARBER SHOP",
            category: "BUSINESS",
            date: "AUGUST 25, 2023",
            image: "https://framerusercontent.com/images/tBr2tfPwDfPK6le9m3MLnbOxoAI.webp",
        },
        {
            id: 3,
            title: "MASTERING THE ART OF BEARD GROOMING: TIPS AND TECHNIQUES",
            category: "TIPS",
            date: "APRIL 8, 2022",
            image: "https://framerusercontent.com/images/sZuoBfekxLaUlXm7jYHnpQUI4U.webp",
        },
    ];
    return (
        <>
            <div className="bg-[#f4ede4] py-12 px-4 sm:px-6 lg:px-20">
                <div className="text-center mb-12">
                    <p ref={(el) => (sectionRef.current[0] = el)} className="text-orange-600 font-semibold tracking-widest">
                        LATEST FROM OUR BLOG
                    </p>
                    <h2 ref={(el) => (sectionRef.current[1] = el)} className="text-4xl font-extrabold text-gray-900 mt-2">
                        LATEST ARTICLES
                    </h2>
                    <p ref={(el) => (sectionRef.current[2] = el)} className="mt-4 text-lg text-gray-700">
                        Discover the Art of grooming, define your signature style, and
                        radiate unparalleled confidence
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {articles.map((article,i) => (
                        <div ref={(el) => (sectionRef.current[i+3] = el)} key={article.id} className="group">
                            <div className="overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-72 object-cover transform transition-transform duration-300 group-hover:grayscale group-hover:scale-105"
                                />
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-orange-500 font-semibold">
                                    {article.category} <span className="text-gray-500">|</span> <span className='text-gray-500'>{article.date}</span>
                                </p>
                                <h3 className="mt-2 text-xl font-extrabold text-gray-900 group-hover:text-orange-500 duration-75">
                                    {article.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='w-full flex justify-center py-4 sm:py-12'>
                    <Link
                    ref={(el) => (sectionRef.current[7] = el)}
                        to="/services"
                        className="relative inline-flex items-center px-2 sm:px-12 py-2 overflow-hidden text-[10px] sm:text-lg font-medium text-[#FF8442] border-2 border-[#FF8442] rounded-full group hover:text-white transition duration-500"
                    >
                        <span className="absolute left-0 w-full h-0 bg-[#FF8442] transition-all duration-700 ease-in-out group-hover:h-full top-1/2 group-hover:top-0"></span>
                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 transition-transform duration-700 transform translate-x-full group-hover:translate-x-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </span>
                        <span className="relative tracking-widest">VIEW DETAILED SERVICES</span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Articles
