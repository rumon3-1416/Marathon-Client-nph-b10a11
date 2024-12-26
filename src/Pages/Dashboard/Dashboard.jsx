import React from 'react';
import MainLayout from '../../Layouts/MainLayout';
import { Outlet } from 'react-router-dom';
import Sidebar from './Components/Sidebar';

const Dashboard = () => {
  return (
    <div className="bg-greenBg pb-16">
      <div className="w-full sm:w-[95%] max-w-7xl mx-auto">
        <div className="flex gap-16 md:gap-8">
          <Sidebar />

          <div className="pt-12 pe-4 sm:pe-0 flex-grow overflow-x-hidden">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
