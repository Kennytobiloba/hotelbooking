import React from "react";
import image from  "../../assests/heritage-hotel-dining-experience-img.jpg"

const Dinning = () => {
  return (
    <div className="w-[90%] mx-auto mt-10">
      <h4 className="text-black font-roboto text-center text-[18px] md:text-[20px]">
        Dining Experience
      </h4>
      <h1 className="text-yellow text-[28px] md:text-[42px] text-center leading-[36px] md:leading-[52px] font-playwrite w-[90%] md:w-[70%] mx-auto mt-4 md:mt-6">
        Delicious cuisines and a unique setting to inspire a special occasion.
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 md:mt-20 gap-6">
        <div>
          <h1 className="text-[26px] md:text-[38px] leading-[34px] lg:text-start text-center md:leading-[52px]
           font-playwrite font-bold text-black">
            Specially crafted meal, served by a personal butler.
          </h1>
        </div>
        <div>
          <p className="text-[14px] md:text-[16px] lg:text-start text-center leading-[24px] md:leading-[26px] mb-4 font-roboto text-gray-800">
            Served by a personal butler. Phasellus vitae volutpat donec at felis mauris tincidunt elit vel eu aenean commodo, tincidunt elementum et dictum scelerisque tempus amet eget viverra lectus tristique suspendisse tortor feugiat eu lacinia sed elementum in iaculis sapien cursus odio massa gravida ut molestie sed vel senectus donec nunc nunc nec laoreet.
          </p>
          <button className="text-yellow block lg:mx-0 mx-auto mt-4 font-roboto capitalize border
           border-yellow px-4 sm:px-6 py-2 text-[14px] md:text-[16px]">
            Discover more
          </button>
        </div>
      </div>

       <div className="w-full mt-10 h-auto">
        <img src={image} alt="" className="w-full h-full  " />
       </div>
    </div>
  );
};

export default Dinning;
