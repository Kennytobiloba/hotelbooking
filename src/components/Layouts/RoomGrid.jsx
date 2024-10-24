import React from 'react';
import roomone from "../../assests/ai-generated-8774912_1280.webp";
import roomtwo from "../../assests/design-3588214_1280 (1).jpg";
import roomthree from "../../assests/pool-2128578_1280.jpg";
import roomfour from "../../assests/lobby-398845_1280.jpg";

const RoomGrid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 w-[95%] md:w-[90%] mx-auto gap-4'>
      {/* First Column with Text Overlay */}
      <div className='grid grid-cols-1 h-full relative'>
        {/* First Image with Text */}
        <div className='relative h-[50vh] '>
          <img src={roomone} alt="Deluxe Room" className='h-full w-full object-cover' />
          <div className='absolute inset-0 flex flex-col items-center justify-end'>
            <h1 className='text-white font-roboto text-[20px] md:text-[26px] font-bold '>Deluxe Room</h1>
            <h1 className='text-yellow font-roboto text-[14px] md:text-[16px] pb-2 md:pb-4 flex justify-center'>
              View Rooms
              <i className="fas fa-arrow-right text-[14px] md:text-[16px] pt-1 ml-2"></i>
            </h1>
          </div>
        </div>
        {/* Second Image with Text */}
        <div className='relative h-[50vh]  mt-2 '>
          <img src={roomtwo} alt="Superior Room" className='h-full w-full object-cover' />
          <div className='absolute inset-0 flex flex-col items-center justify-end'>
            <h1 className='text-white font-roboto text-[20px] md:text-[26px] font-bold '>Superior Room</h1>
            <h1 className='text-yellow font-roboto text-[14px] md:text-[16px] pb-2 md:pb-4 flex justify-center'>
              View Rooms
              <i className="fas fa-arrow-right text-[14px] md:text-[16px] pt-1 ml-2"></i>
            </h1>
          </div>
        </div>
      </div>
      
      {/* Second Column */}
      <div className='relative h-[50vh] md:h-full'>
        <img src={roomthree} alt="Suite Room" className='h-full w-full object-cover' />
        <div className='absolute inset-0 flex flex-col items-center justify-end'>
          <h1 className='text-white font-roboto text-[20px] md:text-[26px] font-bold '>Suite Room</h1>
          <h1 className='text-yellow font-roboto text-[14px] md:text-[16px] pb-2 md:pb-4 flex justify-center'>
            View Rooms
            <i className="fas fa-arrow-right text-[14px] md:text-[16px] pt-1 ml-2"></i>
          </h1>
        </div>
      </div>
      
      {/* Third Column */}
      <div className='relative h-[50vh] md:h-full'>
        <img src={roomfour} alt="Lobby View" className='h-full w-full object-cover' />
        <div className='absolute inset-0 flex flex-col items-center justify-end'>
          <h1 className='text-white font-roboto text-[20px] md:text-[26px] font-bold '>Lobby View</h1>
          <h1 className='text-yellow font-roboto text-[14px] md:text-[16px] pb-2 md:pb-4 flex justify-center'>
            View Rooms
            <i className="fas fa-arrow-right text-[14px] md:text-[16px] pt-1 ml-2"></i>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default RoomGrid;
