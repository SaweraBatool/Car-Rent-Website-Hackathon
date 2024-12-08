import React from "react";
import { CiSearch } from "react-icons/ci";
import { RiPokerHeartsFill } from "react-icons/ri";
import { IoNotifications, IoSettingsSharp } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <div
        className="w-full h-[124px] bg-[#FFFFFF] flex items-center justify-between px-4"
        style={{ borderBottom: "2px solid #E0E0E0" }}
      >
        {/* MORENT Text */}
        <div className="text-[#3563E9] font-bold text-[36px]">MORENT</div>

        {/* Search Box */}
        <div className="flex items-center bg-white border border-[#F0F0F0] rounded-full px-3 h-[44px] w-[600px]">
          <div className="text-[#596780] text-2xl">
            <CiSearch />
          </div>
          <input
            type="text"
            placeholder="Search something here"
            className="ml-2 w-full bg-transparent border-none outline-none text-sm text-[#788498]"
          />
          <div className="text-[#596780] text-[20px] ml-3 cursor-pointer">
            <VscSettings />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-3">
          <div className="bg-white w-[44px] h-[44px] flex items-center justify-center rounded-full border-2 border-[#F3F7FA] text-[#596780] text-[18px] cursor-pointer">
            <RiPokerHeartsFill />
          </div>
          <div className="bg-white w-[44px] h-[44px] flex items-center justify-center rounded-full border-2 border-[#F3F7FA] text-[#596780] text-[18px] cursor-pointer">
            <IoNotifications />
          </div>
          <div className="bg-white w-[44px] h-[44px] flex items-center justify-center rounded-full border-2 border-[#F3F7FA] text-[#596780] text-[18px] cursor-pointer">
            <IoSettingsSharp />
          </div>
          <div className="bg-white w-[44px] h-[44px] flex items-center justify-center rounded-full border-2 border-[#F3F7FA] cursor-pointer">
            <img
              src="/Unsplash.png"
              alt="Unsplash"
              className="w-[36px] h-[36px] object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full bg-[#F6F7F9] flex justify-center py-12">
        <div className="flex justify-center items-start flex-wrap gap-8 w-full max-w-[1440px] px-4">
          {/* First Column */}
          <div className="flex flex-col items-center w-[640px] max-w-[45%] space-y-6">
            {/* Car Image */}
            <img
              src="/Ads 1.png"
              alt="Ad 1"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            {/* Pick Up Image */}
            <img
              src="/pick up.png"
              alt="Pick Up"
              className="w-full h-auto w-582px h-132px object-cover rounded-lg"
            />
          </div>

          {/* Second Column */}
          <div className="flex flex-col items-center w-[640px] max-w-[45%] space-y-6 h-[115px]">
            {/* Car Image */}
            <img
              src="/Ads 2.png"
              alt="Ad 2"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            {/* Drop Off Image */}
            <img
              src="/drop off.png"
              alt="Drop Off"
              className="w-full h-auto w-582px h-132px object-cover rounded-lg"
            />
          </div>
           {/* Heading Section */}
        <div className="flex justify-between items-center w-full max-w-[1440px] px-4 mt-8">
          
          <a
            href="#"
            className="text-[#596780] text-sm font-semibold cursor-pointer"
          >
          Popular Cars
          </a>
          
          <h2 className="text-[#597FEC] h-[44px] w-[132px] text-lg font-bold">View all</h2>
        </div>

        <img
              src="/cars.png"
              alt="cars collection"
              className="bg-[#F6F7F9]"
            />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
