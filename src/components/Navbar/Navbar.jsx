import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

import { useAuthContext } from '../../Hooks/useAuthContext';
import MainLayout from '../../Layouts/MainLayout';
import logo from '../../assets/icons/logo.png';
import userIcon from '../../assets/icons/user.png';
import menuIcon from '../../assets/icons/menu.png';

const Navbar = () => {
  const [lastYScroll, setLastYScroll] = useState(0);
  const [showNav, setShowNav] = useState(false);
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

  return (
    <div
      className={`w-full fixed top-0 inset-x-0 z-20 duration-300 ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div
        className={`w-full backdrop-blur-lg ${
          darkTheme ? 'bg-dark5Trans' : 'bg-[#f0fffeb7]'
        } shadow-lg`}
      >
        <MainLayout>
          <nav
            className={`h-20 py-5 flex justify-between items-center gap-2 relative`}
          >
            {/* Logo */}
            <div
              onClick={() => navigate('/')}
              className="cursor-pointer flex items-center gap-0"
            >
              <h2 className="text-green text-xl font-bold">RunSphere</h2>
              <img className="h-8 relative right-1.5" src={logo} alt="" />
            </div>

            <ul
              className={`md:bg-transparent backdrop-blur-md md:backdrop-blur-none md:text-sm lg:text-base font-medium md:h-fit md:py-0 rounded-b-xl shadow-lg md:shadow-none overflow-hidden flex flex-col md:flex-row items-center gap-4 md:gap-2 lg:gap-4 xl:gap-8 absolute md:static inset-x-0 top-20 md:top-0 z-30 transition-all duration-300 ${
                showMenu ? 'h-72 py-8' : 'h-0'
              } ${
                darkTheme
                  ? 'text-light2 bg-[#464646f6]'
                  : 'text-[#32443f] bg-[#cfead7f7]'
              }`}
            >
              <li
                onClick={() => setShowMenu(false)}
                className="hover:text-gold"
              >
                <NavLink to="/">Home</NavLink>
              </li>
              <li
                onClick={() => setShowMenu(false)}
                className="hover:text-gold"
              >
                <NavLink to="/all_marathons">Marathons</NavLink>
              </li>
              <li
                onClick={() => handleGoSection('upcoming')}
                className="hover:text-gold cursor-pointer"
              >
                Upcoming
              </li>

              <li
                onClick={() => handleGoSection('help')}
                className="hover:text-gold cursor-pointer"
              >
                Help
              </li>
              {user ? (
                <>
                  <li
                    onClick={() => setShowMenu(false)}
                    className="hover:text-gold"
                  >
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </li>
                  <li
                    onClick={() => {
                      signOutUser();
                      setShowMenu(false);
                    }}
                    className="hover:text-gold cursor-pointer md:hidden"
                  >
                    Logout
                  </li>
                </>
              ) : (
                <>
                  <li
                    onClick={() => setShowMenu(false)}
                    className="hover:text-gold md:hidden"
                  >
                    <NavLink to="/signin">Login</NavLink>
                  </li>
                  <li
                    onClick={() => setShowMenu(false)}
                    className="hover:text-gold md:hidden"
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
                  className={`text-3xl ${
                    darkTheme ? 'text-white' : 'text-dark'
                  }`}
                >
                  {darkTheme ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
                </button>

                {user ? (
                  <>
                    <button className="bg-transparent w-12 h-12 p-0.5 border-2 border-green rounded-full cursor-default">
                      <img
                        className="w-full h-full object-cover rounded-full"
                        referrerPolicy="no-referrer"
                        src={user?.photoURL || userIcon}
                        alt=""
                      />
                    </button>
                    <button
                      onClick={() => signOutUser()}
                      className="text-green hover:text-gold2 font-medium sm:px-4 lg:px-6 py-2 border-2 border-green hover:border-gold2 rounded-lg hidden md:block"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <div className="hidden md:flex items-center">
                    {/* Login */}
                    <button
                      onClick={() => navigate('/signin')}
                      className={`text-sm sm:text-base font-medium ps-3 sm:ps-6 lg:ps-8 pe-2 sm:pe-4 lg:pe-6 py-2 border-2 rounded-s-lg ${
                        pathname === '/signin'
                          ? 'text-gold2 border-gold2'
                          : 'text-green hover:text-gold2 border-green hover:border-gold2'
                      }`}
                    >
                      Login
                    </button>
                    {/* Register */}
                    <button
                      onClick={() => navigate('/signup')}
                      className={`text-white text-sm sm:text-base font-medium ps-2 sm:ps-4 lg:ps-6 pe-3 sm:pe-6 lg:pe-8 py-2  border-2 rounded-e-lg ${
                        pathname === '/signup'
                          ? 'bg-gold2 border-gold2'
                          : 'bg-green hover:bg-gold2 border-green hover:border-gold2'
                      }`}
                    >
                      Register
                    </button>
                  </div>
                )}

                {/* Menubar */}
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="p-2.5 border-2 border-green rounded-full md:hidden"
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
