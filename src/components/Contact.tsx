'use client';

import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

const Contact = () => {
  return (
    <div id='contact' className="w-full bg-[url('/bg3.jpg')] bg-size-[400px]">
      <div className='bg-white/65'>
        <div className="container mx-auto py-20">
            <div className="grid grid-cols-2 gap-30">
              <div className='flex flex-col justify-between'>
                <div className='space-y-2.5'>
                  <h1 className="text-3xl sm:text-4xl font-semibold hover:underline">
                    MY CONTACT.
                  </h1>
                  <p className="text-md text-justify">
                    Here are several ways to get in touch with me—whether through social media or by sending a direct message using the form below. I'd love to hear from you. Let's work together!
                  </p>
                </div>

                <div className="flex gap-2.5 text-4xl text-gray-900">
                  <a href="https://github.com/chessstaaa" target="_blank" className="hover:text-gray-900 transition-colors"><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/chessstaa/" target="_blank" className="hover:text-gray-900 transition-colors"><FaLinkedin /></a>
                  <a href="https://instagram.com/chessstaa" target="_blank" className="hover:text-gray-900 transition-colors"><FaInstagram /></a>
                </div>
              </div>

              <div className="space-y-4">
                <Input type="email" placeholder="Email" className="w-full px-4 py-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200" />
                <Input type="name" placeholder="Name" className="w-full px-4 py-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200" />
                <Input type="message" placeholder="Message" className="w-full px-4 py-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200" />
                <Button 
                  type="submit"
                  className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-white hover:text-black hover:border transition-colors"
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