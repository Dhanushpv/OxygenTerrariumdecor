import React from "react";
import bgImage from "../../assets/images/homepageImages/contactusbg2.jpg"; 
import { CiHome, CiMail, CiPhone } from "react-icons/ci";

function Contactus() {
  return (
    <>

      <div
        className="w-full  text-white border-4 border-[#ACFEAC] rounded-xl"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-center py-3 text-8xl font-bold text-green-200 font-arcadian">Contact US</h1>
        
        <div className="flex flex-col lg:flex-row items-center justify-between w-full px-6 sm:px-10 py-10 gap-6">
          
          {/* Left Section - Info */}
          <div className="bg-[#ACFEAC] p-6 sm:p-10 rounded-xl w-full lg:w-[40%] py-10">
            <div className="flex flex-col items-center text-center mb-6 py-6">
              <CiHome className="text-4xl text-black" />
              <h1 className="text-black font-semibold">Home</h1>
            </div>

            <div className="flex flex-col items-center text-center mb-6 py-6">
              <CiMail className="text-4xl text-black" />
              <h1 className="text-black font-semibold">Contact Us</h1>
            </div>

            <div className="flex flex-col items-center text-center py-6">
              <CiPhone className="text-4xl text-black" />
              <h1 className="text-black font-semibold">Phone</h1>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="text-center w-full lg:w-[50%] bg-[#063B00] bg-opacity-70  sm:p-10 rounded-xl">
            <form>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 my-3 rounded-lg text-black"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 my-3 rounded-lg text-black"
                />
              </div>

              <div>
                <textarea
                  cols="30"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full p-3 my-3 rounded-lg text-black"
                ></textarea>
              </div>

              <button className="bg-[#ACFEAC] text-black font-bold px-6 py-3 rounded-lg hover:bg-green-600 w-full sm:w-auto">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}

export default Contactus;
