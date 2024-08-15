import React from 'react';
import { Smartphone, Laptop, Tablet, Tv, Watch, Headphones,Tv2Icon, TvIcon} from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-justify">
    <div className="bg-blue-100 p-3 rounded-full mb-4">
      <Icon className="h-8 w-8 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Smartphone Repair",
      description: "From screen replacements, battery upgrades to no motherboard repairs, we fix all smartphone issues."
    },
    {
      icon: Laptop,
      title: "Laptop Repair",
      description: "Hardware and software solutions for all laptop brands and models."
    },
    {
      icon: Tablet,
      title: "Tablet Repair",
      description: "Cracked screens, battery problems, and more - we've got your tablet covered."
    },
    {
      icon: Tv,
      title: "TV & Monitor Repair",
      description: "Bringing your displays back to life with expert repair services."
    },
    {
      icon: Tv2Icon,
      title: "SmartBoard Repair",
      description: "Specialized repair for your smartboards. Get back to presenting now."
    },
    {
      icon: Headphones,
      title: "Audio Device Repair",
      description: "Fixing headphones, speakers, and other audio equipment with precision."
    }
  ];

  return (
    <section id="services-section" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-600 mb-4">Don't see your device listed? We probably still fix it!</p>
          <button 
            onClick={() => {
              const repairSection = document.getElementById('repair-section');
              if (repairSection) repairSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Contact Us for Custom Repairs
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
