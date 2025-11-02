'use client';

import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

const Contact = () => {
  return (
    <div id='contact' className="w-full bg-[url('/bg3.jpg')] bg-cover md:bg-size-[400px]">
      <div className='bg-white/65 backdrop-blur-sm'>
        <div className="container mx-auto py-12 md:py-20 px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              <div className='flex flex-col justify-between space-y-8 md:space-y-0'>
                <div className='space-y-4'>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold hover:underline">
                    MY CONTACT.
                  </h1>
                  <p className="text-sm md:text-md lg:text-lg text-justify">
                    Here are several ways to get in touch with me—whether through social media or by sending a direct message using the form below. I'd love to hear from you. Let's work together!
                  </p>
                </div>

                <div className="flex gap-4 text-3xl md:text-4xl text-gray-900 justify-center md:justify-start">
                  <a href="https://github.com/chessstaaa" target="_blank" className="hover:text-gray-600"><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/chessstaa/" target="_blank" className="hover:text-gray-600"><FaLinkedin /></a>
                  <a href="https://instagram.com/chessstaa" target="_blank" className="hover:text-gray-600"><FaInstagram /></a>
                </div>
              </div>

              <div className="space-y-4">
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 md:py-4 border bg-white/80 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder:text-gray-500" 
                />
                <Input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full px-4 py-3 md:py-4 border bg-white/80 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder:text-gray-500" 
                />
                <textarea 
                  placeholder="Message" 
                  rows={4}
                  className="w-full px-4 py-3 md:py-4 border bg-white/80 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder:text-gray-500 resize-none" 
                />
                <Button 
                  type="submit"
                  className="w-full md:w-auto bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-white hover:text-black hover:border transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Submit
                </Button>
              </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact