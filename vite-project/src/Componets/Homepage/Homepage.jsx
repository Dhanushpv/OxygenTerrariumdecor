import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import hpi1 from "../../assets/images/homepageImages/hpi-1.jpg";
import hpi2 from "../../assets/images/homepageImages/hpi-2.jpg";
import hpi4 from "../../assets/images/homepageImages/hpi-4.jpg";
import lnd1 from "../../assets/images/homepageImages/lnd3.jpg";
import terrariumShowcase from "../../assets/images/homepageImages/terrarium-display2.png";

const images = [
  { src: hpi1, alt: "Garment showroom exterior" },
  { src: hpi2, alt: "Textile variety showcase" },
  { src: hpi4, alt: "Happy customers in store" },
];

export default function Homepage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <>
      <div className="bg-green-200 font-sans">
        {/* Hero Section */}
        <div className="relative w-full h-[36rem] sm:h-[42rem] lg:h-[45rem]">
          <img
            src={lnd1}
            alt="Landing background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-transparent z-10" />
          <div className="absolute top-0 left-0 w-full z-20">
            <Navbar />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-20">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white font-serif drop-shadow-lg">
              Oxygen Terrarium Decor
            </h1>
            <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-white font-light font-serif drop-shadow">
              “Breathe better. Live greener. Decor smarter.”
            </p>
          </div>
        </div>

        {/* Intro Section */}
        <section className="overflow-hidden py-14 sm:py-20">
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

        {/* Tagline Section */}
        <div className="py-8 px-4 text-center bg-green-900 text-gray-100 font-serif">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
            "Bringing Nature Indoors — One Terrarium at a Time"
          </h2>
          <p className="mt-2 text-sm sm:text-base md:text-lg font-light">
            Handcrafted Decor | Plant Styling | Ongoing Care
          </p>
        </div>

<div className="container px-4 py-16 mx-auto flex flex-wrap justify-center gap-6">
  <div className="card relative w-72 h-72 rounded-lg overflow-hidden">
    <div className="bg absolute inset-0 bg-gray-200"></div>
    <div className="blob absolute w-24 h-24 bg-blue-400 rounded-full top-8 left-8"></div>
  </div>

  <div className="card relative w-72 h-72 rounded-lg overflow-hidden">
    <div className="bg absolute inset-0 bg-gray-200"></div>
    <div className="blob absolute w-24 h-24 bg-green-400 rounded-full top-8 left-8"></div>
  </div>

  <div className="card relative w-72 h-72 rounded-lg overflow-hidden">
    <div className="bg absolute inset-0 bg-gray-200"></div>
    <div className="blob absolute w-24 h-24 bg-pink-400 rounded-full top-8 left-8"></div>
  </div>

  
  <div className="card relative w-72 h-72 rounded-lg overflow-hidden">
    <div className="bg absolute inset-0 bg-gray-200"></div>
    <div className="blob absolute w-24 h-24 bg-pink-400 rounded-full top-8 left-8"></div>
  </div>

  
  <div className="card relative w-72 h-72 rounded-lg overflow-hidden">
    <div className="bg absolute inset-0 bg-gray-200"></div>
    <div className="blob absolute w-24 h-24 bg-pink-400 rounded-full top-8 left-8"></div>
  </div>
</div>

      </div>
    </>
  );
}
