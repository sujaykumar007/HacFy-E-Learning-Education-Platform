import React from "react";
import { phone, logo } from "../assets";
import { footerQlink, Resources ,Contact_link} from "@/constants";
import { styles } from "@/style";
const Footer = () => {

    // Footer Section 
  return (
    <footer className="bg-gray-800 text-white px-6 pb-4 ">
      <div className="container mx-auto w-full flex flex-wrap border-b-2  border-gray-500 pb-6 p-2 justify-between items-center">
        <div className="w-full md:w-1/3 mb-8 md:mb-0 flex items-center">
          <img
            src={phone}
            alt="Phone"
            className="border p-3 rounded-full  mr-4"
          />
          <div>
            <h2 className="text-xl font-bold">Give Us A Call</h2>
            <p className="text-lg">+91 8660767853</p>
          </div>
        </div>
        <div className="w-full lg:w-1/3  md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-xl font-bold">Join Our Newsletter</h2>
          <form className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 w-full rounded-l-lg text-gray-800"
            />
            <button
              type="submit"
              className={`${styles.buttonred}font-semibold  rounded-s-none text-lg px-4 py-3`}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="container w-full flex flex-wrap justify-between items-center mt-8">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={logo} alt="HacFy Logo" className="w-9" />
          <p className="mt-4 font-medium">
            Cybersecurity is crucial in today's digital age, where many
            individuals and organizations store a significant amount of
            sensitive data on computers...
          </p>
          <div className="flex gap-2  pt-5 ">
            {Contact_link.map((link)=>(
              <span className="p-3 bg-slate-600   duration-300 hover:bg-primarys rounded-lg " key={link.linke} ><a href={link.linke } target="_black"><img src={link.img} className="" alt={link.linke}   /></a></span>
            ))}
           
          </div>
        </div>
        <div className="w-full  hidden  lg:block md:w-1/3 lg:pl-24 xl:pl-36 mb-8 md:mb-0">
          <h2 className="text-xl font-bold">Contact Us</h2>
          <p>Mangalore, DK, Karnataka</p>
          <p>info.hacfy@gmail.com</p>
          <p>+91 8660767853</p>
        </div>
        <div className="w-full md:w-1/3 flex flex-wrap">
          <div className="w-1/2">
            <h2 className="text-xl font-bold">Quick Links</h2>
            <ul className="mt-4">
              {footerQlink.map((link) => (
                <li key={link.id}>
                  <a href={link.id} className="text-gray-400 hover:text-white">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/2">
            <h2 className="text-xl font-bold">Resources</h2>
            <ul className="mt-4">
              {Resources.map((link) => (
                <li key={link.id}>
                  <a href={link.id} className="text-gray-400 hover:text-white">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center text-gray-500">
        
      </div>
      <p className=" border-t-[1px] border-third pt-2  font-medium flex justify-center text-center items-center">
          © 2024  <span className="text-red-500 pl-2"> HacFy</span>, All Rights Reserved
        </p>
    </footer>
  );
};

export default Footer;
