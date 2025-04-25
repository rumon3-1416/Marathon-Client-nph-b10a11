import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  MdDone,
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
  const [collapse, setCollapse] = useState(false);
  const { darkTheme, signOutUser, setDarkTheme } = useAuthContext();

  const { pathname } = useLocation();
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
    window.innerWidth < 768 ? setCollapse(true) : setCollapse(false);
  }, []);

  window.addEventListener('resize', e => {
    e.target.innerWidth < 768 && setCollapse(true);
  });

  return (
    <div className="min-h-screen max-h-screen sticky top-0 left-0 z-10">
      <div className="h-full relative">
        <div
          className={`backdrop-blur-md w-max h-full absolute md:static ${
            darkTheme
              ? 'bg-[#343434]/50 shadow-[4px_0_8px_#525252]'
              : 'bg-white/50 shadow-[4px_0_8px_#aaaaaa]'
          }`}
        >
          <div className={`ps-3 pt-3 relative ${collapse ? 'pe-3' : 'pe-3'}`}>
            {/* Sidebar Button */}
            <button
              onClick={() => setCollapse(!collapse)}
              className={`text-2xl p-1 rounded-md shadow-md shadow-gray-500 absolute top-[3.25rem] -right-4 ${
                darkTheme
                  ? 'bg-[#414141] text-light2'
                  : 'bg-light2 text-gray-800'
              }`}
            >
              {collapse ? <GoSidebarCollapse /> : <GoSidebarExpand />}
            </button>

            {/* Logo */}
            <div
              onClick={() => navigate('/')}
              className="py-3 border-b border-green cursor-pointer flex items-center gap-1"
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

            {/* Sidebar Links */}
            <ul
              className={`text-sm font-medium py-4 border-b border-green flex flex-col gap-1`}
            >
              {sideLinks.map(sideLink => (
                <SideLink
                  key={sideLink.id}
                  sideLink={sideLink}
                  collapse={collapse}
                />
              ))}
            </ul>

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

            {/* Sidebar Foot */}
            <div className="flex flex-col fixed bottom-0 inset-x-0">
              <button
                onClick={() => {
                  localStorage.setItem('darkTheme', darkTheme ? '' : true);
                  setDarkTheme(!darkTheme);
                }}
                className={`text-2xl p-1 rounded-full ${
                  darkTheme ? 'text-white bg-white/10' : 'text-dark bg-black/10'
                }`}
              >
                {darkTheme ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
              </button>
              <button onClick={signOutUser} className="text-light2 bg-green">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
