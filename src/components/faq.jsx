import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, shortAnswer, fullAnswer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-start w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-6 w-6 text-gray-500" />
        ) : (
          <ChevronDown className="h-6 w-6 text-gray-500" />
        )}
      </button>
      <p className="mt-2 text-gray-600 text-justify">
        {isOpen ? fullAnswer : shortAnswer}
      </p>
      {!isOpen && (
        <button
          className="mt-2 text-blue-600 hover:text-blue-800"
          onClick={() => setIsOpen(true)}
        >
          Read more
        </button>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "How long does a typical repair take?",
      shortAnswer: "Most repairs are completed within 24-48 hours.",
      fullAnswer: "Most repairs are completed within 24-48 hours. However, the exact time can vary depending on the type of device, the complexity of the repair, and the availability of parts. Some simple repairs, like screen replacements for common smartphone models, can often be done on the same day. For more complex repairs or if we need to order special parts, it might take up longer. We always strive to complete repairs as quickly as possible without compromising on quality."
    },
    {
      question: "Do you offer a warranty on repairs?",
      shortAnswer: "Yes, we offer a 90-day warranty on most repairs.",
      fullAnswer: "Yes, we offer a 90-day warranty on all repairs except for water damaged devices. This warranty covers both the parts we use and our workmanship. If you experience any issues related to the repair we performed within 90 days of the service, we'll fix it free of charge. This warranty doesn't cover new damage,water damage, software issues unrelated to our repair, or problems with parts of the device we didn't work on. We stand behind the quality of our work and want you to feel confident in our services."
    },
    {
      question: "What brands do you repair?",
      shortAnswer: "We repair all major brands including Apple, Samsung, and more.",
      fullAnswer: "We repair all major brands including Apple, Samsung, Google, LG, Motorola, Huawei, and many others. Our technicians are trained to work on a wide variety of devices from different manufacturers. This includes smartphones, tablets, laptops, desktop computers, smart watches, and other electronic devices. If you don't see your brand listed here, feel free to contact us – chances are, we can still help you with your repair needs."
    },
    {
      question: "Do I need an appointment for a repair?",
      shortAnswer: "Walk-ins are welcome, but appointments are recommended.",
      fullAnswer: "Walk-ins are welcome, but appointments are recommended for faster service. By scheduling an appointment, you can ensure that a technician will be available to start working on your device as soon as you arrive. This can significantly reduce your wait time. However, we understand that sometimes you need immediate assistance, which is why we also accept walk-ins. If you choose to walk in, we'll do our best to accommodate you as quickly as possible, but please note that there might be a wait depending on our current workload."
    },
    {
      question: "How can i mail-in my device for repair",
      shortAnswer: "You can contact us and we will see the best option for you.",
      fullAnswer: "You can contact us and we can arrange the best option for you. We need to access the condition of the device and if it is makes sense for you to send your device you can then go ahead and we will repair it and send it back to you. If the cost of repair and mail is close to the value of buying a new device we wont accept the device."
    },
    {
      question: "Can you come and repair the device at my place.",
      shortAnswer: "Yes, we offer door to door repair services",
      fullAnswer: "Yes, we offer door to door repair services for customers in Harare. Contact us and we will come to your place and you can have your device fixed in the comfort of ypur home or office. This is a preferred option for customers that have heavy devices or fragile devices."
    },
    {
      question: "Do I pay when you have failed to fix my device?",
      shortAnswer: "No you are not obligated to pay anything.",
      fullAnswer: "No you are not obligated to pay anything if we fail to repair your device. However it is encouraged to pay our technicians a small fee amounting to $10. This is because time would have been spent attempting to repair your device. Disassembling and reassembling is a tough process for most modern devices."
    },
    {
      question: "What happens if my device can't be repaired?",
      shortAnswer: "We'll provide options including recycling or upgrading.",
      fullAnswer: "If we determine that your device can't be repaired, we'll explain the reasons why and discuss your options with you. These options may include recycling the device, which we can do for you free of charge, or exploring upgrade options. In some cases, if the cost of repair would be close to or exceed the cost of a new device, we might recommend considering an upgrade. We pride ourselves on honest assessments and will never recommend unnecessary repairs. Our goal is to provide you with the most cost-effective solution for your needs."
    }
  ];

  return (
    <section id="faq" className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Don't see your question here?</p>
          <button 
            onClick={() => {
              const repairSection = document.getElementById('repair-section');
              if (repairSection) repairSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
