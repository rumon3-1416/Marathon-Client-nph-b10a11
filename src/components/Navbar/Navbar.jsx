import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import useAuthContext from '../../Hooks/useAuthContext';
import MainLayout from '../../Layouts/MainLayout';
import lightIcon from '../../assets/icons/light.png';
import darkIcon from '../../assets/icons/dark.png';
import userIcon from '../../assets/icons/user.png';
import menuIcon from '../../assets/icons/menu.png';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isValidUrl, setIsValidUrl] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const { user, darkTheme, setDarkTheme } = useAuthContext();
  const navigate = useNavigate();

  const img = new Image();
  img.src = user?.photoURL;
  img.onload = () => setIsValidUrl(true);
  img.onerror = () => setIsValidUrl(false);

  const handleTheme = () => {
    document.body.style.backgroundColor = darkTheme ? '#f7f7f7' : '#303030';
    window.document.documentElement.classList.add(
      darkTheme ? 'bg-[#f7f7f7]' : 'bg-dark3'
    );
    setDarkTheme(!darkTheme);
  };

  return (
    <div className="w-full fixed top-0 inset-x-0 z-10">
      <div
        className={`w-full backdrop-blur-md ${
          darkTheme ? 'bg-dark5Trans' : 'bg-[#f0fffeb7]'
        }`}
      >
        <MainLayout>
          <nav
            className={`py-6 flex justify-between items-center gap-2 relative`}
          >
            <h2
              onClick={() => navigate('/')}
              className={`${
                darkTheme ? 'text-white' : 'text-black'
              } text-xl font-bold cursor-pointer`}
            >
              CrowdCube
            </h2>

            <ul
              className={`text-white bg-tealTrans md:bg-transparent backdrop-blur-md md:backdrop-blur-none md:text-sm lg:text-base font-medium py-8 md:py-0 rounded-xl overflow-hidden md:flex flex-col md:flex-row items-center gap-4 md:gap-2 lg:gap-4 xl:gap-8 absolute md:static inset-x-0 top-24 md:top-0 z-20 ${
                showNav ? 'flex' : 'hidden'
              }
            ${darkTheme ? 'md:text-lightTrans' : 'md:text-[#32443f]'}`}
            >
              <li
                onClick={() => setShowNav(false)}
                className="hover:text-coral2"
              >
                <NavLink to="/">Home</NavLink>
              </li>
              <li
                onClick={() => setShowNav(false)}
                className="hover:text-coral2"
              >
                <NavLink to="/all_campaigns">Campaigns</NavLink>
              </li>
              <li
                onClick={() => setShowNav(false)}
                className="hover:text-coral2 text-nowrap"
              >
                <NavLink to="/add_campaign">Add Campaign</NavLink>
              </li>
              <li
                onClick={() => setShowNav(false)}
                className="hover:text-coral2 text-nowrap"
              >
                <NavLink to="/my_campaigns">My Campaign</NavLink>
              </li>
              <li
                onClick={() => setShowNav(false)}
                className="hover:text-coral2 text-nowrap"
              >
                <NavLink to="/my_donations">My Donation</NavLink>
              </li>
              {!user && (
                <li
                  onClick={() => setShowNav(false)}
                  className="hover:text-coral2 text-nowrap md:hidden"
                >
                  <NavLink to="/signup">Register</NavLink>
                </li>
              )}
            </ul>

            <div className="flex items-center gap-2 lg:gap-3 relative">
              {/* Theme Button */}
              <button
                onClick={handleTheme}
                className="bg-transparent w-12 h-12 p-2.5 rounded-full outline-none"
              >
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={darkTheme ? lightIcon : darkIcon}
                  alt=""
                />
              </button>

              {user ? (
                <>
                  <button
                    onMouseOver={() => setShowProfile(true)}
                    onMouseOut={() => setShowProfile(false)}
                    className="bg-transparent w-12 h-12 p-0.5 border-2 border-teal rounded-full"
                  >
                    <img
                      className="w-full h-full object-cover rounded-full"
                      src={isValidUrl ? user.photoURL : userIcon}
                      alt=""
                    />
                  </button>

                  {/* Profile Info */}
                  <div
                    onMouseOver={() => setShowProfile(true)}
                    onMouseOut={() => setShowProfile(false)}
                    className={`p-2 top-10 right-2 absolute ${
                      showProfile ? 'block' : 'hidden'
                    }`}
                  >
                    <div
                      className={`text-center p-4 pb-5 rounded-lg shadow-md shadow-[#7b7b7b] ${
                        darkTheme
                          ? 'bg-dark4 text-light2'
                          : 'bg-light2 text-dark'
                      }`}
                    >
                      <h2 className="font-semibold text-nowrap">
                        {user.displayName}
                      </h2>
                      <button className="text-teal hover:text-coral2 font-medium text-nowrap px-3 py-1 mt-3 border-2 border-teal hover:border-coral2 rounded-full">
                        Log Out
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* User */}
                  <button
                    onClick={() => navigate('/signin')}
                    className={`${
                      darkTheme ? 'bg-dark3' : 'bg-light2'
                    } w-12 h-12 p-0.5 border-2 border-teal rounded-full lg:hidden`}
                  >
                    <img
                      className="w-full h-full object-cover rounded-full"
                      src={userIcon}
                      alt="profile"
                    />
                  </button>

                  <div className="hidden lg:flex items-center">
                    {/* Login */}
                    <button
                      onClick={() => navigate('/signin')}
                      className="text-teal hover:text-coral2 text-lg font-medium ps-5 xl:ps-9 pe-1.5 xl:pe-5 py-2 border-2 border-teal hover:border-coral3 rounded-s-full"
                    >
                      Login
                    </button>
                    {/* Register */}
                    <button
                      onClick={() => navigate('/signup')}
                      className="bg-teal text-white hover:bg-coral2 text-lg font-medium ps-1.5 xl:ps-5 pe-5 xl:pe-9 py-2  border-2 border-teal hover:border-coral3 rounded-e-full"
                    >
                      Register
                    </button>
                  </div>
                </>
              )}

              {/* Menubar */}
              <button
                onClick={() => setShowNav(!showNav)}
                className="p-2.5 border-2 border-teal rounded-full md:hidden"
              >
                <img className="w-6" src={menuIcon} alt="menu" />
              </button>
            </div>
          </nav>
        </MainLayout>
      </div>
    </div>
  );
};

export default Navbar;
