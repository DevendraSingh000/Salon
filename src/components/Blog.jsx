import React , { useEffect, useRef } from 'react';
import ContectForm from '../pages/ContectForm';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Blog() {
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
  const letest = [
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
      image: "https://framerusercontent.com/images/sZuoBfekxLaUlXm7jYHnpQUI4U.webp",
    },
    {
      id: 3,
      title: "MASTERING THE ART OF BEARD GROOMING: TIPS AND TECHNIQUES",
      category: "TIPS",
      date: "APRIL 8, 2022",
      image: "https://framerusercontent.com/images/2O9PoZRmEJK52nscXeQPs15JkQ.webp",
    },
  ];

  return (
    <>
      <section>
        {/* Banner Section */}
        <div className="relative w-full h-28 sm:h-40 md:h-52">
          <div className="absolute inset-0 -z-10 bg-[url('https://framerusercontent.com/images/MqHEokHdo8zTQVDxypZEntmHgQ.jpg?scale-down-to=2048')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="relative z-10 flex items-center justify-center h-full text-white">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tighter">OUR BLOG</h1>
          </div>
        </div>

        {/* Article Section */}
        <div className="w-[90%] mx-auto my-20">
          <div className="bg-black border-l-4 border-[#ff8442] py-4 px-4 mb-12 text-2xl sm:text-4xl text-white">
            <h1>Featured blogs</h1>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <div key={article.id} className="group">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-[250px] w-full object-cover transform transition-transform duration-300 group-hover:grayscale group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 px-2">
                  <p className="text-sm text-orange-500 font-semibold">
                    {article.category} <span className="text-gray-500">|</span> <span className="text-gray-500">{article.date}</span>
                  </p>
                  <h3 className="mt-2 text-lg font-extrabold text-gray-900 group-hover:text-orange-500 duration-100">
                    {article.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-black border-l-4 border-[#ff8442] py-4 px-4 my-16 text-2xl sm:text-4xl text-white">
            <h1>Latest blogs</h1>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
            {letest.map((article) => (
              <div key={article.id} className="group">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-[400px] w-full object-cover transform transition-transform duration-300 group-hover:grayscale group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 px-2">
                  <p className="text-sm text-orange-500 font-semibold">
                    {article.category} <span className="text-gray-500">|</span> <span className="text-gray-500">{article.date}</span>
                  </p>
                  <h3 className="mt-2 text-lg font-extrabold text-gray-900 group-hover:text-orange-500 duration-100">
                    {article.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-black border-l-4 border-[#ff8442] py-4 px-4 my-16 text-2xl sm:text-4xl text-white">
            <h1>TIPS</h1>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
            {letest.map((article) => (
              <div key={article.id} className="group">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-[400px] w-full object-cover transform transition-transform duration-300 group-hover:grayscale group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 px-2">
                  <p className="text-sm text-orange-500 font-semibold">
                    {article.category} <span className="text-gray-500">|</span> <span className="text-gray-500">{article.date}</span>
                  </p>
                  <h3 className="mt-2 text-lg font-extrabold text-gray-900 group-hover:text-orange-500 duration-100">
                    {article.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-black border-l-4 border-[#ff8442] py-4 px-4 my-16 text-2xl sm:text-4xl text-white">
            <h1>TIPS</h1>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
            {letest.map((article) => (
              <div key={article.id} className="group">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-[400px] w-full object-cover transform transition-transform duration-300 group-hover:grayscale group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 px-2">
                  <p className="text-sm text-orange-500 font-semibold">
                    {article.category} <span className="text-gray-500">|</span> <span className="text-gray-500">{article.date}</span>
                  </p>
                  <h3 className="mt-2 text-lg font-extrabold text-gray-900 group-hover:text-orange-500 duration-100">
                    {article.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-black border-l-4 border-[#ff8442] py-4 px-4 my-16 text-2xl sm:text-4xl text-white">
            <h1>TIPS</h1>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
            {letest.map((article) => (
              <div key={article.id} className="group">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-[400px] w-full object-cover transform transition-transform duration-300 group-hover:grayscale group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 px-2">
                  <p className="text-sm text-orange-500 font-semibold">
                    {article.category} <span className="text-gray-500">|</span> <span className="text-gray-500">{article.date}</span>
                  </p>
                  <h3 className="mt-2 text-lg font-extrabold text-gray-900 group-hover:text-orange-500 duration-100">
                    {article.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
        <ContectForm />
      </section>
    </>
  );
}

export default Blog;
