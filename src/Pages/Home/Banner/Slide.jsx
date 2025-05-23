import React from 'react';
import { useNavigate } from 'react-router-dom';

const Slide = ({ data, index }) => {
  const { image, title, description, cta_text } = data;

  const navigate = useNavigate();

  return (
    <div className="relative">
      <img
        className="w-full aspect-[1/1] sm:aspect-[4/3] md:aspect-[2/1] object-cover"
        src={image}
        alt=""
      />

      <div className="bg-[#000000a0] w-full text-white text-center flex flex-col items-center justify-center absolute inset-0">
        <h2 className="max-w-[80%] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold lg:font-bold">
          {title}
        </h2>
        <p className="w-[80%] max-w-[796px] text-sm sm:text-md md:text-lg font-medium mt-4 mb-0 lg:mb-4">
          {description}
        </p>
        <button
          onClick={() => {
            if (index === 0) {
              navigate('/all_marathons');
            } else if (index === 1) {
              navigate('/dashboard');
            } else {
              document
                .getElementById('marathons')
                ?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="bg-green hover:bg-gold2 text-lg px-6 py-2 mt-6 rounded-md font-medium transition-colors duration-300"
        >
          {cta_text}
        </button>
      </div>
    </div>
  );
};

export default Slide;
