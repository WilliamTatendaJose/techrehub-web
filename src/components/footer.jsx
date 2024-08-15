import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Tech Rehub</h3>
            <p className="text-gray-300">Reviving Your Devices.</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-300 hover:text-white"><Facebook size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Instagram size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className=" space-y-2">
              <li><a href="#services-section" className="text-gray-300 hover:text-white">Smartphone Repair</a></li>
              <li><a href="#services-section" className="text-gray-300 hover:text-white">Laptop Repair</a></li>
              <li><a href="#services-section" className="text-gray-300 hover:text-white">Tablet Repair</a></li>
              <li><a href="#services-section" className="text-gray-300 hover:text-white">TV & Monitor Repair</a></li>
              <li><a href="#services-section" className="text-gray-300 hover:text-white">Smartboard Repair</a></li>
            </ul>
          </div>

          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Our Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
            </ul>
          </div> */}

          <div>
            <h4 className="text-left text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+263 773 447 131</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:support@techrehub.co.zw" className="hover:text-white">support@techrehub.co.zw</a>
              </li>
              {/* <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>123 Repair St, Fix City, RC 12345</span>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">&copy; {currentYear} Tech Rehub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
