import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import Benefit from './Benefit/Benefit';
import Marathons from './Marathons/Marathons';
import UpMarathons from './UpMarathons/UpMarathons';
import QuesAns from './QuesAns/QuesAns';

const Home = () => {
  useEffect(() => {
    document.title = 'Home | RunSphere';
  }, []);

  return (
    <>
      <Banner />
      <Benefit />
      <Marathons />
      <QuesAns />
      <UpMarathons />
    </>
  );
};

export default Home;
