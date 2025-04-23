import React, { useEffect, useState } from 'react';
import Container from '../../../Layouts/Container';
import axios from 'axios';
import { useAuthContext } from '../../../Hooks/useAuthContext';
import UpMaraCard from './UpMaraCard';

const UpMarathons = () => {
  const [upMarathons, setUpMarathons] = useState([]);

  const { serverUrl, darkTheme } = useAuthContext();

  useEffect(() => {
    axios
      .get(`${serverUrl}/up_marathons`)
      .then(res => res.data && setUpMarathons(res.data));
  }, [serverUrl]);

  return (
    <div id="upcoming" className="bg-greenBg pt-16 pb-10">
      <Container>
        <section id="marathons">
          <h1
            className={`text-4xl leading-[44px] font-semibold mb-4 ${
              darkTheme ? 'text-light2' : 'text-dark'
            }`}
          >
            Upcoming Marathons
          </h1>
          <p
            className={`text-lg max-w-[480px] mb-10 ${
              darkTheme ? 'text-gray-200' : 'text-[#32443f]'
            }`}
          >
            Elevate Your Runs with the Ultimate Community and be a member of
            Runs Sphere.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {upMarathons.map(marathon => (
              <UpMaraCard key={marathon._id} marathon={marathon} />
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default UpMarathons;
