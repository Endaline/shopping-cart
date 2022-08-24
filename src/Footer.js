import React from 'react'
import { GrTwitter, GrLinkedin } from 'react-icons/gr'
import { FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa'
import { GiRoyalLove } from 'react-icons/gi'

function Footer() {
  return (
    <div className=" bg-[#1b8188] text-white relative bottom-0 w-full">
      <div className="flex justify-between">
        <address className="p-4">
          <h2>Our Address</h2>
          <p className="py-4">Mercy Land No 121 Nvigwe street</p>
          <p>Port harcourt</p>
        </address>

        <address className="p-4">
          <h2>Contact us</h2>
          <p className="py-4">endy@gmail.com</p>
          <p>+234086543624</p>
        </address>

        <address className="p-4">
          <h2>Working Days</h2>
          <p className="py-4">Mon-Thurs 8am-4pm</p>
          <p>Fri-Sat 9am-5pm</p>
        </address>
      </div>
          <div className="flex justify-around m-0   ">
              <div className='cursor-pointer flex'>
            <p className=" hover:bg-[#3f989e] hover:shadow-md  text-white px-3  transition duration-700 ease-in-out ">
          <GrTwitter />
        </p>
        <p className=" hover:bg-[#3f989e]  hover:shadow-md text-white px-3 transition duration-700 ease-in-out ">
          <GrLinkedin />
        </p>
        <p className=" hover:bg-[#3f989e] hover:shadow-md text-white px-3 transition duration-700 ease-in-out ">
          <FaInstagramSquare />
        </p>
        <p className=" hover:bg-[#3f989e]  hover:shadow-md text-white px-3 transition duration-700 ease-in-out ">
          <FaFacebookSquare />
        </p>
              </div>
       

        <div className="flex">
          <h2>
            Designed with
          </h2>
          <div className='flex'>
            <span className='px-1'><GiRoyalLove /></span>
             <h2>
            Endaline
          </h2>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Footer
