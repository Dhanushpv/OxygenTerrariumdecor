import React, { useState, useEffect } from "react";
import { CgMenuRight } from "react-icons/cg";
import { FaEnvelope } from "react-icons/fa";
import Oxygenicon from "../../assets/images/icons/oxygenicon.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent background scroll on mobile when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between relative z-50">
      {/* Branding */}
      <div className="flex items-center gap-2 bg-white rounded-full p-3 shadow-md mr-1">
        <img
          src={Oxygenicon}
          alt="Oxygen Icon"
          className="w-8 h-8 rounded-full shadow-sm"
        />
        <span className="text-[#2F4F4F] font-semibold sm:text-sm  md:text-lg lg:text-xl ">
          Oxygen Terrarium Decor
        </span>
      </div>

      {/* Hamburger Icon (mobile only) */}
      <button
        className="block xl:hidden text-2xl text-[#2F4F4F] z-[999]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        <CgMenuRight />
      </button>

      {/* Navigation Links */}
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute top-20 left-6 right-6 z-[998] flex-col items-center gap-4 bg-white rounded-xl p-6 shadow-md text-base font-semibold text-[#2F4F4F]
        xl:static xl:flex xl:flex-row xl:items-center xl:gap-8 xl:bg-white xl:rounded-full xl:px-8 xl:py-3 xl:shadow-sm`}
      >
        <li className="block xl:hidden">
          <img
            src={Oxygenicon}
            alt="Logo"
            className="w-8 h-8 rounded-full shadow-sm"
          />
        </li>
        {[
          "Works",
          "Benefits",
          "About",
          "Process",
          "Pricing",
          "Contact",
          "FAQ",
        ].map((item) => (
          <li key={item}>
            <a
              href="#"
              className="hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Contact Button (desktop only) */}
      <button
        className="hidden xl:flex items-center gap-3 bg-white rounded-full px-6 py-2 text-base font-semibold text-[#2F4F4F] shadow-sm"
        type="button"
      >
        <FaEnvelope />
        hey@zenwood.studio
      </button>
    </nav>
  );
}

export default Navbar;
