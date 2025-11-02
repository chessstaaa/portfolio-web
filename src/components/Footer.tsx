import React from 'react'
import { FaRegCopyright } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-gray-900'>
        <div className='container mx-auto py-2 '>
            <p className='flex justify-center items-center gap-1 text-white text-sm'>
                <FaRegCopyright /> 2025 chesta. all rights reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer