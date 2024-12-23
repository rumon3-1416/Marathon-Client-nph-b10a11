import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../Hooks/useAuthContext';
import MainLayout from '../../Layouts/MainLayout';
// import lightIcon from '../../assets/icons/light.png';
// import darkIcon from '../../assets/icons/dark.png';
import userIcon from '../../assets/icons/user.png';
import menuIcon from '../../assets/icons/menu.png';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isValidUrl, setIsValidUrl] = useState(false);

  const { user, darkTheme, signOutUser } = useAuthContext();
  const navigate = useNavigate();

  const img = new Image();
  img.src = user?.photoURL;
  img.onload = () => setIsValidUrl(true);
  img.onerror = () => setIsValidUrl(false);

  // const handleTheme = () => {
  //   document.body.style.backgroundColor = darkTheme ? '#f7f7f7' : '#303030';
  //   window.document.documentElement.classList.remove(
  //     'bg-[#f7f7f7]',
  //     'bg-dark3'
  //   );
  //   window.document.documentElement.classList.add(
  //     darkTheme ? 'bg-[#f7f7f7]' : 'bg-dark3'
  //   );
  //   setDarkTheme(!darkTheme);
  // };

  return (
    <div className="w-full fixed top-0 inset-x-0 z-10">
      <div
        className={`w-full backdrop-blur-md ${
          darkTheme ? 'bg-dark5Trans' : 'bg-[#28a74618]'
        }`}
      >
        <MainLayout>
          <nav
            className={`h-24 py-6 flex justify-between items-center gap-2 relative`}
          >
            <h2
              onClick={() => navigate('/')}
              className={`${
                darkTheme ? 'text-white' : 'text-black'
              } text-xl font-bold cursor-pointer`}
            >
              RunSphere
            </h2>

            <div className="flex items-center gap-6">
              <ul
                className={`text-white bg-greenTrans md:bg-transparent backdrop-blur-md md:backdrop-blur-none md:text-sm lg:text-base font-medium py-8 md:py-0 rounded-xl overflow-hidden md:flex flex-col md:flex-row items-center gap-4 md:gap-2 lg:gap-4 xl:gap-8 absolute md:static inset-x-0 top-24 md:top-0 z-20 ${
                  showNav ? 'flex' : 'hidden'
                }
            ${darkTheme ? 'md:text-lightTrans' : 'md:text-[#32443f]'}`}
              >
                <li className="hover:text-gold">
                  <NavLink to="/all_marathons">Marathons</NavLink>
                </li>
                {user ? (
                  <>
                    <li className="hover:text-gold">
                      <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li
                      onClick={() => signOutUser()}
                      className="hover:text-gold cursor-pointer sm:hidden"
                    >
                      Logout
                    </li>
                  </>
                ) : (
                  <>
                    <li className="hover:text-gold sm:hidden">
                      <NavLink to="/dashboard">Login</NavLink>
                    </li>
                    <li className="hover:text-gold sm:hidden">
                      <NavLink to="/dashboard">Register</NavLink>
                    </li>
                  </>
                )}
              </ul>

              <div className="flex items-center gap-3">
                {user ? (
                  <>
                    <button className="bg-transparent w-12 h-12 p-0.5 border-2 border-green rounded-full">
                      <img
                        className="w-full h-full object-cover rounded-full"
                        src={isValidUrl ? user.photoURL : userIcon}
                        alt=""
                      />
                    </button>
                    <button
                      onClick={() => signOutUser()}
                      className="text-green hover:text-gold text-lg font-medium px-4 sm:px-6 py-2 border-2 border-green hover:border-gold rounded-lg hidden sm:block"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <div className="hidden sm:flex items-center">
                    {/* Login */}
                    <button
                      onClick={() => navigate('/signin')}
                      className="text-green hover:text-gold text-sm sm:text-lg font-medium ps-3 sm:ps-6 lg:ps-8 pe-2 sm:pe-4 lg:pe-6 py-2 border-2 border-green hover:border-gold rounded-s-lg"
                    >
                      Login
                    </button>
                    {/* Register */}
                    <button
                      onClick={() => navigate('/signup')}
                      className="bg-green text-white hover:bg-gold2 text-sm sm:text-lg font-medium ps-2 sm:ps-4 lg:ps-6 pe-3 sm:pe-6 lg:pe-8 py-2  border-2 border-green hover:border-gold rounded-e-lg"
                    >
                      Register
                    </button>
                  </div>
                )}

                {/* Menubar */}
                <button
                  onClick={() => setShowNav(!showNav)}
                  className="p-2.5 border-2 border-green rounded-full sm:hidden"
                >
                  <img className="w-6" src={menuIcon} alt="menu" />
                </button>
              </div>
            </div>
          </nav>
        </MainLayout>
      </div>
    </div>
  );
};

export default Navbar;
