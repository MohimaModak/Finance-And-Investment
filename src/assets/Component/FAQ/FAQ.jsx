import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function FAQ() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-16 bg-orange-200 relative px-5">
      <div
        data-aos="fade-up" className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-700">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg text-gray-700 font-medium">
          Get answers to the most common questions about InvestWise.
        </p>
      </div>

      <div className="mt-12 max-w-5xl mx-auto">
        {/* FAQ Item 1 */}
        <div 
data-aos="fade-up" className="bg-orange-100 p-6 rounded-lg shadow-md mb-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => handleToggle(1)}
          >
            <h3 className="text-xl font-semibold text-gray-700">
              How secure is InvestWise?
            </h3>
            <span className="text-gray-600">{activeIndex === 1 ? '-' : '+'}</span>
          </div>
          {activeIndex === 1 && (
            <p className="mt-4 text-gray-700 font-medium">
              InvestWise uses industry-leading security protocols and encryption to ensure that your investments and data are protected at all times.
            </p>
          )}
        </div>

        {/* FAQ Item 2 */}
        <div 
data-aos="fade-up" className="bg-orange-100 p-6 rounded-lg shadow-md mb-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => handleToggle(2)}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              What types of investments can I make on InvestWise?
            </h3>
            <span className="text-gray-600">{activeIndex === 2 ? '-' : '+'}</span>
          </div>
          {activeIndex === 2 && (
            <p className="mt-4 text-gray-700 font-medium">
              You can invest in stocks, real estate, cryptocurrency, and other high-growth assets through InvestWise.
            </p>
          )}
        </div>

        {/* FAQ Item 3 */}
        <div 
data-aos="fade-up" className="bg-orange-100 p-6 rounded-lg shadow-md mb-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => handleToggle(3)}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              How do I track my investment performance?
            </h3>
            <span className="text-gray-600">{activeIndex === 3 ? '-' : '+'}</span>
          </div>
          {activeIndex === 3 && (
            <p className="mt-4 text-gray-700 font-medium">
              InvestWise provides a comprehensive dashboard where you can easily track your portfolio's performance, growth, and history.
            </p>
          )}
        </div>
      </div>

      <div className="mt-12 text-center">
        <button className="inline-block px-6 py-3 text-lg font-medium text-white bg-amber-600 
hover:bg-amber-700 rounded-sm border-2 border-amber-800 shadow-md transition">
          View All FAQs
        </button>
      </div>

      {/* SEO Structured Data (JSON-LD for Rich Snippets) */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How secure is InvestWise?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "InvestWise uses industry-leading security protocols and encryption to ensure that your investments and data are protected at all times."
              }
            },
            {
              "@type": "Question",
              "name": "What types of investments can I make on InvestWise?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can invest in stocks, real estate, cryptocurrency, and other high-growth assets through InvestWise."
              }
            },
            {
              "@type": "Question",
              "name": "How do I track my investment performance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "InvestWise provides a comprehensive dashboard where you can easily track your portfolio's performance, growth, and history."
              }
            }
          ]
        }
        `}
      </script>
    </section>
  );
}
