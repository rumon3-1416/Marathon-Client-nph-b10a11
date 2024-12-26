import React from 'react';
import MainLayout from '../../../Layouts/MainLayout';

const NewsLetter = () => {
  return (
    <div className="bg-goldBg py-20">
      <MainLayout>
        <div className="px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-dark-green text-2xl font-semibold mb-2">
              Join Our Newsletter
            </h2>
            <p className="text-gray font-medium max-w-[440px]">
              Push your email and be part of a vibrant community of runners.
              Subscribe now for an unforgettable journey.
            </p>
          </div>

          <div className="flex items-center">
            <input
              className="w-[10rem] sm:w-[15rem] md:w-[10rem] lg:w-[15rem] xl:w-[20rem] px-6 py-3 border-2 border-green outline-none rounded-s-xl"
              type="text"
              name="subscribe"
              id="subscribe"
              placeholder="Email"
            />
            <button className="bg-green text-white font-semibold px-6 py-3 border-2 border-green rounded-e-xl">
              Subscribe
            </button>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default NewsLetter;
