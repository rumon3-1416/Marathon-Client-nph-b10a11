import React from 'react';
import MainLayout from '../../Layouts/MainLayout';
import { Outlet } from 'react-router-dom';
import Sidebar from './Components/Sidebar';

const Dashboard = () => {
  return (
    <div className="bg-greenBg pb-16">
      <MainLayout>
        <div className="flex gap-20 md:gap-8">
          <Sidebar />

          <div className="pt-12 flex-grow overflow-x-hidden">
            <Outlet />
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Dashboard;
