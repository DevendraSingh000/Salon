import React, { useState } from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [isactive, setIsActive] = useState(false);

  const nav = [
    { path: "/", name: "home", type: "route" },
    { path: "#price", name: "Pricing", type: "anchor" },
    { path: "/services", name: "Services", type: "route" },
    { path: "/gallery", name: "Gallery", type: "route" },
    { path: "/blog", name: "Blog", type: "route" },
    { path: "/about", name: "About Us", type: "route" },
    { path: "/contect", name: "Contact Us", type: "route" },
  ];

  return (
    <>
      <nav className="navbar relative flex bg-black text-white justify-between items-center px-6 py-4 z-50">
        {/* Logo */}
        <div className="text-xl font-bold">Logo</div>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex gap-6">
          {nav.map((item) => (
            <li key={item.path}>
              {item.type === "route" ? (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "text-[#FF8442] font-semibold" : "hover:text-[#FF8442] transition"
                  }
                >
                  {item.name}
                </NavLink>
              ) : (
                <a
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    const id = item.path.replace("#", "");
                    const el = document.getElementById(id);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      setIsActive(false);
                    }
                  }}
                  className="hover:text-[#FF8442] transition"
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Contact Button */}
        <button className="hidden sm:flex items-center gap-2 bg-transparent border border-[#FF8442] text-white px-4 py-2 rounded hover:bg-[#FF8442] transition">
          <FiPhoneCall /> Contact Us
        </button>

        {/* Mobile Menu Toggle */}
        <button className="sm:hidden text-2xl" onClick={() => setIsActive(!isactive)}>
          {isactive ? <IoMdClose /> : <RiMenu2Fill />}
        </button>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isactive && (
        <ul className="sm:hidden absolute top-0 left-0 w-full bg-black/95 text-white flex flex-col items-center gap-6 py-6 transition-all duration-700 z-40">
          {nav.map((item) => (
            <li key={item.path}>
              {item.type === "route" ? (
                <NavLink
                  to={item.path}
                  onClick={() => setIsActive(false)}
                  className={({ isActive }) =>
                    isActive ? "text-[#FF8442] font-semibold" : "hover:text-[#FF8442] transition"
                  }
                >
                  {item.name}
                </NavLink>
              ) : (
                <a
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    const id = item.path.replace("#", "");
                    const el = document.getElementById(id);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      setIsActive(false);
                    }
                  }}
                  className="hover:text-[#FF8442] transition"
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
          <button className="flex items-center gap-2 bg-transparent border border-[#FF8442] text-white px-4 py-2 rounded hover:bg-[#FF8442] transition">
            <FiPhoneCall /> Contact Us
          </button>
        </ul>
      )}
    </>
  );
}

export default Navbar;
