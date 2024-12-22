import React from 'react';
import Banner from './Banner/Banner';
import Benefit from './Benefit/Benefit';
import Marathons from './Marathons/Marathons';
import UpMarathons from './UpMarathons/UpMarathons';
import QuesAns from './QuesAns/QuesAns';

const Home = () => {
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
