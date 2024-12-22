import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import './carousel.css';
import Slide from './Slide';
import MainLayout from '../../../Layouts/MainLayout';
import { useAuthContext } from '../../../Hooks/useAuthContext';

const Banner = () => {
  const [slides, setSlides] = useState([]);

  const { serverUrl } = useAuthContext();

  useEffect(() => {
    axios
      .get(`${serverUrl}/slides`)
      .then(res => res.data && setSlides(res.data));
  }, [serverUrl]);

  return (
    <section className="bg-greenBg">
      <MainLayout>
        {slides?.length >= 3 && (
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="mySwiper"
          >
            {slides?.map(data => (
              <SwiperSlide key={data._id}>
                <Slide data={data} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </MainLayout>
    </section>
  );
};

export default Banner;
