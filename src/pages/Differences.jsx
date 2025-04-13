import React, { useEffect, useRef, useState } from "react";
import { HiUsers } from "react-icons/hi2";
import { MdKeyboardArrowUp } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi2";
import { MdChairAlt } from "react-icons/md";
import { PiSprayBottleFill } from "react-icons/pi";
import { IoCutOutline } from "react-icons/io5";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Differences() {

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

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const items = [
        {
            logo: <HiUsers size={40} />,
            heading: "Experienced Barbers",
            content: "Our team consists of highly skilled and experienced barbers who are passionate about their craft. With years of training and dedication, they understand the nuances of hair types, styles, and grooming techniques. Whether it's a modern fade or a classic cut, you’re in expert hands. Each barber ensures a personalized experience tailored to your unique preferences.",
            img: "src/assets/img.jpg"
        },
        {
            logo: <MdChairAlt size={40} />,
            heading: "RELAXING EXVIRONMENT",
            content: "We use only the finest grooming products, carefully selected for their quality and performance. From organic hair care to skin-friendly beard oils and pomades, every product we use is designed to enhance your look while protecting your hair and skin. These premium products provide long-lasting results and elevate your grooming experience to luxury standards.",
            img: "src/assets/img.jpg"
        },
        {
            logo: <PiSprayBottleFill size={40} />,
            heading: "PREMIUM GROOMING PRODUCT",
            content: "Step into a barbershop that feels more like a retreat. Our shop is designed to offer a calm, stylish, and inviting atmosphere. From soothing background music to comfortable seating and refreshing beverages, every element is curated to help you relax and unwind while we take care of your grooming needs.",
            img: "src/assets/img.jpg"
        },
        {
            logo: <IoCutOutline size={40} />,
            heading: "ATTENTION TO DETAIL",
            content: "At our barbershop, we believe that the smallest details make the biggest difference. From clean lines to seamless fades, we focus on perfection in every stroke. Our barbers take time to understand your vision and bring it to life with precision, care, and finesse, ensuring you leave looking and feeling your best.",
            img: "src/assets/img.jpg"
        }

    ];

    return (
        <div className="main bg-[#141414] w-full">
            {/* Header Text Section */}
            <div className="h-auto pb-12 text-center flex flex-col justify-center items-center text-white px-4">
                <p ref={(el) => (sectionRef.current[0] = el)} className="text-[#FF8442] tracking-widest text-sm sm:text-base">WHY CHOOSE OUR SHOP ?</p>
                <h1 ref={(el) => (sectionRef.current[1] = el)} className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">OUR DIFFERENCES</h1>
                <p ref={(el) => (sectionRef.current[2] = el)} className="w-full md:w-2/3 mt-2 text-sm sm:text-base">
                    Experience our unique approach to grooming – where personalized service meets skilled artistry. Discover a haven where style and individuality intertwine.
                </p>
            </div>

            {/* Card Section */}
            {items.map((item, index) => (
                <div ref={(el) => (sectionRef.current[index+3] = el)} key={index} className="mx-4 sm:mx-8 md:mx-16 lg:mx-20 mb-4">
                    <div className="main_card bg-black text-white rounded-xl shadow-lg overflow-hidden">
                        <div
                            className="click_here flex sm:flex-row items-center sm:items-center justify-between py-2 sm:py-2 border-b border-gray-700 cursor-pointer gap-4 sm:gap-0"
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="left flex items-center sm:items-center px-4 space-x-4">
                                <div className=" text-[#FF8442]">{item.logo}</div>
                                <h1 className="text-[10px] sm:text-xl md:text-2xl font-semibold">{item.heading}</h1>
                            </div>
                            <div
                                className="right px-4 sm:px-6 md:px-12 text-[#FF8442] transition-transform duration-300 ease-in-out"
                                style={{ transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)" }}
                            >
                                <MdKeyboardArrowUp size={20} className=" sm:size-20" />
                            </div>
                        </div>

                        {/* Dropdown Content */}
                        <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <div className="flex flex-col md:flex-row justify-between items-center p-4 sm:p-6 gap-6">
                                <div className="w-full md:w-1/2">
                                    <p className="text-[10px] sm:text-base md:text-lg leading-relaxed">{item.content}</p>
                                </div>
                                <div className="w-full md:w-1/2 flex justify-center">
                                    <img
                                        className="max-w-full h-auto rounded-lg shadow-md"
                                        src={item.img}
                                        alt={item.heading}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Bottom Highlights Section */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-10 lg:gap-20 py-10 px-4 text-white text-base sm:text-lg md:text-xl text-center">
                <div ref={(el) => (sectionRef.current[8] = el)} className="flex items-center gap-2">
                    <HiOutlineSparkles size={24} className="text-[#ff8442]" />
                    <h1>Personalized Styling</h1>
                </div>
                <div ref={(el) => (sectionRef.current[9] = el)} className="flex items-center gap-2">
                    <HiOutlineSparkles size={24} className="text-[#ff8442]" />
                    <h1>Client-Centric Approach</h1>
                </div>
                <div ref={(el) => (sectionRef.current[10] = el)} className="flex items-center gap-2">
                    <HiOutlineSparkles size={24} className="text-[#ff8442]" />
                    <h1>Luxurious Shaves</h1>
                </div>
            </div>
        </div>

    );
}

export default Differences;
