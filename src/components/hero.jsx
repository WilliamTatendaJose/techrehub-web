import React, { useState, useEffect } from 'react';


const HeroSection = () => {
  const [currentService, setCurrentService] = useState('Smartphones');
  const services = ['Smartphones', 'Laptops', 'Tablets', 'Game Consoles','Monitors&Tvs', 'Smartboards'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentService(prevService => {
        const currentIndex = services.indexOf(prevService);
        return services[(currentIndex + 1) % services.length];
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const scrollToRepairSection = () => {
    const repairSection = document.getElementById('repair-section');
    if (repairSection) {
      repairSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero">
        <div className="bg-gray-100 min-h-screen flex items-center justify-center   px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
              Expert Repairs for Your
              <span className="block text-blue-600">
                {currentService}
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
              We fix all types of electronics with precision and care. Revive your devices back to working condition.
            </p>
            <div className="mt-10 flex justify-center md:justify-start">
              <div className="inline-flex rounded-md shadow">
                <button
                  onClick={scrollToRepairSection}
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Get a free Estimate
                </button>
              </div>
              <div className="ml-3 inline-flex">
                <a
                  href="#services-section"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src="./src/assets/close-up-circuit-board-with-copy-space.jpg" 
              alt="Electronics Repair" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
        </div>
    </section>
   
  );
};

export default HeroSection;
