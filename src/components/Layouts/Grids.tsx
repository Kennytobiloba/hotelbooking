import React from "react";
import gridone from "../../assests/architecture-4007755_1280.jpg";
import gridtwo from "../../assests/pool-2128578_1280.jpg";
import gridthree from "../../assests/landscape-2016308_1280.jpg";
import gridfour from "../../assests/ai-generated-8774912_1280.webp";

const Grids = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 w-[90%] mx-auto mt-10 lg:gap-0 gap-6 ">
      {" "}
      {/* Use gap-* for spacing */}
      {/* grid one */}
      <div className=" lg:grid lg:grid-cols-2 flex flex-col ">
        <div className="flex justify-center">
          <img src={gridfour} alt="" className="w-full h-auto" />{" "}
          {/* Responsive image */}
        </div>
        <div className="flex flex-col justify-center lg:mx-6 ">
          <h5 className="text-lg text-yellow mb-2 font-titillium lg:text-start text-center">
            01
          </h5>
          <h2 className="text-[24px] sm:text-[32px] text-yellow font-playwrite mb-2 lg:text-start text-center">
            Immersive View
          </h2>
          <p className="text-black font-titillium font-bold mb-4 lg:text-start text-center">
            Egestas risus tempor cras posuere viverra pellentesque sodales.
          </p>
          <p className="text-[14px] sm:text-[16px] text-gray-800 lg:text-start text-center">
            Ultricies non suspendisse eget et vitae elit tincidunt elit sed
            velit sit vitae quam pellentesque id dolor amet integer congue non
            non integer morbi integer felis morbi imperdiet cras ut sed
            porttitor id donec duis at est, justo pulvinar aliquam done.
          </p>
          <h3 className="text-[18px] sm:text-[20px] flex items-center lg:justify-start justify-center text-yellow font-titillium mt-4 capitalize">
            View rooms{" "}
            <i className="fas text-[16px] pt-1 fa-arrow-right ml-2"></i>
          </h3>
        </div>
      </div>
      {/* grid two*/}
      <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse">
        <div className="flex flex-col justify-center lg:mx-4">
          <h5 className="text-lg text-yellow mb-2 font-titillium lg:text-start text-center">
            02
          </h5>
          <h2 className="text-[24px] sm:text-[32px] text-yellow font-playwrite mb-2 lg:text-start text-center">
            Exquisite Suite
          </h2>
          <p className="text-black font-titillium font-bold mb-4 lg:text-start text-center">
            Egestas risus tempor cras posuere viverra pellentesque sodales.
          </p>
          <p className="text-[14px] sm:text-[16px] text-gray-800 lg:text-start text-center">
            Ultricies non suspendisse eget et vitae elit tincidunt elit sed
            velit sit vitae quam pellentesque id dolor amet integer congue non
            non integer morbi integer felis morbi imperdiet cras ut sed
            porttitor id donec duis at est, justo pulvinar aliquam done.
          </p>
          <h3 className="text-[18px] sm:text-[20px] flex items-center lg:justify-start justify-center text-yellow font-titillium mt-4 capitalize">
            View rooms{" "}
            <i className="fas text-[16px] pt-1 fa-arrow-right ml-2"></i>
          </h3>
        </div>
        <div className="flex justify-center">
          <img src={gridtwo} alt="" className="w-full h-auto" />{" "}
          {/* Responsive image */}
        </div>
      </div>
      {/* grid three*/}
      <div className="lg:grid lg:grid-cols-2 flex flex-col">
        <div className="flex justify-center">
          <img src={gridthree} alt="" className="w-full h-auto" />{" "}
          {/* Responsive image */}
        </div>
        <div className="flex flex-col justify-center lg:mx-4">
          <h5 className="text-lg text-yellow mb-2 font-titillium lg:text-start text-center">
            03
          </h5>
          <h2 className="text-[24px] sm:text-[32px] text-yellow font-playwrite mb-2 lg:text-start text-center">
            Dine Under the Stars
          </h2>
          <p className="text-black font-titillium font-bold mb-4 lg:text-start text-center">
            Egestas risus tempor cras posuere viverra pellentesque sodales.
          </p>
          <p className="text-[14px] sm:text-[16px] text-gray-800 lg:text-start text-center">
            Ultricies non suspendisse eget et vitae elit tincidunt elit sed
            velit sit vitae quam pellentesque id dolor amet integer congue non
            non integer morbi integer felis morbi imperdiet cras ut sed
            porttitor id donec duis at est, justo pulvinar aliquam done.
          </p>
          <h3 className="text-[18px] sm:text-[20px] flex items-center lg:justify-start justify-center text-yellow font-titillium mt-4 capitalize">
            View rooms{" "}
            <i className="fas text-[16px] pt-1 fa-arrow-right ml-2"></i>
          </h3>
        </div>
      </div>
      {/* grid four */}
      <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse">
        <div className="flex flex-col justify-center lg:mx-4">
          <h5 className="text-lg text-yellow mb-2 font-titillium lg:text-start text-center">
            04
          </h5>
          <h2 className="text-[24px] sm:text-[32px] text-yellow font-playwrite mb-2 lg:text-start text-center">
            Traditional Touch
          </h2>
          <p className="text-black font-titillium font-bold mb-4 lg:text-start text-center">
            Egestas risus tempor cras posuere viverra pellentesque sodales.
          </p>
          <p className="text-[14px] sm:text-[16px] text-gray-800 lg:text-start text-center">
            Ultricies non suspendisse eget et vitae elit tincidunt elit sed
            velit sit vitae quam pellentesque id dolor amet integer congue non
            non integer morbi integer felis morbi imperdiet cras ut sed
            porttitor id donec duis at est, justo pulvinar aliquam done.
          </p>
          <h3 className="text-[18px] sm:text-[20px] flex items-center lg:justify-start justify-center text-yellow font-titillium mt-4 capitalize">
            View rooms{" "}
            <i className="fas text-[16px] pt-1 fa-arrow-right ml-2"></i>
          </h3>
        </div>
        <div className="flex justify-center">
          <img src={gridone} alt="" className="w-full h-auto" />{" "}
          {/* Responsive image */}
        </div>
      </div>
    </div>
  );
};

export default Grids;
