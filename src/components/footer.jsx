import React from "react";
import { phone, logo } from "../assets";
import { footerQlink, Resources, Contact_link } from "@/constants";
import { styles } from "@/style";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  // Footer Section
  return (
    <footer className="bg-gray-800 text-white px-6 pb-4 relative">
      <div className="container mx-auto w-full flex flex-wrap border-b-2 border-gray-500 pb-6 p-2 justify-between items-center">
        <div className="w-full md:w-1/3 mb-8 md:mb-0 flex items-center">
          <img
            src={phone}
            alt="Phone"
            className="border p-3 rounded-full mr-4"
          />
          <div>
            <h2 className="text-xl font-bold">Give Us A Call</h2>
            <p className="text-lg">+91 8660767853</p>
          </div>
          <a
            href="https://wa.me/918660767853"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-green-500 hover:bg-green-600 px-4 py-3 rounded-full transition-all duration-300 hover:scale-110 flex items-center gap-2"
          >
            <FaWhatsapp size={20} className="text-white" />
            <span className="text-white font-medium">Chat with us</span>
          </a>
        </div>
        <div className="w-full lg:w-1/3 md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-xl font-bold">Join Our Newsletter</h2>
          <form className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 w-full rounded-l-lg text-gray-800"
            />
            <button
              type="submit"
              className={`${styles.buttonred} font-semibold rounded-s-none text-lg px-4 py-3`}
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
          <div className="flex gap-2 pt-5">
            {Contact_link.map((link) => (
              <span
                className="p-3 bg-slate-600 duration-300 hover:bg-primarys rounded-lg"
                key={link.linke}
              >
                <a href={link.linke} target="_black">
                  <img src={link.img} className="" alt={link.linke} />
                </a>
              </span>
            ))}
          </div>
        </div>
        <div className="w-full hidden lg:block md:w-1/3 lg:pl-24 xl:pl-36 mb-8 md:mb-0">
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
      <div className="container mx-auto mt-8 px-4">
        <h2 className="text-xl font-bold mb-4 text-center">Our Location</h2>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1924935408215!2d74.96508097602369!3d13.023410613738356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4ab005287a2a3%3A0xde10dc39da092988!2sHacfy%20office!5e0!3m2!1sen!2sin!4v1735543950379!5m2!1sen!2sin"
            className="w-full max-w-[1000px]"
            height="300"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <p className="border-t-[1px] border-third pt-2 font-medium flex justify-center text-center items-center">
        © 2024 <span className="text-red-500 pl-2"> HacFy</span>, All Rights
        Reserved
      </p>
    </footer>
  );
};

export default Footer;
