import React, { useEffect } from "react";
import stock from "../../../Gallery/stock.png";
import assets from "../../../Gallery/assets.png";
import bitcoin from "../../../Gallery/bitcoin.png";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Opportunities() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-out',
      once: true,
    });
  }, []);
  return (
    <section id="/Opportunities" className="py-28 bg-amber-50 px-5">
      <div data-aos="fade-up" className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Heading & Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-700">
            Explore Premium Investment Opportunities
          </h2>
          <p className="mt-4 text-lg text-gray-700 font-medium">
            Invest in a range of diversified, high-growth assets suited for all risk profiles.
          </p>
          <button href="/" className="mt-6 inline-block px-6 py-3 text-lg font-medium text-white bg-amber-600 
         hover:bg-amber-700 rounded-sm border-2 border-amber-800 shadow-md transition">
            Browse All Investment Options
          </button>
        </div>

        {/* Right Side - Investment Categories */}
        <div className="grid gap-6">
          {/* Stocks & Equities */}
          <div data-aos="fade-up" className="flex items-center gap-6 p-6 bg-orange-100 rounded-xl shadow-md border border-amber-700">
            <img src={stock} className="w-12 h-12" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Stocks & Equities</h3>
              <p className="text-gray-700 font-medium">
                Tap into the stock market’s potential with high-return options.
              </p>
            </div>
          </div>

          {/* Real Estate */}
          <div data-aos="fade-up" className="flex items-center gap-6 p-6 bg-orange-100 rounded-xl shadow-md border border-amber-700">
            <img src={assets} className="w-12 h-12" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Real Estate</h3>
              <p className="text-gray-700 font-medium">
                Invest in prime properties for stable long-term gains.
              </p>
            </div>
          </div>

          {/* Cryptocurrency */}
          <div data-aos="fade-up" className="flex items-center gap-6 p-6 bg-orange-100 rounded-xl shadow-md border border-amber-700">
            <img src={bitcoin} className="w-12 h-12" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Cryptocurrency</h3>
              <p className="text-gray-700 font-medium">
                Access the emerging market of digital assets with curated crypto investment opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
