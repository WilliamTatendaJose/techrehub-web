import React from 'react';
import { Calculator, Store, Mail, Home } from 'lucide-react';

const ProcessCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
    <div className="bg-blue-100 p-3 rounded-full mb-4">
      <Icon className="h-8 w-8 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-justify">{description}</p>
  </div>
);
const scrollToRepairSection = () => {
    const repairSection = document.getElementById('repair-section');
    if (repairSection) {
      repairSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

const RepairProcessSection = () => {
  const processes = [
    {
      icon: Calculator,
      title: "Free Estimate",
      description: "Get a no-obligation free quote for your device repair. Our experts will assess the issue and provide a transparent pricing."
    },
    {
      icon: Store,
      title: "In-Store Service",
      description: "Bring your device to our store for immediate attention. Our technicians will diagnose and repair on-site when possible."
    },
    {
      icon: Mail,
      title: "Mail-In Option",
      description: "Can't make it to our store? No problem! Mail your device to us, and we'll repair and return it promptly."
    },
    {
      icon: Home,
      title: "At-Home Repair",
      description: "For your convenience, our technicians can come to your home or company and perform the repair in the comfort of your own space."
    }
  ];

  return (
    <section id="process-section" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">How Our Repair Process Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <ProcessCard key={index} {...process} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-600 mb-4">Ready to get your device repaired? Choose the option that works best for you!</p>
          <button 
             onClick={scrollToRepairSection}
            
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Schedule Your Repair Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default RepairProcessSection;
