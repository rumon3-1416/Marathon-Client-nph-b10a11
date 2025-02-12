import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import sidebarIcon from '../../../assets/icons/sidebar.png';
import addIcon from '../../../assets/icons/add.png';
import addGIcon from '../../../assets/icons/add-g.png';
import addedIcon from '../../../assets/icons/added.png';
import addedGIcon from '../../../assets/icons/added-g.png';
import applyIcon from '../../../assets/icons/apply.png';
import applyGIcon from '../../../assets/icons/apply-g.png';
import { useAuthContext } from '../../../Hooks/useAuthContext';

const Sidebar = () => {
  const [collapse, setCollapse] = useState(false);
  const { darkTheme } = useAuthContext();
  const { pathname } = useLocation();

  useEffect(() => {
    window.innerWidth < 768 ? setCollapse(true) : setCollapse(false);
  }, []);

  window.addEventListener('resize', e => {
    e.target.innerWidth < 768 && setCollapse(true);
  });

  return (
    <div className="min-h-[13.5rem] max-h-[calc(100vh-96px)] sticky top-20 left-0 z-10">
      <div className="h-full relative">
        <div
          className={`backdrop-blur-md w-max h-full absolute md:static ${
            darkTheme ? 'bg-dark5Trans' : 'bg-[#3db05828]'
          }`}
        >
          <div
            className={`ps-3 md:ps-6 pt-20 pb-8 relative ${
              collapse ? 'pe-3.5 md:pe-6' : 'pe-6 md:pe-8'
            }`}
          >
            {/* Sidebar Button */}
            <button
              onClick={() => setCollapse(!collapse)}
              className={`rounded-md shadow-md shadow-gray2 absolute top-6 -right-4 ${
                darkTheme ? 'bg-gray-600' : 'bg-[#DDF1E2]'
              }`}
            >
              <img className="w-8" src={sidebarIcon} alt="" />
            </button>

            {/* Sidebar Links */}
            <ul
              className={`font-medium ${
                darkTheme ? 'text-gray-200' : 'text-gray2'
              }`}
            >
              <li>
                <NavLink
                  className={`flex items-center gap-2 ${
                    pathname === '/dashboard' && 'text-green font-semibold'
                  }`}
                  to="."
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
                  to="my_marathons"
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
                  to="my_apply"
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
