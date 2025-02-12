import React, { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { scroller } from 'react-scroll';

import Banner from './Banner/Banner';
// import QuickView from './QuickView/QuickView';
import Benefit from './Benefit/Benefit';
import Marathons from './Marathons/Marathons';
import UpMarathons from './UpMarathons/UpMarathons';
import QuesAns from './QuesAns/QuesAns';
import NewsLetter from './NewsLetter/NewsLetter';

const Home = () => {
  const { state } = useLocation();

  useEffect(() => {
    if (state?.scrollTo) {
      scroller.scrollTo(state.scrollTo, {
        smooth: true,
        duration: 500,
        delay: 200,
      });
    }
  }, [state]);

  useEffect(() => {
    document.title = 'Home | RunSphere';
  }, []);

  return (
    <>
      <Banner />
      {/* <QuickView /> */}
      <Benefit />
      <Marathons />
      <QuesAns />
      <UpMarathons />
      <NewsLetter />
    </>
  );
};

export default Home;
