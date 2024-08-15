import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Star } from 'lucide-react';

const LiveChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors"
        >
          <MessageCircle size={24} />
        </button>
      )}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl p-4 w-80">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Live Chat</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>
          <div className="mb-4">
            <p className="text-gray-600">How can we help you today?</p>
          </div>
          <textarea
            className="w-full border rounded p-2 mb-2"
            rows="3"
            placeholder="Type your message here..."
          ></textarea>
          <button className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition-colors">
            Send
          </button>
        </div>
      )}
    </div>
  );
};

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        setIsVisible(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md">
        <button onClick={() => setIsVisible(false)} className="float-right text-gray-500 hover:text-gray-700">
          <X size={20} />
        </button>
        <h2 className="text-2xl font-bold mb-4">Wait! Don't Miss Out!</h2>
        <p className="mb-4">Subscribe to our newsletter and get 10% off your first repair.</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border rounded p-2 mb-2"
        />
        <button className="w-full bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition-colors">
          Subscribe
        </button>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    { id: 1, name: "Sarah D.", text: "Quick Repair saved my phone and my data after I dropped it in water. Exceptional service!" },
    { id: 2, name: "Austin M", text: "Fast, efficient, and friendly. I highly recommend their laptop repair service." },
    { id: 3, name: "Little Rock International School", text: "They fixed our iBoards, one had been condemed by many technicians and had not been working for 4 years." },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">What Our Customers Say</h2>
        <div className="text-justify grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center text-justify mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LeadGenerationFeatures = () => {
  return (
    <>
      {/* <LiveChatButton /> */}
      {/* <ExitIntentPopup /> */}
      <TestimonialsSection />
    </>
  );
};

export default LeadGenerationFeatures;
