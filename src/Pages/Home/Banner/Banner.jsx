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
import { useAuthContext } from '../../../Hooks/useAuthContext';
import Loading from '../../../components/Loading/Loading';

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
      {slides?.length > 2 ? (
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
          {slides?.map((data, index) => (
            <SwiperSlide key={data._id}>
              <Slide data={data} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default Banner;
