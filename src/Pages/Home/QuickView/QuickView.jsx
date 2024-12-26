import React from 'react';
import MainLayout from '../../../Layouts/MainLayout';

import eventIcon from '../../../assets/icons/event.png';
import locationIcon from '../../../assets/icons/mara_location.png';
import membersIcon from '../../../assets/icons/team.png';

const QuickView = () => {
  return (
    <div className="bg-greenBg">
      <MainLayout>
        <section className="py-8 grid grid-cols-3 gap-6">
          <div className="p-4 flex flex-col lg:flex-row items-center gap-4">
            <div className="bg-[#fd7d1453] p-4 rounded-full">
              <img className="max-w-16" src={eventIcon} alt="Volunteer" />
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-[#ffa238] text-2xl md:text-3xl font-bold text-gray-700 mb-1">
                009+
              </h3>
              <p className="text-gray font-medium">Marathon Events</p>
            </div>
          </div>

          <div className="p-4 flex flex-col lg:flex-row items-center gap-4">
            <div className="bg-[#fd7d1453] p-4 rounded-full">
              <img className="max-w-16" src={locationIcon} alt="Volunteer" />
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-[#ffa238] text-2xl md:text-3xl font-bold text-gray-700 mb-1">
                008+
              </h3>
              <p className="text-gray font-medium">Marathon Location</p>
            </div>
          </div>

          <div className="p-4 flex flex-col lg:flex-row items-center gap-4">
            <div className="bg-[#fd7d1453] p-4 rounded-full">
              <img className="max-w-16" src={membersIcon} alt="Volunteer" />
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-[#ffa238] text-2xl md:text-3xl font-bold text-gray-700 mb-1">
                004+
              </h3>
              <p className="text-gray font-medium">Active Members</p>
            </div>
          </div>
        </section>
      </MainLayout>
    </div>
  );
};

export default QuickView;
