import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuthContext } from '../../../Hooks/useAuthContext';

const SideLink = ({ sideLink, collapse }) => {
  const { id, title, link, icon } = sideLink;

  const { darkTheme } = useAuthContext();
  const { pathname } = useLocation();

  return (
    <li key={id}>
      <NavLink
        className={`text-nowrap px-2 py-2 rounded-md flex items-center gap-2 transition-colors duration-300 ${
          collapse ? '' : 'md:px-3'
        } ${
          pathname === link
            ? 'text-light2 bg-green/90'
            : `hover:text-light2 hover:bg-green ${
                darkTheme ? 'text-gray-200' : 'text-gray-900'
              }`
        }`}
        to={link}
      >
        <span className="text-xl">{icon}</span>
        <span className={`text-nowrap ${collapse ? 'hidden' : 'block'}`}>
          {title}
        </span>
      </NavLink>
    </li>
  );
};

export default SideLink;
