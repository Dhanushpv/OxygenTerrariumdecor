import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import hpi1 from "../../assets/images/homepageImages/hpi-1.jpg";
import hpi2 from "../../assets/images/homepageImages/hpi-2.jpg";
import hpi4 from "../../assets/images/homepageImages/hpi-4.jpg";

const images = [
  { src: hpi1, alt: "Garment showroom exterior" },
  { src: hpi2, alt: "Textile variety showcase" },
  { src: hpi4, alt: "Happy customers in store" },
];

export default function Homepage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide every 5 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <>
    <div className="body bg-green-200">
            <div className="relative w-full h-[20rem] md:h-[38rem]">
        <div className="absolute top-0 left-0 w-full z-10">
          <Navbar />
        </div>

        <div
          className="absolute top-0 w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative w-full h-[20rem] md:h-[38rem]">
            {images.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Prev Button */}
            <button
              onClick={goToPrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-10"
            >
              &#10094;
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-10"
            >
              &#10095;
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full ${
                    idx === currentIndex ? "bg-white" : "bg-gray-400"
                  } hover:bg-white transition`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sample Content Section */}
     <div className="py-8 my-5 text-center bg-green-800 text-gray-100 font-serif">
  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
    "Bringing Nature Indoors — One Terrarium at a Time"
  </h2>
  <p className="mt-2 text-sm sm:text-base md:text-lg  font-light font-serif">
    Handcrafted Decor | Plant Styling | Ongoing Care
  </p>
</div>

    </div>
    </>
  );
}
