import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Table() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  return (
    <section className="py-16 bg-amber-50 px-5 text-amber-800">
      <div data-aos="fade-up" className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
          Investment Comparison: Find the Best Option for You
        </h2>

        {/* Table */}
        <div className="overflow-x-auto bg-orange-100 shadow-md rounded-sm">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-orange-100 text-gray-800">
                <th className="px-6 py-3 shadow-lg text-left text-base border-2 border-amber-700 font-bold text-amber-800">Investment Type</th>
                <th className="px-6 py-3 shadow-lg text-left text-base border-2 border-amber-700 font-bold text-amber-800">Risk Level</th>
                <th className="px-6 py-3 shadow-lg text-left text-base border-2 border-amber-700 font-bold text-amber-800">Expected Return (%)</th>
                <th className="px-6 py-3 shadow-lg text-left text-base border-2 border-amber-700 font-bold text-amber-800">Time Horizon</th>
                <th className="px-6 py-3 shadow-lg text-left text-base border-2 border-amber-700 font-bold text-amber-800">Liquidity</th>
                <th className="px-6 py-3 shadow-lg text-left text-base border-2 border-amber-700 font-bold text-amber-800">Min Investment Amount</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr className="">
                <td className="px-6 py-5 shadow-lg text-base border-2 border-amber-700 font-medium text-amber-800">Stocks</td>
                <td className="px-6 py-5 shadow-lg text-base border-2 border-amber-700 text-amber-800">High</td>
                <td className="px-6 py-5 shadow-lg text-base border-2 border-amber-700 text-amber-800">7-10%</td>
                <td className="px-6 py-5 shadow-lg text-base border-2 border-amber-700 text-amber-800">Long-term</td>
                <td className="px-6 py-5 shadow-lg text-base border-2 border-amber-700 text-amber-800">Medium</td>
                <td className="px-6 py-5 shadow-lg text-base border-2 border-amber-700 text-amber-800">$500</td>
              </tr>
              {/* Row 2 */}
              <tr className="">
                <td className="px-6 py-5 shadow-lg text-base border-2 border-amber-700 font-medium text-amber-800">Bonds</td>
                <td className="px-6 py-5 shadow-lg text-base border-2 border-amber-700 text-amber-800">Low</td>
                <td className="px-6 py-5 shadow-lg text-base border-2 border-amber-700 text-amber-800">3-5%</td>
                <td className="px-6 py-5 shadow-lg text-base border-2 border-amber-700 text-amber-800">Long-term</td>
                <td className="px-6 py-5 shadow-lg text-base border-2 border-amber-700 text-amber-800">High</td>
                <td className="px-6 py-5 shadow-lg text-base border-2 border-amber-700 text-amber-800">$1,000</td>
              </tr>
              {/* Row 3 */}
              <tr className="">
                <td className="px-6 py-5 shadow-lg text-base border-2 border-amber-700 font-medium text-amber-800">Mutual Funds</td>
                <td className="px-6 py-5 shadow-lg text-base border-2 border-amber-700 text-amber-800">Medium</td>
                <td className="px-6 py-5 shadow-lg text-base border-2 border-amber-700 text-amber-800">5-8%</td>
                <td className="px-6 py-5 shadow-lg text-base border-2 border-amber-700 text-amber-800">Long-term</td>
                <td className="px-6 py-5 shadow-lg text-base border-2 border-amber-700 text-amber-800">Medium</td>
                <td className="px-6 py-5 shadow-lg text-base border-2 border-amber-700 text-amber-800">$1,500</td>
              </tr>
              {/* Row 4 */}
              <tr className="">
                <td className="px-6 py-5 shadow-lg text-base border-2 border-amber-700 font-medium text-amber-800">Real Estate</td>
                <td className="px-6 py-5 shadow-lg text-base border-2 border-amber-700 text-amber-800">Medium</td>
                <td className="px-6 py-5 shadow-lg text-base border-2 border-amber-700 text-amber-800">6-8%</td>
                <td className="px-6 py-5 shadow-lg text-base border-2 border-amber-700 text-amber-800">Long-term</td>
                <td className="px-6 py-5 shadow-lg text-base border-2 border-amber-700 text-amber-800">Low</td>
                <td className="px-6 py-5 shadow-lg text-base border-2 border-amber-700 text-amber-800">$10,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8">
          <a
            href="" // Link to more details or sign-up page
            className="inline-block px-6 py-3 text-lg font-medium text-white bg-amber-600 
hover:bg-amber-700 rounded-sm border-2 border-amber-800 shadow-md transition"
          >
            Explore More Investment Options
          </a>
        </div>
      </div>
    </section>
  );
}
