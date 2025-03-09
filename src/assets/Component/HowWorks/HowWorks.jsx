import React, { useEffect } from "react";
import signup from "../../../Gallery/signup.png";
import investment from "../../../Gallery/investment.png";
import portfolioGrow from "../../../Gallery/portfolioGrow.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HowWorks() {

    useEffect(() => {
        AOS.init({
          duration: 2000,
          easing: 'ease-out',
          once: true,
        });
      }, []);

    return (
        <section className="py-28 bg-amber-50 px-5">
            <div data-aos="fade-up">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-700">
                    How InvestWise Empowers Your Financial Journey
                </h2>
                <p className="mt-4 text-lg text-gray-700 font-medium">
                    A straightforward investment process designed to be simple, secure, and rewarding.
                </p>
            </div>

            <div className="mt-12 max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
                {[
                    {
                        step: "Step 1",
                        title: "Sign Up",
                        description: "Register in just a few minutes for shine.",
                        image: signup,
                        alt: "User signing up on InvestWise",
                    },
                    {
                        step: "Step 2",
                        title: "Choose Investment",
                        description: "Select from a curated range of assets.",
                        image: investment,
                        alt: "Choosing investment options on InvestWise",
                    },
                    {
                        step: "Step 3",
                        title: "Watch Portfolio Grow",
                        description: "Track progress with real-time insights.",
                        image: portfolioGrow,
                        alt: "Portfolio growth tracking on InvestWise",
                    },
                ].map((item, index) => (
                    <div className="flex justify-center items-center">

                        <div data-aos="fade-up"
                            key={index}
                            className="bg-orange-100 p-6 rounded-xl shadow-lg border border-amber-700 text-center 
                            w-max"
                        >
                            <span>
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="w-24 h-24 mx-auto mb-4 object-contain"
                                />
                                <span className="text-gray-700 font-bold">{item.step}</span>
                                <h3 className="text-xl font-bold mt-2 text-gray-800">{item.title}</h3>
                                <p className="text-gray-700 font-medium mt-2">{item.description}</p>
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <button  href="/" className="inline-block px-6 py-3 text-lg font-medium text-white bg-amber-600 
hover:bg-amber-700 rounded-sm border-2 border-amber-800 shadow-md transition">
                    Get Started Now
                </button>
            </div>
            </div>
        </section>
    );
}
