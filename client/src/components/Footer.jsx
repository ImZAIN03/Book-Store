import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-cyan-950 text-white py-6">
      <div className="container mx-auto flex justify-between items-center font-mono font-semibold px-3 py-2">
        <div className="flex gap-5 text-xl">
          <Link
            to="/"
            className="hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Blog
          </Link>
          <Link
            to="/shop"
            className="hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-300 transition duration-300 ease-in-out"
          >
            About
          </Link>
        </div>
        <div className="flex gap-4">
          <Link to="https://www.linkedin.com/in/muhammed-zain2003/" target="_blank">
            <FaLinkedin className="text-2xl hover:text-gray-300" />
          </Link>
          <Link to="https://www.instagram.com/chatswithfolks/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target="_blank">
            <FaInstagram className="text-2xl hover:text-gray-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
