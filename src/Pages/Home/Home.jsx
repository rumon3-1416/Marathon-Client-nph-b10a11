import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import Benefit from './Benefit/Benefit';
import Marathons from './Marathons/Marathons';
import UpMarathons from './UpMarathons/UpMarathons';
import QuesAns from './QuesAns/QuesAns';
import QuickView from './QuickView/QuickView';
import NewsLetter from './NewsLetter/NewsLetter';

const Home = () => {
  useEffect(() => {
    document.title = 'Home | RunSphere';
  }, []);

  return (
    <>
      <Banner />
      <QuickView />
      <Benefit />
      <Marathons />
      <QuesAns />
      <UpMarathons />
      <NewsLetter />
    </>
  );
};

export default Home;
