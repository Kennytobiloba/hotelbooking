import React from 'react';
import imgone from "../../assests/heritage-neraby-places-img-1.jpg";
import imgtwo from "../../assests/heritage-neraby-places-img-2.jpg";
import imgthree from "../../assests/heritage-neraby-places-img-3.jpg";
import imgfour from "../../assests/heritage-neraby-places-img-4.jpg";
const Heritage = () => {
  return (
    <div className='w-[90%] mx-auto text-center mt-10'>
      {/* Title Section */}
      <h4 className='text-[18px] md:text-[22px] font-titillium font-bold'>
        Local Attraction
      </h4>
      <h1 className='text-[28px] md:text-[42px] lg:text-[48px] text-yellow font-bold font-playwrite mt-4 mb-4'>
        Place of Interest
      </h1>

      {/* Description Section */}
      <p className='text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] w-[100%] md:w-[80%] lg:w-[60%] mx-auto'>
        Phasellus vitae volutpat donec at felis mauris tincidunt elit vel eu aenean commodo, tincidunt elementum et dictum scelerisque tempus amet eget viverra lectus tristique suspendisse tortor feugiat eu lacinia sed elementum in iaculis sapien cursus odio massa gravida ut molestie sed vel senectus donec nunc nunc nec laoreet.
      </p>

      {/* Grid Section for Images */}
      <div className='grid grid-cols-1  lg:grid-cols-4 gap-6 mt-8'>
        <div>
          <img src={imgone} alt="Heritage Place 1" className='w-full h-auto object-cover rounded-md' />
          <h3 className='text-[20px] sm:text-[24px] lg:text-[26px] font-titillium text-yellow font-bold mt-2'>
            Taj Mahal
          </h3>
        </div>
        <div>
          <img src={imgtwo} alt="Heritage Place 2" className='w-full h-auto object-cover rounded-md' />
          <h3 className='text-[20px] sm:text-[24px] lg:text-[26px] font-titillium text-yellow font-bold mt-2'>
            The City Palace
          </h3>
        </div>
        <div>
          <img src={imgthree} alt="Heritage Place 3" className='w-full h-auto object-cover rounded-md' />
          <h3 className='text-[20px] sm:text-[24px] lg:text-[26px] font-titillium text-yellow font-bold mt-2'>
            Albert Hall Museum
          </h3>
        </div>
        <div>
          <img src={imgfour} alt="Heritage Place 4" className='w-full h-auto object-cover rounded-md' />
          <h3 className='text-[20px] sm:text-[24px] lg:text-[26px] font-titillium text-yellow font-bold mt-2'>
            Amer Fort
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Heritage;
