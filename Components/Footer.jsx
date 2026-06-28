import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src={assets.logo_light}
              alt="Blog Logo"
              width={160}
            />

            <p className="text-gray-400 mt-4 text-sm text-center md:text-left">
              Sharing technology, startups and lifestyle stories with the world.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">

            <a href="#" className="transition-transform duration-300 hover:scale-110">
              <Image
                src={assets.facebook_icon}
                alt="Facebook"
                width={42}
                height={42}
              />
            </a>

            <a href="#" className="transition-transform duration-300 hover:scale-110">
              <Image
                src={assets.twitter_icon}
                alt="Twitter"
                width={42}
                height={42}
              />
            </a>

            <a href="#" className="transition-transform duration-300 hover:scale-110">
              <Image
                src={assets.googleplus_icon}
                alt="Google Plus"
                width={42}
                height={42}
              />
            </a>

          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} BlogSphere. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer