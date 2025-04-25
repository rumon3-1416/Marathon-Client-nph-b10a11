import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  MdDone,
  MdLogout,
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdOutlineDirectionsRun,
  MdOutlineCollectionsBookmark,
} from 'react-icons/md';
import { GoSidebarCollapse, GoSidebarExpand } from 'react-icons/go';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';

import logo from '../../../assets/icons/logo.png';
import { useAuthContext } from '../../../Hooks/useAuthContext';
import SideLink from './SideLink';

const sideLinks = [
  {
    id: '01',
    title: 'Add Marathon',
    link: '/dashboard',
    icon: <IoMdAddCircleOutline />,
  },
  {
    id: '02',
    title: 'My Marathons',
    link: '/dashboard/my_marathons',
    icon: <MdOutlineCollectionsBookmark />,
  },
  {
    id: '03',
    title: 'My Apply',
    link: '/dashboard/my_apply',
    icon: <MdDone />,
  },
];
const navLinks = [
  {
    id: '11',
    title: 'Home',
    link: '/',
    icon: <IoHomeOutline />,
  },
  {
    id: '12',
    title: 'Marathons',
    link: '/all_marathon',
    icon: <MdOutlineDirectionsRun />,
  },
];

const Sidebar = () => {
  const sideRef = useRef(null);
  const [collapse, setCollapse] = useState(false);
  const { darkTheme, signOutUser, setDarkTheme } = useAuthContext();

  const navigate = useNavigate();

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
    // Handle Resize Screen
    const handleResize = e => {
      e.target.innerWidth < 768 ? setCollapse(true) : setCollapse(false);
    };
    // Handle Outside Click
    const handleClick = e => {
      if (
        window.innerWidth < 768 &&
        sideRef.current &&
        !sideRef.current.contains(e.target)
      ) {
        setCollapse(true);
      }
    };

    window.innerWidth < 768 ? setCollapse(true) : setCollapse(false);

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  window.addEventListener('resize', e => {
    e.target.innerWidth < 768 && setCollapse(true);
  });

  return (
    <div className="min-h-screen max-h-screen sticky top-0 left-0 z-10">
      <div className="h-full relative">
        <div
          ref={sideRef}
          className={`h-full backdrop-blur-md absolute md:static transition-all duration-300 ${
            darkTheme
              ? 'bg-[#343434]/50 shadow-[4px_0_8px_#525252]'
              : 'bg-white/50 shadow-[4px_0_8px_#aaaaaa]'
          } ${collapse ? 'w-[3.75rem]' : 'w-52'}`}
        >
          <div
            className={`h-full ps-3 pt-3 relative ${
              collapse ? 'pe-3' : 'pe-5'
            }`}
          >
            {/* Sidebar Button */}
            <button
              onClick={() => setCollapse(!collapse)}
              className={`text-2xl p-1 rounded-md shadow-md shadow-gray-500 absolute top-[3.25rem] -right-4 transition-colors duration-300 ${
                darkTheme
                  ? 'bg-[#343434] text-light2 hover:bg-[#414141]'
                  : 'bg-light2 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {collapse ? <GoSidebarCollapse /> : <GoSidebarExpand />}
            </button>

            {/* Sidebar Head */}
            <div
              onClick={() => navigate('/')}
              className={`py-3 cursor-pointer flex items-center gap-1 ${
                collapse ? 'ps-2' : 'ps-0'
              }`}
            >
              <h2
                className={`text-xl font-bold ${
                  darkTheme ? 'text-white' : 'text-gray-900'
                } ${collapse ? 'hidden' : 'block'}`}
              >
                RunSphere
              </h2>
              <img className="h-8 relative right-1.5" src={logo} alt="" />
            </div>

            {/* Border */}
            <div className="border-t border-green"></div>

            {/* Sidebar Body Starts */}
            {/* Sidebar Links */}
            <ul className={`text-sm font-medium py-4 flex flex-col gap-1`}>
              {sideLinks.map(sideLink => (
                <SideLink
                  key={sideLink.id}
                  sideLink={sideLink}
                  collapse={collapse}
                />
              ))}
            </ul>
            {/* Sidebar Body Ends */}

            {/* Border */}
            <div className="border-t border-green"></div>

            {/* Nav Links */}
            <ul className={`text-sm font-medium py-4 flex flex-col gap-1`}>
              {navLinks.map(sideLink => (
                <SideLink
                  key={sideLink.id}
                  sideLink={sideLink}
                  collapse={collapse}
                />
              ))}
            </ul>

            {/* Border */}
            <div className="border-t border-green"></div>

            {/* Sidebar Foot */}
            <div
              className={`text-sm font-medium ps-3 py-4 flex flex-col gap-1 absolute bottom-0 inset-x-0 ${
                collapse ? 'pe-3' : 'pe-5'
              }`}
            >
              {/* Theme */}
              <button
                onClick={() => {
                  localStorage.setItem('darkTheme', darkTheme ? '' : true);
                  setDarkTheme(!darkTheme);
                }}
                className={`text-nowrap px-2 py-2 rounded-md flex items-center gap-2 transition-colors duration-300 ${
                  collapse ? '' : 'md:px-3'
                } ${
                  darkTheme
                    ? 'text-white hover:text-gray-800 hover:bg-white/90'
                    : 'text-dark hover:text-light2 hover:bg-[#414141]'
                }`}
              >
                <span className="text-xl">
                  {darkTheme ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
                </span>
                <span
                  className={`text-nowrap ${collapse ? 'hidden' : 'block'}`}
                >
                  {darkTheme ? 'Light Theme' : 'Dark Theme'}
                </span>
              </button>
              {/* Logout */}
              <button
                onClick={signOutUser}
                className={`hover:text-light2 hover:bg-orange text-nowrap px-2 py-2 rounded-md flex items-center gap-2 transition-colors duration-300 ${
                  collapse ? '' : 'md:px-3'
                } ${darkTheme ? 'text-white' : 'text-dark'}`}
              >
                <span className="text-xl">
                  <MdLogout />
                </span>
                <span
                  className={`text-nowrap ${collapse ? 'hidden' : 'block'}`}
                >
                  Log Out
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
