import React from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black text-white px-6 py-10">
            <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
                {/* Brand Info */}
                <div className="md:border-r md:pr-10">
                    <div className="flex items-center space-x-2 mb-4">
                        <h1 className="text-4xl font-bold text-[#ff8442]">TrimHub</h1>
                    </div>
                    <p className="text-sm text-gray-300">
                        Elevating Grooming. Inspiring Style. Unleash Your Confidence at TrimHub
                        where we craft exceptional looks that reflect your individuality — a
                        passion for style and an eye for detail.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-[#ff8442] font-semibold mb-4">QUICK LINKS</h2>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>
                            <Link to="/" className="hover:underline">Home</Link>
                        </li>
                        <li>
                            <a
                                href="/"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const el = document.getElementById("/");
                                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                                }}
                                className="hover:underline"
                            >
                                Pricing
                            </a>
                        </li>
                        <li>
                            <Link to="/services" className="hover:underline">Services</Link>
                        </li>
                        <li>
                            <Link to="/gallery" className="hover:underline">Gallery</Link>
                        </li>
                        <li>
                            <Link to="/blog" className="hover:underline">Blog</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:underline">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contect" className="hover:underline">Contact Us</Link>
                        </li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h2 className="text-[#ff8442] font-semibold mb-4">SERVICES</h2>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#haircut" className="hover:underline">Haircut & Hairstyling</a></li>
                        <li><a href="#beard" className="hover:underline">Beard Styling</a></li>
                        <li><a href="#skincare" className="hover:underline">Grooming & Skincare</a></li>
                        <li><a href="#color" className="hover:underline">Color & Treatment</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h2 className="text-[#ff8442] font-semibold mb-4">LEGAL</h2>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#terms" className="hover:underline">Terms & Conditions</a></li>
                    </ul>
                </div>
            </div>

            {/* Social Section */}
            <div className="mt-10 mx-auto max-w-7xl border-b border-gray-700 pb-6">
                <h2 className="text-[#ff8442] font-semibold text-3xl mb-6">FOLLOW US ON</h2>
                <div className="flex flex-wrap gap-6">
                    <span className="text-white border-4 p-1 bg-[#2D2D2D] rounded-full group hover:scale-125 duration-500">
                        <RiFacebookCircleFill size={30} className="group-hover:text-[#ff8442]" />
                    </span>
                    <span className="text-white border-4 p-1 bg-[#2D2D2D] rounded-full group hover:scale-125 duration-500">
                        <FaTwitter size={30} className="group-hover:text-[#ff8442]" />
                    </span>
                    <span className="text-white border-4 p-1 bg-[#2D2D2D] rounded-full group hover:scale-125 duration-500">
                        <AiFillInstagram size={30} className="group-hover:text-[#ff8442]" />
                    </span>
                    <span className="text-white border-4 p-1 bg-[#2D2D2D] rounded-full group hover:scale-125 duration-500">
                        <BsYoutube size={30} className="group-hover:text-[#ff8442]" />
                    </span>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-xs text-gray-400 text-center mt-6">
                © Template by RealMehdi | Built in Framer
            </div>
        </footer>

    );
};

export default Footer;

