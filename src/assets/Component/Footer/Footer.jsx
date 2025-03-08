import React from 'react';
import fb from "../../../Gallery/fb.png"
import instagram from "../../../Gallery/instagram.png"
import linkedin from "../../../Gallery/linkedin.png"
import twitter from "../../../Gallery/twitter.png"

export default function Footer() {
  return (
    <footer className="bg-orange-200 text-gray-700 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-amber-700 mb-3">InvestWise</h3>
          <p className="text-sm font-medium">
            Secure your future with smart investments. Explore premium financial growth opportunities with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-amber-700 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a  className="hover:text-black transition font-medium text-sm">Privacy Policy</a></li>
            <li><a  className="hover:text-black transition font-medium text-sm">Terms of Service</a></li>
            <li><a  className="hover:text-black transition font-medium text-sm">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a className="hover:text-black transition"><img src={fb} className='w-10' /></a>
            <a className="hover:text-black transition"><img src={instagram} className='w-10' /></a>
            <a className="hover:text-black transition"><img src={linkedin} className='w-10' /></a>
            <a className="hover:text-black transition"><img src={twitter} className='w-10' /></a>
          </div>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-sm border-t border-gray-700 pt-5 font-medium">
        &copy; {new Date().getFullYear()} InvestWise. All Rights Reserved.
      </div>
    </footer>
  );
}
