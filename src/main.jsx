import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//IMPORT COMPONENTS HERE IF NEW PAGES ARE ADDED

import {
  About,
  Hero,
  Nav,
  FAQs,
  Footer,
  Number,
  Project,
  Services,
  ClientSlider,
  LoginPage,
  RegistrationPage,
  PageNotFound,
  ResetPassword,
  ContactMe,
  Internship,
  Blog,
  IndustriesWeServe,
  Chatbot
} from "./components";
import VerifyEmail from './components/verifyEmail';
import ResetPasswordEmail from './components/emailresetpassword';
import OtpVerifyReset from './components/resetpasswordOtp';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Nav />
        <Hero />
        <About />
        <Project />
        <IndustriesWeServe />
        <Services />
        <FAQs />
        <Number />
        <ClientSlider />
        <ContactMe />
        <Footer />
        <Chatbot />
      </>
    ),
    errorElement: <PageNotFound />,
  },
  {
    path: '/about',
    element: <><Nav /><About /><Footer /></>
  },
  {
    path: '/Contact',
    element: <><Nav /><ContactMe /><Footer /></>
  },
  {
    path: '/services',
    element: <><Nav /><Services /><Footer /></>
  },
  {
    path: '/project',
    element: <><Nav /><Project /><Footer /></>
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <RegistrationPage />
  },
  {
    path: "/Rpass",
    element: <ResetPassword />
  },
  {
    path: "/internships",
    element: <Internship />
  },
  {
    path: "/verifyEmail",
    element: <VerifyEmail />
  }, {
    path: "/fPass",
    element: <ResetPasswordEmail/>
  },
  {
    path: "/resetOtp",
    element: <OtpVerifyReset />
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="relative z-0 bg-gradient-to-br from-gray-950 via-gray-950 to-black overflow-hidden text-white">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
