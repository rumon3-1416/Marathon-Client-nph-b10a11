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

  const { user, darkTheme, serverUrl, signOutUser } = useAuthContext();
  const navigate = useNavigate();

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
    <div className="w-full fixed top-0 inset-x-0 z-20">
      <div
        className={`w-full backdrop-blur-lg ${
          darkTheme ? 'bg-dark5Trans' : 'bg-[#cfefd7a2]'
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
                className={`text-white bg-greenTrans sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none sm:text-sm lg:text-base font-medium py-8 sm:py-0 rounded-xl overflow-hidden sm:flex flex-col sm:flex-row items-center gap-4 sm:gap-2 lg:gap-4 xl:gap-8 absolute sm:static inset-x-0 top-24 sm:top-0 z-30 ${
                  showNav ? 'flex' : 'hidden'
                }
            ${darkTheme ? 'sm:text-lightTrans' : 'sm:text-[#32443f]'}`}
              >
                <li
                  onClick={() => setShowNav(false)}
                  className="hover:text-gold"
                >
                  <NavLink to="/all_marathons">Marathons</NavLink>
                </li>
                {user ? (
                  <>
                    <li
                      onClick={() => setShowNav(false)}
                      className="hover:text-gold"
                    >
                      <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li
                      onClick={() => {
                        signOutUser();
                        setShowNav(false);
                      }}
                      className="hover:text-gold cursor-pointer sm:hidden"
                    >
                      Logout
                    </li>
                  </>
                ) : (
                  <>
                    <li
                      onClick={() => setShowNav(false)}
                      className="hover:text-gold sm:hidden"
                    >
                      <NavLink to="/dashboard">Login</NavLink>
                    </li>
                    <li
                      onClick={() => setShowNav(false)}
                      className="hover:text-gold sm:hidden"
                    >
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
                        src={user?.photoURL || userIcon}
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
