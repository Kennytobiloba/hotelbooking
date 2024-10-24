import React from 'react';

const RajLayout = () => {
  return (
    <div className='absolute inset-x-0 md:-bottom-12 -bottom-16 mx-auto bg-white w-[90%] flex items-center py-6 px-4 shadow-sm gap-4 lg:gap-6 justify-between lg:flex-row flex-col'>
      <h1 className="text-yellow font-playwrite text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-semibold mt-2 sm:mt-4 text-center">
        Raj Vilas <br /> PALACES
      </h1>

      <p className='lg:w-[50%] w-full text-[14px] sm:text-[16px] lg:text-start text-center'>
        Egestas odio netus sed augue bibendum morbi suspendisse adipiscing amet id varius faucibus vitae vitae ipsum.
      </p>

      <button className='text-yellow border border-yellow px-4 sm:px-6 py-2 text-[14px] sm:text-[16px]'>
        CHECK AVAILABILITY
      </button>
    </div>
  );
}

export default RajLayout;
