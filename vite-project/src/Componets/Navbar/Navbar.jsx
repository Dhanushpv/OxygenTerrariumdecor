import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { FaEnvelope } from "react-icons/fa"; // Replacing <i className="fas fa-envelope" />
import Oxygenicon from "../../assets/images/icons/oxygenicon.png"; // Adjust path as needed

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between relative">
      {/* Left Branding */}
      <div className="flex items-center gap-2">
        <img
          src={Oxygenicon}
          alt="Oxygen Icon"
          className="w-8 h-8 rounded-full shadow-sm"
        />
        <span className="text-[#2F4F4F] font-semibold text-lg">
          Oxygen Terrarium Decor
        </span>
      </div>

      {/* Hamburger Icon - visible only below 1205px */}
      <button
        className="max-[1204px]:block hidden text-2xl text-[#2F4F4F]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        <CgMenuRight />
      </button>

      {/* Navigation Links */}
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute top-20 left-6 right-6 z-10 flex-col items-center gap-4 bg-white rounded-xl p-6 shadow-md text-base font-semibold text-[#2F4F4F]
        min-[1205px]:static min-[1205px]:flex min-[1205px]:flex-row min-[1205px]:items-center min-[1205px]:gap-8 min-[1205px]:bg-white min-[1205px]:rounded-full min-[1205px]:px-8 min-[1205px]:py-3 min-[1205px]:shadow-sm`}
      >
        <li>
          <img
            src={Oxygenicon}
            alt="Logo"
            className="w-8 h-8 rounded-full shadow-sm"
          />
        </li>
        {["Works", "Benefits", "About", "Process", "Pricing", "Contact", "FAQ"].map((item) => (
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

      {/* Right Contact Button - only visible at >= 1205px */}
      <button
        className="hidden min-[1205px]:flex items-center gap-3 bg-white rounded-full px-6 py-2 text-base font-semibold text-[#2F4F4F] shadow-sm"
        type="button"
      >
        <FaEnvelope />
        hey@zenwood.studio
      </button>
    </nav>
  );
}

export default Navbar;
