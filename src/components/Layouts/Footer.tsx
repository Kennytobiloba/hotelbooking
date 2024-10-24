import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black py-20 mt-20">
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row justify-between gap-8">
        {/* Social Media Icons */}
        <div className="flex gap-4 justify-center lg:justify-start">
          <i className="fa-brands fa-twitter  text-base lg:text-lg"></i>
          <i className="fa-brands fa-facebook  text-base lg:text-lg"></i>
          <i className="fa-brands fa-instagram  text-base lg:text-lg"></i>
        </div>

        {/* Footer Title */}
        <div className="text-center lg:text-left">
          <h1 className="font-playwrite text-xl lg:text-3xl font-bold leading-6 lg:leading-9">
            Raj Vilas <br /> PALACES
          </h1>
        </div>

        {/* Footer Navigation Links */}
        <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start text-center lg:text-left">
          <h5 className="cursor-pointer text-base font-medium lg:text-lg hover:text-yellow">
            Home
          </h5>
          <h5 className="cursor-pointer text-base font-medium lg:text-lg hover:text-yellow">
            History
          </h5>
          <h5 className="cursor-pointer text-base font-medium lg:text-lg hover:text-yellow">
            Experience
          </h5>
          <h5 className="cursor-pointer text-base font-medium lg:text-lg hover:text-yellow">
            Room & Suites
          </h5>
          <h5 className="cursor-pointer text-base font-medium lg:text-lg hover:text-yellow">
            Dining
          </h5>
          <h5 className="cursor-pointer text-base font-medium lg:text-lg hover:text-yellow">
            Gallery
          </h5>
          <h5 className="cursor-pointer text-base font-medium lg:text-lg hover:text-yellow">
            Contact
          </h5>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="w-[90%] mx-auto mt-8 text-center">
        <p className="text-[12px] lg:text-[14px]">
          &copy; {new Date().getFullYear()} Raj Vilas Palaces. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
