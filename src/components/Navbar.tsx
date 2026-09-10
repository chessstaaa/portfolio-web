import React from 'react'
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 z-50 w-full bg-[#32353b] border-b-3 border-[#d4cd88]">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-8">

        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#home" className="text-[#f7f7f9]">CHESTA</a>
        </div>

        {/* Navigation Links */}
        <div className="hidden sm:flex space-x-4 ">
          <a href="#home" className="text-[#f7f7f9] hover:underline hover:decoration-2 hover:underline-offset-6">Home</a>
          <a href="#about" className="text-[#f7f7f9] hover:underline hover:decoration-2 hover:underline-offset-6">About</a>
          <a href="#services" className="text-[#f7f7f9] hover:underline hover:decoration-2 hover:underline-offset-6">Services</a>
          <a href="#projects" className="text-[#f7f7f9] hover:underline hover:decoration-2 hover:underline-offset-6">Projects</a>
        </div>

        {/* Contact Button */}
        <div className="hidden sm:block">
          <a
            href="#contact"
            className="bg-[#f7f7f9] text-[#32353b] hover:bg-[#191d20] hover:text-[#f7f7f9] font-semibold py-2 px-4 rounded-full transition duration-200"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden text-3xl text-[#f7f7f9] cursor-pointer">
          <HiOutlineMenu />
        </div>
      </div>
    </div>
  )
}

export default Navbar