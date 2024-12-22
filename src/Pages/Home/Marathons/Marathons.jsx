import React, { useState } from 'react';
import MainLayout from '../../../Layouts/MainLayout';
import axios from 'axios';
import { useAuthContext } from '../../../Hooks/useAuthContext';
import MarathonCard from './MarathonCard';

const Marathons = () => {
  const [marathons, setMarathons] = useState([]);

  const { serverUrl } = useAuthContext();

  useState(() => {
    axios
      .get(`${serverUrl}/marathons?limit=6`)
      .then(res => res.data && setMarathons(res.data));
  }, []);

  return (
    <div className="bg-greenBg pt-16 pb-8">
      <MainLayout>
        <section id="marathons">
          <h2 className="max-w-[400px] text-3xl font-bold text-gray-800 mb-10">
            Our Marathons
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {marathons.map(marathon => (
              <MarathonCard key={marathon._id} marathon={marathon} />
            ))}
          </div>
        </section>
      </MainLayout>
    </div>
  );
};

export default Marathons;
