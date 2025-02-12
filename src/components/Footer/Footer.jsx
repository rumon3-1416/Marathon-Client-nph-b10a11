import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../Hooks/useAuthContext';

import logo from '../../assets/icons/logo.png';
import fbIcon from '../../assets/icons/facebook.png';
import twitterIcon from '../../assets/icons/twitter.png';
import instIcon from '../../assets/icons/instagram.png';

const Footer = () => {
  const { darkTheme } = useAuthContext();
  const navigate = useNavigate();

  return (
    <footer
      className={`bg-gradient-to-tr ${
        darkTheme
          ? 'from-[#303030] to-[#606060]'
          : 'from-[#ece7d7] to-light-green'
      }`}
    >
      <div className="w-[95%] md:w-[90%] max-w-7xl mx-auto">
        <div className="pt-16 pb-10 grid grid-cols-1 md:grid-cols-[2fr,_3fr] gap-8">
          {/* Intro */}
          <div>
            {/* Logo */}
            <div
              onClick={() => navigate('/')}
              className="mb-3 cursor-pointer flex items-center gap-0"
            >
              <h2 className="text-green text-xl font-bold">RunSphere</h2>
              <img className="h-8 relative right-1.5" src={logo} alt="" />
            </div>
            <p
              className={`max-w-80 text-sm font-medium text-justify ${
                darkTheme ? 'text-[#b0b0b0]' : 'text-[#09080F99]'
              }`}
            >
              RunSphere is a digital platform for joining, adding marathons and
              seeing details of marathons.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[2fr,_2fr,_3fr] gap-4">
            {/* Menu */}
            <div>
              <p
                className={`text-lg font-semibold mb-4 ${
                  darkTheme ? 'text-light2' : 'text-[#0e1513]'
                }`}
              >
                Menu
              </p>
              <ul
                className={`cursor-pointer ${
                  darkTheme ? 'text-[#bfbfbf]' : 'text-[#0e151399]'
                }`}
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/all_marathons">Marathons</Link>
                </li>
                <li>
                  <Link to="/signin">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Register</Link>
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <p
                className={`text-lg font-semibold mb-4 ${
                  darkTheme ? 'text-light2' : 'text-[#0e1513]'
                }`}
              >
                About Us
              </p>
              <ul
                className={`cursor-pointer ${
                  darkTheme ? 'text-[#bfbfbf]' : 'text-[#0e151399]'
                }`}
              >
                <li>About Us</li>
                <li>FAQ</li>
                <li>Help</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p
                className={`text-lg font-semibold mb-4 ${
                  darkTheme ? 'text-light2' : 'text-[#0e1513]'
                }`}
              >
                Contact Us
              </p>
              <p
                className={`mb-2 ${
                  darkTheme ? 'text-[#bfbfbf]' : 'text-[#0e151399]'
                }`}
              >
                House 12, Road 5, Dhanmondi, Dhaka
              </p>
              <p
                className={`mb-1 ${
                  darkTheme ? 'text-[#bfbfbf]' : 'text-[#0e151399]'
                }`}
              >
                run@sphere.com
              </p>

              {/* Social links */}
              <div className="mt-4 flex items-center gap-4">
                <button
                  onClick={() => window.open('https://facebook.com')}
                  className="rounded-md"
                >
                  <img className="w-6" src={fbIcon} alt="fb" />
                </button>
                <button
                  onClick={() => window.open('https://x.com')}
                  className="rounded-md"
                >
                  <img className="w-6" src={twitterIcon} alt="x" />
                </button>
                <button
                  onClick={() => window.open('https://instagram.com')}
                  className="rounded-md"
                >
                  <img className="w-6" src={instIcon} alt="instagram" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Border */}
      <div
        className={`border ${darkTheme ? 'border-[#252525]' : 'border-white'}`}
      ></div>

      {/* Copyright */}
      <div
        className={`w-[95%] max-w-[1280px] mx-auto py-6 flex justify-between ${
          darkTheme ? 'text-[#bfbfbf]' : 'text-[#0e151399]'
        }`}
      >
        <p>Copyright &copy; 2024. All Right Reserved.</p>

        <ul className="flex gap-6">
          <li>TErms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
