import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { IoIosMenu } from 'react-icons/io';

import { useAuthContext } from '../../Hooks/useAuthContext';
import Container from '../../Layouts/Container';
import logo from '../../assets/icons/logo.png';
import userIcon from '../../assets/icons/user.png';
import menuIcon from '../../assets/icons/menu.png';

const Navbar = () => {
  const [lastYScroll, setLastYScroll] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const { user, darkTheme, signOutUser, setDarkTheme } = useAuthContext();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleGoSection = secId => {
    if (pathname === '/') {
      scroller.scrollTo(secId, {
        smooth: true,
        duration: 500,
      });
    } else {
      navigate('/', { state: { scrollTo: secId } });
    }

    setShowMenu(false);
  };

  useEffect(() => {
    document.body.style.backgroundColor = darkTheme ? '#303030' : '#f7f7f7';
    window.document.documentElement.classList.add(
      darkTheme ? 'bg-dark3' : 'bg-[#f7f7f7]'
    );
    window.document.documentElement.classList.remove(
      darkTheme ? 'bg-[#f7f7f7]' : 'bg-dark3'
    );
  }, [darkTheme]);

  useEffect(() => {
    const handleNav = () => {
      const scrollY = window.scrollY;

      if (lastYScroll < scrollY) {
        setShowNav(false);
      } else if (lastYScroll > scrollY) {
        setShowNav(true);
      }

      setLastYScroll(scrollY);
    };

    document.addEventListener('scroll', handleNav);

    return () => document.removeEventListener('scroll', handleNav);
  }, [lastYScroll]);

  return pathname.includes('signin') || pathname.includes('signup') ? (
    <></>
  ) : (
    <div
      className={`w-full fixed top-0 inset-x-0 z-20 duration-300 ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div
        className={`w-full ${
          darkTheme ? 'bg-[#343434]' : 'bg-white'
        } shadow-lg`}
      >
        <Container>
          <nav
            className={`h-16 py-5a flex justify-between items-center gap-2 relative`}
          >
            {/* Logo */}
            <div
              onClick={() => navigate('/')}
              className="cursor-pointer flex items-center gap-0"
            >
              <h2
                className={`text-xl font-bold ${
                  darkTheme ? 'text-white' : 'text-gray-900'
                }`}
              >
                RunSphere
              </h2>
              <img className="h-8 relative right-1.5" src={logo} alt="" />
            </div>

            {/* Nav Menu */}
            <ul
              className={`md:bg-transparent backdrop-blur-md md:backdrop-blur-none md:text-sm lg:text-base font-medium md:h-fit md:py-0 rounded-b-xl shadow-lg md:shadow-none overflow-hidden flex flex-col md:flex-row items-center gap-4 md:gap-2 lg:gap-4 xl:gap-8 absolute md:static inset-x-0 top-16 md:top-0 z-30 transition-all duration-300 ${
                showMenu ? `${user ? 'h-60' : 'h-[17rem]'} py-6` : 'h-0'
              } ${
                darkTheme
                  ? 'text-light2 bg-[#343434]'
                  : 'text-gray-800 bg-white'
              }`}
            >
              <li
                onClick={() => setShowMenu(false)}
                className="hover:text-green transition-colors duration-300"
              >
                <NavLink to="/">Home</NavLink>
              </li>
              <li
                onClick={() => setShowMenu(false)}
                className="hover:text-green transition-colors duration-300"
              >
                <NavLink to="/all_marathons">Marathons</NavLink>
              </li>
              <li
                onClick={() => handleGoSection('upcoming')}
                className="hover:text-green transition-colors duration-300 cursor-pointer"
              >
                Upcoming
              </li>

              <li
                onClick={() => handleGoSection('help')}
                className="hover:text-green transition-colors duration-300 cursor-pointer"
              >
                Help
              </li>
              {user ? (
                <li
                  onClick={() => setShowMenu(false)}
                  className="hover:text-green transition-colors duration-300"
                >
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
              ) : (
                <>
                  <li
                    onClick={() => setShowMenu(false)}
                    className="hover:text-green transition-colors duration-300 md:hidden"
                  >
                    <NavLink to="/signin">Login</NavLink>
                  </li>
                  <li
                    onClick={() => setShowMenu(false)}
                    className="hover:text-green transition-colors duration-300 md:hidden"
                  >
                    <NavLink to="/signup">Register</NavLink>
                  </li>
                </>
              )}
            </ul>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                {/* Theme Button */}
                <button
                  onClick={() => {
                    localStorage.setItem('darkTheme', darkTheme ? '' : true);
                    setDarkTheme(!darkTheme);
                  }}
                  className={`text-2xl p-1 rounded-full ${
                    darkTheme
                      ? 'text-white bg-white/10'
                      : 'text-dark bg-black/10'
                  }`}
                >
                  {darkTheme ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
                </button>

                {user ? (
                  <div className="flex flex-col justify-center items-center relative group">
                    <button className="bg-transparent w-9 h-9 p-0.5 border-[1.5px] border-green rounded-full">
                      <img
                        className="w-full h-full object-cover rounded-full"
                        referrerPolicy="no-referrer"
                        src={user?.photoURL || userIcon}
                        alt=""
                      />
                    </button>

                    <div className="pt-10 absolute top-0 right-0 hidden group-hover:block">
                      <div
                        className={`w-24 h-12 border border-gray-300 rounded-md flex flex-col justify-center items-center ${
                          darkTheme ? 'bg-[#343434]' : 'bg-white'
                        }`}
                      >
                        <button
                          className={`text-sm font-medium hover:text-red-800 ${
                            darkTheme ? 'text-light2' : ''
                          }`}
                          onClick={signOutUser}
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="hidden md:flex items-center">
                    {/* Login */}
                    <button
                      onClick={() => navigate('/signin')}
                      className={`text-sm font-medium ps-3 sm:ps-6 lg:ps-8 pe-2 sm:pe-4 lg:pe-6 py-1.5 border-2 rounded-s-md ${
                        pathname === '/signin'
                          ? 'text-dark-green border-dark-green'
                          : 'text-green hover:text-dark-green border-green hover:border-dark-green'
                      }`}
                    >
                      Login
                    </button>
                    {/* Register */}
                    <button
                      onClick={() => navigate('/signup')}
                      className={`text-white text-sm font-medium ps-2 sm:ps-4 lg:ps-6 pe-3 sm:pe-6 lg:pe-8 py-1.5 border-2 rounded-e-md ${
                        pathname === '/signup'
                          ? 'bg-dark-green border-dark-green'
                          : 'bg-green hover:bg-dark-green border-green hover:border-dark-green'
                      }`}
                    >
                      Register
                    </button>
                  </div>
                )}

                {/* Menubar */}
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className={`text-2xl p-1 border-[1.5px] rounded-full md:hidden ${
                    darkTheme
                      ? 'text-light2 border-light2'
                      : 'text-gray-900 border-gray-800'
                  }`}
                >
                  <IoIosMenu />
                </button>
              </div>
            </div>
          </nav>
        </Container>
      </div>

      <div className="h-16"></div>
    </div>
  );
};

export default Navbar;
