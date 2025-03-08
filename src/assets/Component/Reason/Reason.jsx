import React, { useEffect } from "react";
import photo1 from "../../../Gallery/1.webp"
import photo2 from "../../../Gallery/2.webp"
import photo3 from "../../../Gallery/3.webp"
import photo4 from "../../../Gallery/4.webp"
import photo5 from "../../../Gallery/5.webp"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Reason() {


  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-out',
      once: true,
    });
  }, []);


  return (
    <section id="/Reason" className="py-16 bg-amber-50 px-5">
      <div 
data-aos="fade-up" className="max-w-6xl mx-auto px-6 lg:flex lg:items-center">
        
        {/* Left Side - Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            Why Choose <span className="text-amber-600">InvestWise?</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6 font-medium">
            Expert insights, secure investments, and a platform designed for your financial success.
          </p>

          {/* Benefits List */}
          <ul className="space-y-4">
            <li className="flex items-center text-gray-700">
              <i className="fas fa-shield-alt text-amber-600 text-xl"></i>
              <span className="font-medium"><strong className="text-amber-600 text-xl">1.</strong> Trusted Security: Industry-leading encryption ensures your assets stay protected.</span>
            </li>
            <li className="flex items-center text-gray-700">
              <i className="fas fa-chart-pie text-amber-600 text-xl"></i>
              <span className="font-medium"><strong className="text-amber-600 text-xl">1+1.</strong> Diversified Portfolio: Invest in multiple markets with ease.</span>
            </li>
            <li className="flex items-center text-gray-700">
              <i className="fas fa-user-tie text-amber-600 text-xl"></i>
              <span className="font-medium"><strong className="text-amber-600 text-xl">2+1.</strong> Expert Support: Our professionals guide you to smart investments.</span>
            </li>
          </ul>

          {/* CTA Button */}
          <div className="mt-6">
            <a
              href="/"
              className="inline-block px-6 py-3 text-lg font-medium text-white bg-amber-600 
                        hover:bg-amber-700 rounded-sm border-2 border-amber-800 shadow-md transition"
            >
              See All Benefits
            </a>
          </div>
        </div>

        {/* Right Side - Image Slider */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 relative overflow-hidden">
          <div className="slider-container w-full relative">
            <div className="slider">
              <img src={photo1} alt="Investment Opportunities" className="w-full h-full object-cover" />
              <img src={photo2} alt="Stock Market Growth" className="w-full h-full object-cover" />
              <img src={photo3} alt="Financial Growth" className="w-full h-full object-cover" />
              <img src={photo4} alt="Financial Growth" className="w-full h-full object-cover" />
              <img src={photo5} alt="Financial Growth" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

      </div>

      {/* Slider Animation Styling */}
      <style jsx>{`
        .slider-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .slider {
          display: flex;
          width: 300%;
          height: 100%;
          animation: slide 20s infinite;
        }

        .slider img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @keyframes slide {
          0% { transform: translateX(0); }
          33% { transform: translateX(-100%); }
          66% { transform: translateX(-200%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
