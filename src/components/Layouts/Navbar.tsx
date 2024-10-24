import React, { useState } from "react";
import { useAnimate, stagger } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scope, animate] = useAnimate();

  const staggerLinks = stagger(0.1, { startDelay: 0.1 });

  const handleToggle = () => {
    setMenuOpen(!menuOpen);

    if (!menuOpen) {
      animate(scope.current, { opacity: [0, 1], height: ['0px', 'auto'] }, { duration: 0.4 });
      animate(".nav-links", { y: [20, 0], opacity: [0, 1] }, { delay: staggerLinks });
    } else {
      animate(scope.current, { opacity: [1, 0], height: ['auto', '0px'] }, { duration: 0.4 });
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="absolute top-0 left-0 w-full z-20 mb-10">
      <div className="w-[90%] mx-auto py-4 flex flex-col gap-12">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-4">
            <i className="fa-brands fa-twitter text-white text-base lg:text-lg"></i>
            <i className="fa-brands fa-facebook text-white text-base lg:text-lg"></i>
            <i className="fa-brands fa-instagram text-white text-base lg:text-lg"></i>
          </div>
          <div>
            {/* Adjusting the text size and leading (line-height) responsively */}
            <h1 className="text-white font-playwrite text-xl leading-6 lg:text-3xl lg:leading-9 font-bold">
              Raj Vilas <br /> PALACES
            </h1>
          </div>

          {/* Hamburger Icon for Small Screens */}
          <div className="block lg:hidden" onClick={handleToggle}>
            <i className={`text-white text-3xl cursor-pointer ${menuOpen ? "fa fa-times" : "fa fa-bars"}`}></i>
          </div>

          {/* Book Now button (always visible on larger screens) */}
          <div className="hidden lg:block text-white border-2 hover:bg-white hover:text-yellow border-white px-4 py-2 font-bold cursor-pointer">
            Book Now
          </div>
        </div>

        {/* Navigation Links - responsive styling */}
        <div
          ref={scope}
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex gap-4 p-8 border rounded-lg lg:rounded-none lg:border-none lg:justify-center lg:text-white justify-center] w-full bg-white 
            lg:bg-transparent text-black uppercase font-roboto
             font-bold transition-all duration-500 ease-in-out`}
        >
          {/* Each nav link has responsive font sizes and font weights */}
          <h5
            className="nav-links hover:text-yellow cursor-pointer py-2 text-base font-medium lg:text-lg lg:font-bold"
            onClick={closeMenu}
          >
            Home
          </h5>
          <h5
            className="nav-links hover:text-yellow cursor-pointer py-2 text-base font-medium lg:text-lg lg:font-bold"
            onClick={closeMenu}
          >
            History
          </h5>
          <h5
            className="nav-links hover:text-yellow cursor-pointer py-2 text-base font-medium lg:text-lg lg:font-bold"
            onClick={closeMenu}
          >
            Experience
          </h5>
          <h5
            className="nav-links hover:text-yellow cursor-pointer py-2 text-base font-medium lg:text-lg lg:font-bold"
            onClick={closeMenu}
          >
            Room & Suites
          </h5>
          <h5
            className="nav-links hover:text-yellow cursor-pointer py-2 text-base font-medium lg:text-lg lg:font-bold"
            onClick={closeMenu}
          >
            Dining
          </h5>
          <h5
            className="nav-links hover:text-yellow cursor-pointer py-2 text-base font-medium lg:text-lg lg:font-bold"
            onClick={closeMenu}
          >
            Gallery
          </h5>
          <h5
            className="nav-links hover:text-yellow cursor-pointer py-2 text-base font-medium lg:text-lg lg:font-bold"
            onClick={closeMenu}
          >
            Contact
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
