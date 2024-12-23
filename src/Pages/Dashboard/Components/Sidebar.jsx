import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import sidebarIcon from '../../../assets/icons/sidebar.png';
import addIcon from '../../../assets/icons/add.png';
import addGIcon from '../../../assets/icons/add-g.png';
import addedIcon from '../../../assets/icons/added.png';
import addedGIcon from '../../../assets/icons/added-g.png';
import applyIcon from '../../../assets/icons/apply.png';
import applyGIcon from '../../../assets/icons/apply-g.png';

const Sidebar = () => {
  const [collapse, setCollapse] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.innerWidth < 640 ? setCollapse(true) : setCollapse(false);
  }, []);
  window.addEventListener('resize', e => {
    e.target.innerWidth < 640 ? setCollapse(true) : setCollapse(false);
  });

  return (
    <div className="max-h-[calc(100vh-96px)] sticky top-24 left-0 z-10">
      <div className="h-full relative">
        <div
          className={
            'bg-[#28a74628] backdrop-blur-md w-max h-full absolute sm:static'
          }
        >
          <div className="ps-3 pe-3.5 sm:ps-6 sm:pe-7 pt-20 pb-8 relative">
            {/* Sidebar Button */}
            <button
              onClick={() => setCollapse(!collapse)}
              className="bg-[#DDF1E2] rounded-md shadow-md shadow-gray absolute top-6 -right-4"
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
                    pathname === '/dashboard/my_apply' &&
                    'text-green font-semibold'
                  }`}
                  to="/dashboard/my_apply"
                >
                  <img
                    className="w-6"
                    src={
                      pathname === '/dashboard/my_apply'
                        ? applyGIcon
                        : applyIcon
                    }
                    alt=""
                  />
                  <span className={collapse ? 'hidden' : 'block'}>
                    My Apply
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
