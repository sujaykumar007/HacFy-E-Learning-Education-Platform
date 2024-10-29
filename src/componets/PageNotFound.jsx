import React from 'react';
import { Button } from 'flowbite-react';

const PageNotFound = () => {
  const handleInternshipClick = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      {/* Optional back link */}
      {/* <Link to='/' className='absolute top-4 left-4 text-blue-700 hover:underline duration-300'> 
        <img src={arrow} className='top-3 w-11' alt="" />
      </Link> */}

      <div className="mt-8 text-center">
        <h1 className="text-2xl font-bold">We are Coming Soon!!!</h1>
        <p className="mt-4 text-gray-700">
          Get ready, we are under process of creating something really cool,<br />
          Our website will be available soon.
        </p>
      </div>

      <div className="mt-6">
        <p>For Internships:</p>
        <Button
          onClick={handleInternshipClick}
          className="bg-gradient-to-r from-white to-sky-400 text-blue-500 hover:from-sky-500 hover:to-blue-500 text-black mt-4"
        >
          Apply Here!
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
