import React, { useState } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <ShieldCheck className="h-8 w-8 text-green-800" />
              <span className="ml-2 text-xl font-bold text-green-800">Trezor Bridge</span>
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-green-800 font-medium">About</a>
            <a href="#download" className="text-gray-700 hover:text-green-800 font-medium">Download</a>
            <a href="#guide" className="text-gray-700 hover:text-green-800 font-medium">Setup Guide</a>
            <a href="#faq" className="text-gray-700 hover:text-green-800 font-medium">FAQ</a>
            <a href="#" className="bg-green-800 text-white hover:bg-green-700 py-2 px-4 rounded-lg font-medium">Support</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-800 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-gray-700 hover:text-green-800 font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#download" 
                className="text-gray-700 hover:text-green-800 font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Download
              </a>
              <a 
                href="#guide" 
                className="text-gray-700 hover:text-green-800 font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Setup Guide
              </a>
              <a 
                href="#faq" 
                className="text-gray-700 hover:text-green-800 font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="#" 
                className="bg-green-800 text-white hover:bg-green-700 py-2 px-4 rounded-lg font-medium mx-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;