import React from "react";
import footer1 from "../../assets/images/homepageImages/footer1.jpg";
import logo from '../../assets/images/homepageImages/logopng3.png';

function Footer() {
  return (
    <footer
  className="w-full h-96 bg-cover bg-center text-white"
  style={{ backgroundImage: `url(${footer1})` }}
>
  <div className="w-full h-full bg-black/40 flex flex-col justify-between">
    
    {/* Top Section with Logo, Company Info, Contact */}
    <div className="flex flex-col md:flex-row justify-between items-center flex-grow px-6 py-6">
      
      {/* Left: Logo */}
      <div className="mb-6 md:mb-0">
        <img 
          src={logo}
          alt="Oxygen Terrarium Decor Logo" 
          className="w-96 h-96 object-contain"
        />
      </div>

      {/* Center: Company Name + Navigation */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-3">Oxygen Terrarium Decor</h2>
        <div className="space-x-6 text-lg font-medium">
          <a href="#home" className="hover:text-green-300">Home</a>
          <a href="#features" className="hover:text-green-300">Features</a>
          <a href="#about" className="hover:text-green-300">About</a>
          <a href="#contact" className="hover:text-green-300">Contact</a>
        </div>
      </div>

      {/* Right: Contact Info */}
      <div className="text-center md:text-right mt-6 md:mt-0">
        <p className="mb-2">📧 oxygen.decor@gmail.com</p>
        <p>📞 +91 98765 43210</p>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="bg-black/60 py-3 text-center text-sm">
      <p>© {new Date().getFullYear()} Oxygen Terrarium Decor. All rights reserved.</p>
    </div>
  </div>
</footer>

  );
}

export default Footer;
