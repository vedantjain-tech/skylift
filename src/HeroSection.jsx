import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* Inject Inter Google Font and Apply to Entire Body */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
      `}} />

      {/* Hero Section Container */}
      <div className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Content Wrapper */}
        <div className="relative h-full flex flex-col z-10">
          {/* Navigation Bar */}
          <nav className="w-full max-w-7xl mx-auto px-8 py-6 relative">
            <div className="flex items-center justify-between">
              {/* Brand */}
              <span className="text-2xl font-semibold text-gray-900">
                SkyElite
              </span>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                {['Start', 'Story', 'Rates', 'Benefits', 'FAQ'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-900 font-medium hover:text-gray-700 transition-colors duration-200"
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-900 hover:text-gray-700 transition-colors p-2 focus:outline-none"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
              <div className="absolute top-20 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-6 md:hidden z-30 transition-all duration-300 border border-white/20">
                <div className="flex flex-col space-y-4">
                  {['Start', 'Story', 'Rates', 'Benefits', 'FAQ'].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-900 font-medium hover:text-gray-700 transition-colors duration-200 block text-lg"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </nav>

          {/* Main Content Area */}
          <div className="flex-1 flex items-center justify-center px-4">
            {/* Hero Content with pull-up negative margin */}
            <div className="text-center -mt-80 flex flex-col items-center">
              {/* Small Uppercase Label */}
              <span className="text-sm font-semibold text-gray-600 tracking-wider mb-4 uppercase block">
                PRIVATE JETS
              </span>

              {/* Large Two-line Heading with Overlapping Effect */}
              <div className="flex flex-col items-center mb-6">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal text-gray-500 leading-none tracking-tighter">
                  Premium.
                </h1>
                <h1
                  className="text-6xl md:text-7xl lg:text-8xl font-normal leading-none tracking-tighter"
                  style={{ color: '#202A36', marginTop: '-12px' }}
                >
                  Accessible.
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl font-light leading-relaxed">
                Your dedication deserves recognition.
              </p>

              {/* CTA Buttons */}
              <div className="flex items-center gap-4 justify-center">
                <button className="px-6 py-3 rounded-full bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 transition-colors duration-200 shadow-sm">
                  Discover
                </button>
                <button
                  className="px-6 py-3 rounded-full text-white font-medium transition-colors duration-300 shadow-sm"
                  style={{ backgroundColor: '#202A36' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1a2229';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#202A36';
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}