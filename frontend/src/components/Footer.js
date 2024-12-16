import React from 'react';
import { FaBeer } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-gray-400">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Company</h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <a href="#about" className="hover:underline">About</a>
              </li>
              <li className="mb-4">
                <a href="#careers" className="hover:underline">Careers</a>
              </li>
              <li className="mb-4">
                <a href="#brand-center" className="hover:underline">Brand Center</a>
              </li>
              <li className="mb-4">
                <a href="#blog" className="hover:underline">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Help Center</h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <a href="#discord" className="hover:underline">Discord Server</a>
              </li>
              <li className="mb-4">
                <a href="#twitter" className="hover:underline">Twitter</a>
              </li>
              <li className="mb-4">
                <a href="#facebook" className="hover:underline">Facebook</a>
              </li>
              <li className="mb-4">
                <a href="#contact" className="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <a href="#privacy-policy" className="hover:underline">Privacy Policy</a>
              </li>
              <li className="mb-4">
                <a href="#licensing" className="hover:underline">Licensing</a>
              </li>
              <li className="mb-4">
                <a href="#terms-conditions" className="hover:underline">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Download</h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <a href="#ios" className="hover:underline">iOS</a>
              </li>
              <li className="mb-4">
                <a href="#android" className="hover:underline">Android</a>
              </li>
              <li className="mb-4">
                <a href="#windows" className="hover:underline">Windows</a>
              </li>
              <li className="mb-4">
                <a href="#macos" className="hover:underline">MacOS</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
        <div className="px-56 py-6 bg-gray-800 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">© 2023 <a href="https://pahichan.com/">Pahichan™</a>. All Rights Reserved.</span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a href="#facebook" className="text-gray-400 hover:text-gray-900">
              {/* Facebook SVG */}
              <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 8 19">
                <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#discord" className="text-gray-400 hover:text-gray-900">
              {/* Discord SVG */}
              <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 21 16">
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
