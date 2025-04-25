import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Pages/Dashboard/Components/Sidebar';

const DashboardLayout = () => {
  return (
    <div className="bg-greenBg">
      <div className="w-full flex">
        <Sidebar />

        <div className="w-full">
          <div className="w-[95%] py-12 ps-16 md:ps-0 max-w-7xl mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
