import React, { useRef } from 'react';
import Swipe from 'react-swipe';
import imgone from "../../assests/heritage-hotel-gallery-04.jpg";
import imgtwo from "../../assests/heritage-hotel-gallery-2.jpg";
import imgthree from "../../assests/heritage-hotel-gallery-3.jpg";

type slide = {
  continuous: boolean,
  auto: number, // Auto-slide every x milliseconds
};

const Slider = () => {
  const swipeEl = useRef<Swipe | null>(null); // Create a ref for the Swipe instance
  const swipeOptions: slide = {
    continuous: true,
    auto: 3000, // Auto-slide every 3 seconds
  };

  return (
    <div className="slider-container relative w-[90%] mx-auto h-auto mt-10">
      <Swipe
        className="carousel"
        swipeOptions={swipeOptions}
        ref={(el) => (swipeEl.current = el)} // Set the ref
      >
        <div>
          <img src={imgone} alt="Image 1" className="slider-image" />
        </div>
        <div>
          <img src={imgtwo} alt="Image 2" className="slider-image" />
        </div>
        <div>
          <img src={imgthree} alt="Image 3" className="slider-image" />
        </div>
      </Swipe>

      {/* Left arrow */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-2"
        onClick={() => swipeEl.current?.prev()}
      >
       <span className="chevron-left"></span>
      </button>

      {/* Right arrow */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-2"
        onClick={() => swipeEl.current?.next()}
      >
        <span className="chevron-right"></span>
      </button>
    </div>
  );
};

export default Slider;
