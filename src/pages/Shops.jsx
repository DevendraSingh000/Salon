import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap';
import { Link } from 'react-router-dom'

function Shops() {
    
    return (
        <>
            <div className='bg-black h-[600px] w-full '>
                <div className=' h-[200px] w-full flex'>
                    <div className=' h-[200px] w-full flex items-center px-20'>
                        <div>
                            <p className='text-[#FF8442] text-sm tracking-widest px-1'>WHAT WE OFFER</p>
                            <p className='text-white text-4xl font-sans'>OUR SHOP IN IMAGES</p>
                        </div>
                    </div>
                    <div className='h-[200px] w-full flex items-center justify-end px-12'>
                        <div>
                            <Link href="#_" className="relative mt-4 inline-flex items-center  px-12 py-2 overflow-hidden text-lg font-medium text-[#FF8442] border-2 border-[#FF8442] rounded-full hover:text-white group hover:bg-gray-50">
                                <span className="absolute left-0 block w-full h-0 transition-all bg-[#FF8442] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="relative">VIEW GALLERY</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    {/* YHA CAROUSAL BANANA HAI */}
                </div>
            </div>
        </>
    )
}

export default Shops
