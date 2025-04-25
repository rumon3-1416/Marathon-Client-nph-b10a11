import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const SideLink = ({ sideLink, collapse }) => {
  const { id, title, link, icon } = sideLink;

  const { pathname } = useLocation();

  return (
    <li key={id}>
      <NavLink
        className={`px-3 py-2 rounded-md flex items-center gap-2 ${
          pathname === link
            ? 'text-light2 bg-green'
            : 'text-gray-900 hover:text-light2 hover:bg-green'
        }`}
        to={link}
      >
        <span className="text-xl">{icon}</span>
        <span className={collapse ? 'hidden' : 'block'}>{title}</span>
      </NavLink>
    </li>
  );
};

export default SideLink;
