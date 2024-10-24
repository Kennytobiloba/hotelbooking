import React from "react";

import imagetwo from "../../assests/wine-850337_1280.jpg";
import imagethree from "../../assests/set-table-7868140_640.jpg";
import imagefour from "../../assests/table-2600954_1280.jpg";

const Amenities = () => {
  return (
    <div>
      {/* Title and Description */}
      <div className="grid lg:grid-cols-2 grid-cols-1 w-[90%] mx-auto lg:mt-16 mt-8 lg:gap-0 gap-6">
        <h1 className="lg:text-[46px] text-[30px] font-playwrite text-yellow lg:text-start text-center">
          Amenities
        </h1>
        <div>
          <p className="text-[16px] text-gray-800 lg:text-start text-center">
            Phasellus vitae volutpat donec at felis mauris tincidunt elit vel eu
            aenean commodo, tincidunt elementum et dictum scelerisque tempus
            amet eget viverra lectus tristique suspendisse tortor feugiat eu
            lacinia sed elementum in iaculis sapien cursus odio massa gravida ut
            molestie sed vel senectus donec nunc nunc nec laoreet.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid lg:grid-cols-2 grid-cols-1 w-[90%] mx-auto mt-16 lg:h-auto h-auto md:gap-6 gap-4">
        {/* Grid 1 */}
        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
          <img
            src={imagefour}
            alt="In-room dining"
            className="w-full object-cover"
          />
          <div className="md:px-8 md:py-2 lg:text-start text-center">
            <h1 className="lg:text-[32px] md:text-[28px] text-[26px] text-yellow font-playwrite font-bold">
              In-room dining
            </h1>
            <p className="text-[16px] leading-normal mt-4">
              Egestas platea hac pharetra lacus risus nibh et id amet elementum
              in mi suscipit egestas ipsum sollicitudin eget vitae quam diam
              senectus ac pharetra at congue diam nulla viverra sapien laoreet.
            </p>
            <h1 className="text-yellow uppercase font-playwrite mt-6 text-[14px] md:text-[14px] pb-2 md:pb-4 flex lg:justify-start justify-center">
              LEARN More
              <i className="fas fa-arrow-right text-[14px] md:text-[16px] pt-1 ml-2"></i>
            </h1>
          </div>
        </div>

        {/* Grid 2 */}
        <div className="grid md:grid-cols-2 lg:gap-6 gap-4">
          <img
            src={imagetwo}
            alt="Sutra Cafe"
            className="w-full object-cover"
          />
          <div className="md:px-8 md:py-2 lg:text-start text-center">
            <h1 className="lg:text-[32px] md:text-[28px] text-[26px] text-yellow font-playwrite font-bold">
              Sutra Cafe
            </h1>
            <p className="text-[16px] leading-normal mt-4">
              Egestas platea hac pharetra lacus risus nibh et id amet elementum
              in mi suscipit egestas ipsum sollicitudin eget vitae quam diam
              senectus ac pharetra at congue diam nulla viverra sapien laoreet.
            </p>
            <h1 className="text-yellow uppercase lg:justify-start justify-center font-playwrite mt-6 text-[14px] md:text-[14px] pb-2 md:pb-4 flex">
              LEARN More
              <i className="fas fa-arrow-right text-[14px] md:text-[16px] pt-1 ml-2"></i>
            </h1>
          </div>
        </div>

        {/* Grid 3 */}
        <div className="lg:grid md:grid-cols-2 flex flex-col-reverse lg:gap-6 gap-4">
          <div className="md:px-8 md:py-2 lg:text-start text-center">
            <h1 className="lg:text-[32px] md:text-[28px] text-[26px] text-yellow font-playwrite font-bold">
              Private Dining
            </h1>
            <p className="text-[16px] leading-normal mt-4">
              Egestas platea hac pharetra lacus risus nibh et id amet elementum
              in mi suscipit egestas ipsum sollicitudin eget vitae quam diam
              senectus ac pharetra at congue diam nulla viverra sapien laoreet.
            </p>
            <h1 className="text-yellow lg:justify-start justify-center uppercase font-playwrite mt-6 text-[14px] md:text-[14px] pb-2 md:pb-4 flex">
              LEARN More
              <i className="fas fa-arrow-right text-[14px] md:text-[16px] pt-1 ml-2"></i>
            </h1>
          </div>
          <img
            src={imagethree}
            alt="Private Dining"
            className="w-full object-cover"
          />
        </div>

        {/* Grid 4 */}
        <div className="lg:grid md:grid-cols-2  text-center lg:text-start flex flex-col-reverse lg:gap-6 gap-4">
          <div className="px-8 py-2">
            <h1 className="lg:text-[32px] md:text-[28px] text-[26px] text-yellow font-playwrite font-bold">
              Jalu Restaurant
            </h1>
            <p className="text-[16px] leading-normal mt-4">
              Egestas platea hac pharetra lacus risus nibh et id amet elementum
              in mi suscipit egestas ipsum sollicitudin eget vitae quam diam
              senectus ac pharetra at congue diam nulla viverra sapien laoreet.
            </p>
            <h1 className="text-yellow uppercase lg:justify-start justify-center font-playwrite mt-6 text-[14px] md:text-[14px] pb-2 md:pb-4 flex">
              LEARN More
              <i className="fas fa-arrow-right text-[14px] md:text-[16px] pt-1 ml-2"></i>
            </h1>
          </div>
          <img
            src={imagefour}
            alt="Jalu Restaurant"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Amenities;
