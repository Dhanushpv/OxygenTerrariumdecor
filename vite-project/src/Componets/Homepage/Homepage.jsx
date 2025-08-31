import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import lnd1 from "../../assets/images/homepageImages/Homebg2.jpg";
import terrariumShowcase from "../../assets/images/homepageImages/terrarium-display2.png";
import Cards from "../Cards/Cards";
import cph1 from "../../assets/images/homepageImages/cph1.png";
import cph2 from '../../assets/images/homepageImages/cph2.png';
import cph3 from '../../assets/images/homepageImages/cph3.png';
import cph4 from '../../assets/images/homepageImages/cph4.png';
import cph5 from '../../assets/images/homepageImages/cph5.png';
import cph6 from '../../assets/images/homepageImages/cph6.png';
import cph7 from '../../assets/images/homepageImages/cph7.png';
import Plant from "./plants";
import Feature from "./Feature";
import { PiPlant } from "react-icons/pi";
import { GrGroup } from "react-icons/gr";
import { TbPlant2 } from "react-icons/tb";
import { MdOutlineLocalShipping } from "react-icons/md";
import Aboutbg from "../../assets/images/homepageImages/Aboutbg.jpg";
import Footer from "../Footer/Footer";
import Contactus from "./Contactus";
import AOS from "aos";
import "aos/dist/aos.css";
import Buttons from "./Button";


export default function Homepage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation duration (ms)

    });
  }, []);



  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <Buttons />
      </div>
      <div className="" id="home" data-aos="fade-up">


        {/* Hero Section */}
        <div className="relative w-full h-[36rem] sm:h-[42rem] lg:h-[45rem]" data-aos="fade-up">
          <img
            src={lnd1}
            alt="Landing background"
            className="w-full h-full object-cover rounded-b-[40px]"
          />
          <div className="absolute inset-0  z-10" />
          <div className="absolute top-0 left-0 w-full z-50">
            <Navbar data-aos="fade-up" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start px-4 sm:px-10 md:px-16 lg:px-20 z-20">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-arcadian font-thin text-white tracking-tight leading-snug text-center sm:text-left">
              <span className="block font-thin">Find the Perfect Plant for Your</span>
              <span className="block font-thin">Home, with Expert Help Every</span>
              <span className="block font-thin">Step of the Way</span>
            </h1>
          </div>




        </div>

        {/* Features Section */}
        <div className="flex flex-wrap justify-center items-center gap-20 p-8 bg-[#ACFEAC]" data-aos="fade-up">

          <div className="flex flex-col items-center px-5 ">
            <div className="text-white bg-[#284727]  p-4 rounded-full   text-6xl"><PiPlant className="  " /></div>
            <div className="pt-3">Bespoke Support</div>
          </div>

          <div className="flex flex-col items-center  p">
            <div className="text-white bg-[#284727]  p-4 rounded-full text-6xl"><GrGroup className="  " /></div>
            <div className="pt-3">Expert Plant Support </div>
          </div>

          <div className="flex flex-col items-center ">
            <div className="text-white bg-[#284727]  p-4 rounded-full  text-6xl mt-4"><TbPlant2 className="  " /></div>
            <div className="pt-3 flex flex-col items-center"><span>Multiple Plant</span> <span>Species Available</span></div>
          </div>


          <div className="flex flex-col items-center ">
            <div className="text-white bg-[#284727]  p-4 rounded-full  text-6xl mt-4 "><MdOutlineLocalShipping className="  " /></div>
            <div className="pt-3 flex flex-col items-center"><span>Eco-Safe </span><span>Delivery & Plant Care</span></div>
          </div>


          {/* <div className="  "><GrGroup className="text-4xl text-white bg-[#284727] p-4 rounded-full" /></div>
            <div className="" ><TbPlant2 className="text-4xl text-white " /></div>
            <div className="bg-[#284727] p-8  rounded-full" ><MdOutlineLocalShipping className="text-4xl text-white " /></div> */}



        </div>


        {/* Tagline Section3 */}
        <div className="py-8 px-4 text-center bg-green-900 text-gray-100 font-serif" data-aos="fade-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
            "Bringing Nature Indoors — One Terrarium at a Time"
          </h2>
          <p className="mt-2 text-sm sm:text-base md:text-lg font-light">
            Handcrafted Decor | Plant Styling | Ongoing Care
          </p>
        </div>
        {/* Intro Section */}
        <section className="overflow-hidden py-14 sm:py-20" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Text */}
              <div>
                <div className="lg:max-w-xl">
                  <h2 className="text-sm font-semibold text-green-600 uppercase tracking-wide">
                    Oxygen Terrarium Decor
                  </h2>
                  <p className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 font-serif">
                    Nature, Reimagined Indoors
                  </p>
                  <p className="mt-6 text-base sm:text-lg text-gray-600">
                    We specialize in handcrafted terrariums that bring lush greenery and tranquility to your spaces. From minimalist designs to detailed botanical worlds — every piece is made with care, creativity, and sustainability in mind.
                  </p>

                  <dl className="mt-10 space-y-8 text-gray-600">
                    {[
                      {
                        title: "Handcrafted with Love",
                        description:
                          "Every terrarium is artistically assembled using premium materials and live plants.",
                        iconPath:
                          "M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z",
                      },
                      {
                        title: "Easy to Maintain",
                        description:
                          "Our terrariums thrive with minimal care — perfect for busy lives and urban spaces.",
                        iconPath:
                          "M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z",
                      },
                      {
                        title: "Sustainable & Eco-Friendly",
                        description:
                          "We use recyclable glassware and eco-conscious methods to promote a greener planet.",
                        iconPath:
                          "M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Z",
                      },
                    ].map((item, i) => (
                      <div key={i} className="relative pl-9">
                        <dt className="font-semibold text-gray-900 flex items-center">
                          <svg
                            className="absolute top-1 left-1 w-5 h-5 text-green-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d={item.iconPath} />
                          </svg>
                          {item.title}
                        </dt>
                        <dd className="mt-1 ml-0.5 text-sm sm:text-base">
                          {item.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              {/* Image */}
              <div className="w-full max-w-xl mx-auto">
                <img
                  src={terrariumShowcase}
                  alt="Terrarium Display"
                  className="w-full h-auto object-cover rounded-2xl shadow-xl ring-1 ring-gray-300/30"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tagline Section2 */}
        <div className="py-8 px-4 text-center bg-green-900 text-gray-100 font-serif" id="products" data-aos="fade-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
            “Explore our most popular shapes, designed to fit every space.”
          </h2>

        </div>

        {/* Cards Section */}
        <div data-aos="fade-up"><Cards /></div>

        {/* Plant Section */}
        <div className="" data-aos="fade-up">
          <div className="pt-20 py-20   PlantCard">
            <Plant />
          </div>
        </div>

        {/* Tagline Section3 */}
        <div className="py-8 px-4 text-center bg-green-900 text-gray-100 font-serif" data-aos="fade-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
            "We also offer beautifully customized products to suit your style!"
          </h2>

        </div>


        {/* Custom Terrarium Section */}
        <div
          className="relative overflow-hidden  bg-[#ACFEAC]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 sm:pb-32">
              <div className="sm:max-w-lg z-50 relative">
                <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl pt-20 font-times">
                  Crafting Unique, Customized Terrariums to Suit Every Space
                </h1>
                <p className="mt-6 text-lg leading-relaxed font-times text-gray-600">
                  We are passionate creators of handcrafted terrariums, specializing in transforming your unique ideas into stunning pieces of living art. Our work blends creativity, nature, and design to craft customized terrariums that elevate any space—be it a home, office, or special event. Each creation is thoughtfully designed with a deep appreciation for detail, harmony, and sustainability.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-600 subtext_ex font-times">
                  From minimalist glass gardens to elaborate themed landscapes, we take pride in offering fully personalized designs that suit your style, mood, and environment. Every terrarium is not just a product—it’s a reflection of nature’s beauty, captured and curated with care. With a strong focus on quality, innovation, and lasting charm, we’re here to help you bring a little green magic indoors.
                </p>
              </div>

              <div>
                {/* Decorative image grid */}
                <div className="lg:block absolute inset-5  lg:mx-full lg:w-full md:max-w-7xl  flex justify-center items-center z-0 opacity-30 md:opacity-30 lg:opacity-100">

                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src={cph1} alt="Terrarium 1" className="size-full object-cover" />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src={cph2} alt="Terrarium 2" className="size-full object-cover" />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src={cph7} alt="Terrarium 3" className="size-full object-cover" />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src={cph4} alt="Terrarium 4" className="size-full object-cover" />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src={cph6} alt="Terrarium 5" className="size-full object-cover" />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src={cph3} alt="Terrarium 6" className="size-full object-cover" />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src={cph5} alt="Terrarium 7" className="size-full object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div className="flex items-center mt-10">
                  <a
                    // onClick={() => navigate("/About")}
                    className="inline-block rounded-md border border-transparent bg-green-600 px-8 py-3 text-center font-medium text-white hover:bg-green-700 z-50 relative cursor-pointer"
                  >
                    Read More
                  </a>


                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="py-8 px-4 text-center bg-green-900 text-gray-100 font-serif" id="about" data-aos="fade-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
            "About Us – Why Choose Us?"
          </h2>

        </div>

        <div data-aos="fade-up"
          // Show background only on large screens
          style={{ backgroundImage: `url(${Aboutbg})` }}
          className="w-full bg-no-repeat bg-center min-h-[1000px] sm:min-h-screen border-t-4 border-b-4 border-green-900 bg-contain 
    hidden lg:block
  "
        >
          <div className="flex justify-between">
            <h1 className="text-7xl w-[28%]  font-arcadian leading-[110px] flex flex-col items-center justify-center py-10 tracking-wider">
              Why We’re Committed to Meeting All Your Terrarium Needs
            </h1>

            <div className="text-right w-[32%] text-justify p-5">
              <p className="pt-5 leading-8 tracking-wider">
                We believe terrariums are more than just décor—they’re living art pieces that bring nature indoors. Each terrarium is carefully crafted with balance in mind, creating a miniature ecosystem that thrives with minimal effort. Whether you’re a first-time plant owner or a seasoned green enthusiast, our terrariums are designed to fit seamlessly into your lifestyle.
              </p>

              <p className="pt-5 leading-8 tracking-wider">
                But we don’t stop at creating beautiful pieces—we’re here to guide you beyond the purchase. From helping you choose the right terrarium for your home or workspace to offering care tips for light, watering, and placement, we make sure your little garden flourishes. We also provide access to rare and custom terrarium designs, packaged with care to reach you in perfect condition.
              </p>

              <p className="pt-5 leading-8 tracking-wider">
                Our support doesn’t end at checkout. Our expert team is available 24/7 to answer your questions, whether it’s about humidity, condensation, or rearranging your plants. With us, you’re not just buying a terrarium—you’re gaining a partner who’s committed to keeping your indoor garden thriving for years to come.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet version without background */}
        <div className="block lg:hidden w-full border-t-4 border-b-4 border-green-900  px-5 py-10" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl font-bold text-center leading-tight tracking-wide">
            Why We’re Committed to Meeting All Your Terrarium Needs
          </h1>

          <div className="text-justify mt-6 space-y-4">
            <p>
              We believe terrariums are more than just décor—they’re living art pieces that bring nature indoors. Each terrarium is carefully crafted with balance in mind, creating a miniature ecosystem that thrives with minimal effort. Whether you’re a first-time plant owner or a seasoned green enthusiast, our terrariums are designed to fit seamlessly into your lifestyle.
            </p>

            <p>
              But we don’t stop at creating beautiful pieces—we’re here to guide you beyond the purchase. From helping you choose the right terrarium for your home or workspace to offering care tips for light, watering, and placement, we make sure your little garden flourishes. We also provide access to rare and custom terrarium designs, packaged with care to reach you in perfect condition.
            </p>

            <p>
              Our support doesn’t end at checkout. Our expert team is available 24/7 to answer your questions, whether it’s about humidity, condensation, or rearranging your plants. With us, you’re not just buying a terrarium—you’re gaining a partner who’s committed to keeping your indoor garden thriving for years to come.
            </p>
          </div>
        </div>






        <div id="features" data-aos="fade-up">
          <Feature />
        </div>

        <div id="contact" data-aos="fade-up">
          <Contactus />
        </div>

        <div data-aos="fade-up">
          {/* Footer Component */}
          <Footer />
        </div>




      </div>
    </>
  );
}
