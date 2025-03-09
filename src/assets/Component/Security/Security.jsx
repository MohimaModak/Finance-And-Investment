import React, { useEffect } from "react";
import encryption from "../../../Gallery/encryption.png";
import photo from '../../../Gallery/switch.png'
import trust from "../../../Gallery/trust.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Security() {

    useEffect(() => {
        AOS.init({
          duration: 2000,
          easing: 'ease-out',
          once: true,
        });
      }, []);

    return (
        <section id="/Security" className="py-28 bg-orange-200 relative px-5">
            <div  className="max-w-6xl mx-auto text-center px-6">
                {/* Heading */}
                <h2 className="text-3xl font-bold text-center text-gray-700 mb-4">
                    Your Security is Our Priority
                </h2>
                {/* Subheading */}
                <p className="text-lg text-gray-700 font-medium mb-8">
                    Industry-leading security protocols ensure your investments are always safe.
                </p>

                {/* Security Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Security Badge 1 */}
                    <div data-aos="fade-up" className="bg-orange-100 border-2 border-amber-800 transition-transform transform hover:scale-105  text-amber-800 p-8 rounded-xl shadow-lg text-center">
                        <img
                            src={encryption} // Replace with a trusted icon URL
                            alt="Bank-level encryption"
                            className="mx-auto mb-4 w-20"
                        />
                        <h3 className="text-xl font-bold mb-2">
                            Bank-level Encryption
                        </h3>
                        <p className="text-gray-700 font-medium">
                            We use bank-grade encryption to ensure your financial data is always protected.
                        </p>
                    </div>

                    {/* Security Badge 2 */}
                    <div data-aos="fade-up" className="bg-orange-100 border-2 border-amber-800 transition-transform transform hover:scale-105  text-amber-800 p-8 rounded-xl shadow-lg text-center">
                        <img
                            src={photo}
                            className="mx-auto mb-4 w-20"
                        />
                        <h3 className="text-xl font-bold mb-2">
                            Privacy Certifications
                        </h3>
                        <p className="text-gray-700 font-medium">
                            We are fully compliant with data protection laws to protect your personal information.
                        </p>
                    </div>

                    {/* Security Badge 3 */}
                    <div data-aos="fade-up" className="bg-orange-100 border-2 border-amber-800 transition-transform transform hover:scale-105  text-amber-800 p-8 rounded-xl shadow-lg text-center">
                        <img
                            src={trust} // Replace with a trusted icon URL
                            alt="Trusted Partners"
                            className="mx-auto mb-4 w-20"
                        />
                        <h3 className="text-xl font-bold mb-2">
                            Trusted Partners
                        </h3>
                        <p className="text-gray-700 font-medium">
                            We work with the world’s most trusted financial institutions to provide secure investments.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12">
                    <a
                        href="/" // Link to your detailed security page
                        className="inline-block px-6 py-3 text-lg font-medium text-white bg-amber-600 
                       hover:bg-amber-700 rounded-sm border-2 border-amber-800 shadow-md transition"
                    >
                        Learn More About Our Security
                    </a>
                </div>
            </div>
        </section>
    );
}
