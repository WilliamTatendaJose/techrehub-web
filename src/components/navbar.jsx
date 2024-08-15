import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const scrollToRepairSection = () => {
    const repairSection = document.getElementById('repair-section');
    if (repairSection) {
      repairSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold ">TECHREHUB</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#hero" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Home</a>
                <a href="#process-section" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">About</a>
                <a href="#services-section" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Services</a>
                <a href="#repair-section" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Contact</a>
              </div>
            </div>
            
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#hero" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</a>
            <a href="#process-section" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">About</a>
            <a href="#services-section" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Services</a>
            <a href="#repair-section" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
