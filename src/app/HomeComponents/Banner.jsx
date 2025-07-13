import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
    <div className="relative w-11/12 h-[80vh]  mx-auto overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/asset/banner.jpg" 
          alt="College Campus Banner"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </div>
      
      {/* Overlay with gradient instead of solid color for better visual effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      
      {/* Content container with responsive padding and max-width */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center text-white px-4">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Find Your Perfect College
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl opacity-90 text-gray-300">
            Explore top colleges, discover campus life, and make informed decisions with student reviews.
          </p>
          <button 
            className="btn btn-primary mt-6 px-8 py-3 text-lg rounded-full bg-blue-500 border-none"
            aria-label="Get started with college search"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}