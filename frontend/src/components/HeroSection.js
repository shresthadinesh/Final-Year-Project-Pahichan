import React from 'react';
import backgroundImage from '../public/background.png'
const HeroSection = () => {
  return (
    <div className='relative -mt-20 min-h-screen grid justify-center items-center'>
        <div style={{
        backgroundImage: `url(${backgroundImage})`
      }}
      className='h-[94vh] w-screen absolute -right-[290px] -z-10'>
        </div>
    <section
     className="z-10 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl max-h-screen text-center items-center justify-center lg:py-16 lg:px-12">
        <a
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 "
          role="alert"
        >
          <span className="text-xs bg-gray-600 rounded-full text-white px-4 py-1.5 mr-3">New</span>
          <span className="text-sm font-medium">Discover Authentic Dhaka - A Celebration of Nepali Heritage</span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold leading-3 text-white md:text-5xl lg:text-6xl ">
          Embrace the Essence of Nepal with Dhaka
        </h1>
        <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">
          At Pahichan, we are dedicated to preserving and promoting the rich Nepali culture through authentic Dhaka products. Each item celebrates tradition and craftsmanship, bringing you closer to Nepal's heritage.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300"
          >
            Explore Dhaka Collection
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            Watch Our Story
          </a>
        </div>
      </div>
    </section>
 </div>
  );
};

export default HeroSection;
