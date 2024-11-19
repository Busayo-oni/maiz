import React, { useState } from "react";
import logo from '../assets/logo11.png'
import Pat from '../assets/Group.svg'
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
    return (
          <header className="bg-transparent text-white flex justify-between items-center px-8 py-4">
            <div className="flex items-center space-x-4">
             
              <img src={logo} alt="Logo" className="w-[80px] z-[60] " />
            </div>
           


            <nav className={`flex flex-col gap-10 md:flex-row lg:items-center md:items-center  fixed lg:relative md:relative top-0 bg-[#CC9D2F] pt-40 md:pt-0 lg:pt-0 pl-5 lg:pl-0 md:pl-0 z-50 h-full md:top-0 left-0 w-[50%] md:w-auto  md:bg-transparent transition-transform ${
            isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}>
              <Link to="/HeroSection" className="font-CotorisBold text-[21px] hover:underline">
                About
              </Link>
              <Link to="/MenuContainer" className="font-CotorisBold text-[21px] hover:underline">
                Menu
              </Link>
              <Link to="/OurStory"  className="font-CotorisBold text-[21px] hover:underline">
                Venue
              </Link>
              <a href="#events" className="font-CotorisBold text-[21px] hover:underline">
                Events
              </a>
            </nav>
            <div className="flex ">
            <button className="bg-[#C8A42D] text-white px-4 py-2 rounded-lg hover:bg-[#D2AF4A] flex items-center ">
              Book Now
            </button>
            <img className="h-10 " src={Pat} alt="" />
            </div>
            <div
          className="text-[#C8A42D] md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </div>
          </header>
   );
 };
      
export default Header;
      