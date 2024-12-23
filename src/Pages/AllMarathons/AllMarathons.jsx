import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MainLayout from '../../Layouts/MainLayout';
import { useAuthContext } from '../../Hooks/useAuthContext';
import Marathon from './Marathon';
import SortMara from './SortMara';

const AllMarathons = () => {
  const [marathons, setMarathons] = useState([]);

  const { darkTheme, serverUrl } = useAuthContext();

  useEffect(() => {
    axios.get(`${serverUrl}/marathons`).then(res => setMarathons(res.data));
  }, [serverUrl]);

  const handleSort = sort => {
    axios
      .get(`${serverUrl}/marathons?sort=${sort}`)
      .then(res => setMarathons(res.data));
  };

  return (
    <div className="bg-greenBg py-16">
      <MainLayout>
        <section id="marathons">
          <h1
            className={`text-4xl leading-[44px] font-semibold mb-4 ${
              darkTheme ? 'text-light2' : 'text-dark'
            }`}
          >
            Explore All Marathons
          </h1>

          <SortMara handleSort={handleSort} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {marathons.map(marathon => (
              <Marathon key={marathon._id} marathon={marathon} />
            ))}
          </div>
        </section>
      </MainLayout>
    </div>
  );
};

export default AllMarathons;
