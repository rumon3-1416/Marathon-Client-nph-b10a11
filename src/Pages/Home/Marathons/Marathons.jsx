import React, { useState } from 'react';
import Container from '../../../Layouts/Container';
import axios from 'axios';
import { useAuthContext } from '../../../Hooks/useAuthContext';
import MarathonCard from './MarathonCard';

const Marathons = () => {
  const [marathons, setMarathons] = useState([]);

  const { serverUrl, darkTheme } = useAuthContext();

  useState(() => {
    axios
      .get(`${serverUrl}/marathons?limit=4`)
      .then(res => res.data && setMarathons(res.data));
  }, [serverUrl]);

  return (
    <div className="bg-greenBg pt-16 pb-10">
      <Container>
        <section id="marathons">
          <h1
            className={`text-4xl leading-[44px] font-semibold mb-4 ${
              darkTheme ? 'text-light2' : 'text-dark'
            }`}
          >
            Our Marathons
          </h1>
          <p
            className={`text-lg max-w-[480px] mb-10 ${
              darkTheme ? 'text-gray-200' : 'text-[#32443f]'
            }`}
          >
            Elevate Your Runs with the Ultimate Community and be a member of
            Runs Sphere.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {marathons.map(marathon => (
              <MarathonCard key={marathon._id} marathon={marathon} />
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Marathons;
