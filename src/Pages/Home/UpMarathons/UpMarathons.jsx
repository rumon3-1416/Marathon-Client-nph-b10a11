import React, { useEffect, useState } from 'react';
import MainLayout from '../../../Layouts/MainLayout';
import axios from 'axios';
import { useAuthContext } from '../../../Hooks/useAuthContext';
import UpMaraCard from './UpMaraCard';

const UpMarathons = () => {
  const [upMarathons, setUpMarathons] = useState([]);

  const { serverUrl } = useAuthContext();

  useEffect(() => {
    axios
      .get(`${serverUrl}/up_marathons`)
      .then(res => res.data && setUpMarathons(res.data));
  }, [serverUrl]);

  return (
    <div className="bg-goldBg pt-16 pb-8">
      <MainLayout>
        <section id="marathons">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Upcoming Marathons
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {upMarathons.map(marathon => (
              <UpMaraCard key={marathon._id} marathon={marathon} />
            ))}
          </div>
        </section>
      </MainLayout>
    </div>
  );
};

export default UpMarathons;
