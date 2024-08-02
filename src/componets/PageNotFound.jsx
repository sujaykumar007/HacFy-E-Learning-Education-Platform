
import { Link } from 'react-router-dom'
import {arrow} from '../assets'

import React, { useState, useEffect } from 'react';


const PageNotFound = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-08-01') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    timerComponents.push(
      <div className="text-center p-4 m-2 bg-gray-100 rounded shadow-lg">
        <div className="text-4xl font-bold text-blue-600">
          {timeLeft[interval]}
        </div>
        <div className="text-sm text-gray-600">
          {interval.charAt(0).toUpperCase() + interval.slice(1)}
        </div>
      </div>
    );
  });

  return (
    <div className="flex justify-center items-center h-screen flex-col">
    <Link to='/' className=' absolute top-4 left-4 text-blue-700  hover:underline duration-300 hover:fill-red-800'> <img src={arrow} className='top-3 w-11' alt="" /></Link>

      <div className="flex ">
        {timerComponents.length ? timerComponents : <span className=' inline-block w-72 '>Time's up!</span>}
      </div>
      <div className="mt-8 text-center">
        <h1 className="text-2xl font-bold">We are Coming Soon!!!</h1>
        <p className="mt-4 text-gray-700">
          Get ready, we are under process of creating something really cool,<br />
          Our website will be available soon.
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
