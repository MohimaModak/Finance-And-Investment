import React, { useRef, useEffect } from "react";
import Video from "../../../Gallery/Video.mp4";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CTA() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-out',
      once: true,
    });
  }, []);


  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="py-28 bg-amber-50 px-5 text-center text-gray-700">
      <div 
data-aos="fade-up" className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          Start Investing with InvestWise Today
        </h2>
        {/* Subheading */}
        <p className="text-lg mb-8 font-medium">
          Join thousands of successful investors who are making their money work for them.
        </p>

        {/* Call-to-Action Button */}
        <div  className="mb-8">
          <a
            href="/" // Link to your signup page
            className="inline-block px-6 py-3 text-lg font-medium text-white bg-amber-600 
hover:bg-amber-700 rounded-sm border-2 border-amber-800 shadow-md transition"
          >
            Start Investing
          </a>
        </div>

        {/* Video */}
        <div 
data-aos="fade-up" className="mt-8">
          <video
            ref={videoRef}
            src={Video}
            muted
            loop
            className="w-full h-auto rounded-lg shadow-lg mx-auto"
            preload="auto"
            type="video/mp4"
          />
        </div>
      </div>
    </section>
  );
}
