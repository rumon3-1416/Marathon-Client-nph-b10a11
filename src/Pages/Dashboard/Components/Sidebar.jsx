import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import sidebarIcon from '../../../assets/icons/sidebar.png';
import addIcon from '../../../assets/icons/add.png';
import addGIcon from '../../../assets/icons/add-g.png';
import addedIcon from '../../../assets/icons/added.png';
import addedGIcon from '../../../assets/icons/added-g.png';
import applyIcon from '../../../assets/icons/apply.png';
import applyGIcon from '../../../assets/icons/apply-g.png';

const coll = window.innerWidth < 640 ? true : false;

const Sidebar = () => {
  const [collapse, setCollapse] = useState(coll);
  const { pathname } = useLocation();

  return (
    <div className="bg-[#DDF1E2] w-max max-h-[calc(100vh-96px)] sticky left-0 top-24">
      <div className="px-3 sm:px-6 pt-14 pb-8 relative">
        {/* Sidebar Button */}
        <button
          onClick={() => setCollapse(!collapse)}
          className="bg-[#DDF1E2] rounded-md shadow-md shadow-gray absolute top-3 -right-4"
        >
          <img className="w-8" src={sidebarIcon} alt="" />
        </button>

        {/* Sidebar Links */}
        <ul className="text-gray font-medium">
          <li>
            <NavLink
              className={`flex items-center gap-2 ${
                pathname === '/dashboard' && 'text-green font-semibold'
              }`}
              to="/dashboard"
            >
              <img
                className="w-6"
                src={pathname === '/dashboard' ? addGIcon : addIcon}
                alt=""
              />
              <span className={collapse ? 'hidden' : 'block'}>
                Add Marathon
              </span>
            </NavLink>
          </li>
          <li className="mt-5">
            <NavLink
              className={`flex items-center gap-2 ${
                pathname === '/dashboard/my_marathons' &&
                'text-green font-semibold'
              }`}
              to="/dashboard/my_marathons"
            >
              <img
                className="w-6"
                src={
                  pathname === '/dashboard/my_marathons'
                    ? addedGIcon
                    : addedIcon
                }
                alt=""
              />
              <span className={collapse ? 'hidden' : 'block'}>
                My Marathons
              </span>
            </NavLink>
          </li>
          <li className="mt-5">
            <NavLink
              className={`flex items-center gap-2 ${
                pathname === '/dashboard/my_apply' && 'text-green font-semibold'
              }`}
              to="/dashboard/my_apply"
            >
              <img
                className="w-6"
                src={
                  pathname === '/dashboard/my_apply' ? applyGIcon : applyIcon
                }
                alt=""
              />
              <span className={collapse ? 'hidden' : 'block'}>My Apply</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
