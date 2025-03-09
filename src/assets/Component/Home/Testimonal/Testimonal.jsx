import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Testimonial() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  const testimonials = [
    {
      name: "Sophia Martinez",
      quote:
        "InvestWise has completely transformed my financial journey. The platform is seamless and trustworthy!",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      name: "James Anderson",
      quote:
        "I doubled my investments in just a year! The insights and support here are top-notch.",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Elena Rossi",
      quote:
        "InvestWise made investing easy. Their strategies helped me achieve financial stability.",
      image: "https://randomuser.me/api/portraits/women/60.jpg",
    },
    {
      name: "Michael Brown",
      quote:
        "This platform made investing simple for me. I wish I had found it sooner!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Emma Watson",
      quote:
        "The expert insights here helped me make smart investments. Highly recommend!",
      image: "https://randomuser.me/api/portraits/women/48.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="/Testimonial" className="py-28 bg-orange-200 relative px-5">
      <div data-aos="fade-up" className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-700">
          What Our Investors Say
        </h2>
        <p className="mt-4 text-lg text-gray-700 font-medium">
          Join a community of satisfied investors who are achieving their financial goals.
        </p>
      </div>

      <div className="mt-12 max-w-lg mx-auto relative">
        {/* Testimonial Card */}
        <div data-aos="fade-up" className="bg-orange-100 p-6 rounded-xl shadow-lg border-2 border-amber-700 text-center">
          <img
            src={testimonials[index].image}
            alt={`Investor ${testimonials[index].name}`}
            className="w-16 h-16 rounded-full mx-auto border-4 border-amber-700"
          />
          <p className="mt-4 text-gray-700 italic px-4">
            "{testimonials[index].quote}"
          </p>
          <h3 className="mt-3 font-semibold text-amber-700">
            {testimonials[index].name}
          </h3>
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-amber-700 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-amber-600 transition"
        >
          ❮
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-amber-700 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-amber-600 transition"
        >
          ❯
        </button>
      </div>

      <div className="mt-12 text-center">
        <button className="inline-block px-6 py-3 text-lg font-medium text-white bg-amber-600 
hover:bg-amber-700 rounded-sm border-2 border-amber-800 shadow-md transition">
         More Success Stories
        </button>
      </div>
    </section>
  );
}
