import React from "react";
import Featurebg from "../../assets/images/homepageImages/Featurebg.jpg";
import Features from "../../assets/images/homepageImages/Featuresbg.png";

function Feature() {
  return (
    <div
      className="w-full bg-no-repeat bg-cover bg-center min-h-[1000px] sm:min-h-screen"
      style={{ backgroundImage: `url(${Featurebg})` }}
    >
      <div className="px-5 sm:px-10 lg:px-20 py-10 space-y-12">
        {/* Top image */}
        <div className="flex justify-center">
          <img
            src={Features}
            className="w-[300px] sm:w-[500px] lg:w-[800px]"
            alt="Features"
          />
        </div>

        {/* Feature 1 */}
        <div className="text-left sm:text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f350b]">
            Bring Nature Indoors
          </h1>
          <p className="mt-4 text-base sm:text-lg max-w-full lg:w-[45%] text-justify font-bold text-[#458a65]">
            Our terrariums are handcrafted with care, designed to bring the calming beauty of nature into your home or workspace. Each creation is a miniature world, blending lush greenery with artistic design to create a living piece of décor.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="text-left sm:text-center lg:text-right lg:ml-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f350b]">
            Sustainable & Low Maintenance
          </h1>
          <p className="mt-4 text-base sm:text-lg max-w-full lg:w-[45%] lg:ml-auto text-justify font-bold text-[#458a65]">
            We use eco-friendly materials and plants chosen to thrive with minimal care, making them ideal for busy lifestyles. Each terrarium adds freshness, life, and a touch of nature while helping create a healthier indoor environment.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="text-left sm:text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f350b]">
            Stylish & Space-Saving
          </h1>
          <p className="mt-4 text-base sm:text-lg max-w-full lg:w-[45%] text-justify font-bold text-[#458a65]">
            Compact yet full of character, our terrariums fit beautifully on desks, shelves, or countertops, enhancing your space without overwhelming it. Their unique designs bring vibrant energy and charm to any corner of your home or workplace.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="text-left sm:text-center lg:text-right lg:ml-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f350b]">
            A Gift That Lasts
          </h1>
          <p className="mt-4 text-base sm:text-lg max-w-full lg:w-[45%] lg:ml-auto text-justify font-bold text-[#458a65]">
            Each terrarium is one of a kind, making it a thoughtful and memorable gift for birthdays, anniversaries, or special celebrations. With proper care, these living creations flourish, providing lasting beauty and joy for many years.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feature;
