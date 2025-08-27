import React, { useState, useEffect } from "react";
import { CgMenuRight } from "react-icons/cg";
import { FaEnvelope } from "react-icons/fa";
import Oxygenicon from "../../assets/images/icons/oxygenicon.png";
import logo from "../../assets/images/homepageImages/logopng4.png";
import { Link } from "react-scroll";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent background scroll on mobile when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  // Smooth scroll handler
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between relative z-50">
      {/* Branding */}
      <div className="flex items-center gap-2 rounded-full p-3 shadow-md mr-1">
        <img
          src={logo}
          alt="Oxygen Icon"
          className="w-28 h-26 rounded-full shadow-sm"
        />
      </div>

      {/* Hamburger Icon (mobile only) */}
      <button
        className="block xl:hidden text-2xl text-green-900 z-[999]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        <CgMenuRight />
      </button>

      {/* Navigation Links */}
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute top-20 left-6 right-6 z-[998] flex flex-col items-center gap-4 
        rounded-xl p-6 shadow-md text-base font-semibold text-green-200 
        backdrop-blur-sm bg-white/10
        xl:static xl:flex xl:flex-row xl:items-center xl:gap-8 xl:rounded-full xl:px-8 xl:py-3 xl:shadow-sm xl:bg-transparent`}
      >
        <li className="block xl:hidden">
          <img
            src={Oxygenicon}
            alt="Logo"
            className="w-8 h-8 rounded-full shadow-sm"
          />
        </li>

        {["Home", "About", "Features", "Products", "Contact"].map((item) => (
          <li key={item}>
              <Link
      to={item.toLowerCase()}   // should match section id
      smooth={true}
      duration={5000}          // duration of the scroll in ms
      offset={-80}              // adjust if you have a fixed navbar
      spy={true}                // makes it track active section
      // activeClass="text-green-600 font-bold" // tailwind classes for active link
      onClick={() => setIsMenuOpen(false)}
      className="hover:underline cursor-pointer"
    >
      {item}
    </Link>
          </li>
        ))}
      </ul>

      {/* Contact Button (desktop only) */}
      <button
        className="hidden xl:flex items-center gap-3 rounded-full px-6 py-2 text-base font-semibold text-green-200 shadow-sm"
        type="button"
      >
        <FaEnvelope className="text-green-200" />
        oxygen.decor@gmail.com
      </button>
    </nav>
  );
}

export default Navbar;
