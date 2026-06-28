import { assets } from '@/Assets/assets'
import axios from 'axios';
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Header = () => {

  const [email,setEmail] = useState("");

  const onSubmitHandler = async (e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("email",email);
    const response = await axios.post('/api/email',formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setEmail("");
    }
    else{
      toast.error("Error")
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8">

    {/* Top Bar */}
    <div className="flex items-center justify-between">
      <Image
        src={assets.logo}
        width={180}
        alt="Logo"
        className="w-32 sm:w-44"
      />

      <button className="flex items-center gap-2 rounded-xl border border-black bg-black px-5 py-3 text-white font-medium transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg">
        Get Started
        <Image src={assets.arrow} alt="Arrow" width={18} height={18} />
      </button>
    </div>

    {/* Hero Section */}
    <div className="text-center mt-20">

      <span className="inline-block rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600">
        ✨ Welcome to our Blog
      </span>

      <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
        Discover Amazing
        <span className="text-blue-600"> Stories & Ideas</span>
      </h1>

      <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg leading-8">
        Explore the latest articles on technology, startups, lifestyle and
        innovation. Stay updated with fresh content every week.
      </p>

      {/* Subscribe */}
      <form
        onSubmit={onSubmitHandler}
        className="mt-12 mx-auto flex max-w-xl overflow-hidden rounded-2xl border bg-white shadow-lg"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-6 py-4 outline-none"
          required
        />

        <button
          type="submit"
          className="bg-black px-8 text-white transition hover:bg-gray-800"
        >
          Subscribe
        </button>
      </form>

    </div>

  </div>
  )
}

export default Header
