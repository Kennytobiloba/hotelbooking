import React from 'react';
import bgImage from "../../assests/hotel-6862159_1280.jpg";
import RajLayout from './RajLayout';

const Hero = () => {
  return (
    <div className='relative max-w-full  md:h-screen h-[70vh]'>
      {/* Background Image */}
      <img src={bgImage} alt="Hotel" className='w-full h-full object-cover absolute inset-0' />

      {/* Ensure the button and text are above the image using z-index */}
      <div className='absolute inset-0 z-10 flex flex-col items-center justify-center'>
        {/* Responsive heading */}
        <h4 className="text-center capitalize text-sm sm:text-[22px] lg:text-xl font-roboto text-white font-bold">
          Welcome to
        </h4>
        <h1 className="text-white text-[40px] sm:text-[70px] lg:text-[100px] font-semibold mt-2 sm:mt-4 text-center">
          Raj Vilas PALACES
        </h1>
      </div>

      {/* Position RajLayout directly under the Hero section */}
      <RajLayout />
    </div>
  );
}

export default Hero;
