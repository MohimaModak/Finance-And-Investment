import React, { useEffect } from 'react';
import check from "../../../Gallery/check.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Price() {
    useEffect(() => {
        AOS.init({
          duration: 2000,
          easing: 'ease-out',
          once: true,
        });
      }, []);
    return (
        <section id='/Price' className="py-16 bg-amber-50 px-5 text-gray-700">
            <div data-aos="fade-up">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold">
                    Choose the Perfect Plan for Your Investment Goals
                </h2>
                <p className="mt-4 text-lg text-gray-700 font-medium">
                    Select a plan that aligns with your financial aspirations.
                </p>
            </div>

            <div className="mt-12 max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
                {/* Basic Plan */}
                <div data-aos="fade-up" className="bg-orange-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-center">
                    <h3 className="text-2xl font-semibold text-gray-800">Basic Plan</h3>
                    <p className="text-gray-700 font-medium">Perfect for new investors starting their journey.</p>
                    <div className="mt-4 text-3xl font-bold text-amber-700">$29 / month</div>
                    <ul className="mt-6 text-left space-y-3 text-gray-700">
                        <li className='flex items-center gap-3 font-medium'><span><img src={check} className='w-5' /></span> <span>Basic Investment Strategies</span></li>
                        <li className='flex items-center gap-3 font-medium'><span><img src={check} className='w-5' /></span> <span>Access to Standard Assets</span></li>
                        <li className='flex items-center gap-3 font-medium'><span><img src={check} className='w-5' /></span> <span>24/7 Customer Support</span></li>
                    </ul>
                    <button className="mt-6 px-6 py-3 bg-amber-700 text-white font-semibold rounded-lg shadow-md hover:amber-800 transition">
                        Get Started
                    </button>
                </div>

                {/* Premium Plan */}
                <div data-aos="fade-up" className="bg-amber-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-center text-orange-100">
                    <h3 className="text-2xl font-semibold">Premium Plan</h3>
                    <p className="font-medium">Access advanced strategies and personalized advice.</p>
                    <div className="mt-4 text-3xl font-bold text-orange-100">$99 / month</div>
                    <ul className="mt-6 text-left space-y-3">
                        <li className='flex items-center gap-3 font-medium'><span><img src={check} className='w-5' /></span> <span>Basic Investment Strategies</span></li>
                        <li className='flex items-center gap-3 font-medium'><span><img src={check} className='w-5' /></span> <span>Access to Standard Assets</span></li>
                        <li className='flex items-center gap-3 font-medium'><span><img src={check} className='w-5' /></span> <span>24/7 Customer Support</span></li>
                    </ul>
                    <button className="mt-6 px-6 py-3 bg-orange-100 text-amber-700 font-medium rounded-lg shadow-md hover:amber-800 transition">
                        Get Started
                    </button>
                </div>

                {/* Elite Plan */}
                <div data-aos="fade-up" className="bg-orange-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-center">
                    <h3 className="text-2xl font-semibold text-gray-800">Elite Plan</h3>
                    <p className="text-gray-700 font-medium ">Tailored for high-net-worth individuals seeking comprehensive investment management.</p>
                    <div className="mt-4 text-3xl font-bold text-amber-700">$199 / month</div>
                    <ul className="mt-6 text-left space-y-3 text-gray-600">
                        <li className='flex items-center gap-3 font-medium'><span><img src={check} className='w-5' /></span> <span>Basic Investment Strategies</span></li>
                        <li className='flex items-center gap-3 font-medium'><span><img src={check} className='w-5' /></span> <span>Access to Standard Assets</span></li>
                        <li className='flex items-center gap-3 font-medium'><span><img src={check} className='w-5' /></span> <span>24/7 Customer Support</span></li>
                    </ul>
                    <button className="mt-6 px-6 py-3 bg-amber-700 text-white font-semibold rounded-lg shadow-md hover:amber-800 transition">
                        Get Started
                    </button>
                </div>
            </div>

            <div className="mt-12 text-center">
                <button  href="/" className="mt-6 inline-block px-6 py-3 text-lg font-medium text-white bg-amber-600 
                hover:bg-amber-700 rounded-sm border-2 border-amber-800 shadow-md transition">
                    Find Your Ideal Plan
                </button>
            </div>
            </div>
        </section>
    );
}
