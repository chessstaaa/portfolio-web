'use client';
import { useState } from 'react';
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { FaCopyright } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


function Navbar(){

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return(
    <div className="px-2 fixed top-0 left-0 w-full z-50">
      <div className="border container mx-auto flex justify-between items-center py-4 px-4 sm:px-8 rounded-4xl bg-white/95 shadow-md mt-2">
        <div className="text-2xl font-bold">
          <a href="/" className="flex gap-0.5 items-center"><FaCopyright />HESTA</a>
        </div>

        <div className="hidden md:flex gap-4">
          <a href="#home" className="font-semibold hover:underline hover:decoration-3 hover:underline-offset-4 hover:text-[#656162] transition-colors">HOME</a>
          <a href="#about" className="font-semibold hover:underline hover:decoration-3 hover:underline-offset-4 hover:text-[#656162] transition-colors">ABOUT</a>
          <a href="#skills" className="font-semibold hover:underline hover:decoration-3 hover:underline-offset-4 hover:text-[#656162] transition-colors">SKILLS</a>
          <a href="#portfolio" className="font-semibold hover:underline hover:decoration-3 hover:underline-offset-4 hover:text-[#656162] transition-colors">PORTFOLIO</a>
          <a href="#contact" className="font-semibold hover:underline hover:decoration-3 hover:underline-offset-4 hover:text-[#656162] transition-colors">CONTACT</a>
        </div>

        <button 
          onClick={toggleMenu}
          className="block md:hidden text-2xl z-50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 md:hidden"
            onClick={closeMenu}
          />
          <div className="fixed top-20 left-4 right-4 bg-white rounded-3xl shadow-lg py-6 px-4 md:hidden z-40">
            <div className="flex flex-col gap-2">
              <a 
                href="#home" 
                className="font-semibold hover:bg-gray-100 py-2 px-4 transition-colors flex justify-between items-center"
                onClick={closeMenu}
              >
                HOME
                <FaChevronRight />
              </a>
              <a 
                href="#about" 
                className="font-semibold hover:bg-gray-100 py-2 px-4 transition-colors flex justify-between items-center"
                onClick={closeMenu}
              >
                ABOUT
                <FaChevronRight />
              </a>
              <a 
                href="#skills" 
                className="font-semibold hover:bg-gray-100 py-2 px-4 transition-colors flex justify-between items-center"
                onClick={closeMenu}
              >
                SKILLS
                <FaChevronRight />
              </a>
              <a 
                href="#portfolio" 
                className="font-semibold hover:bg-gray-100 py-2 px-4 transition-colors flex justify-between items-center"
                onClick={closeMenu}
              >
                PORTFOLIO
                <FaChevronRight />
              </a>
              <a 
                href="#contact" 
                className="font-semibold hover:bg-gray-100 py-2 px-4 transition-colors flex justify-between items-center"
                onClick={closeMenu}
              >
                CONTACT
                <FaChevronRight />
              </a>
            </div>
          </div>
        </>
      )}
    </div>

  );
}

export default Navbar;