import React from 'react';
import MainLayout from '../../../Layouts/MainLayout';
import { useAuthContext } from '../../../Hooks/useAuthContext';
import trainIcon from '../../../assets/icons/training.png';
import facilitiesIcon from '../../../assets/icons/facilities.png';

const Benefit = () => {
  const { darkTheme } = useAuthContext;

  return (
    <section className="bg-goldBg pt-16 pb-10">
      <MainLayout>
        <div className="grid md:grid-cols-2 items-center">
          {/* Images */}
          <div className="py-6 ps-4 pe-8">
            <img
              className="aspect-square object-cover mx-auto rounded-xl"
              src="https://media.istockphoto.com/id/119397520/photo/jogging.jpg?s=612x612&w=0&k=20&c=vv86O3EPbf0bA0B6MLl_LOtJ3Sz6tYqDIhoyfdgWJWw="
              alt=""
            />
          </div>

          {/* Description */}
          <div className="p-8">
            <h1
              className={`text-4xl leading-[44px] font-semibold mb-6 ${
                darkTheme ? 'text-light2' : 'text-dark'
              }`}
            >
              Every Step Takes You Closer To Glory.
            </h1>
            <p
              className={`text-lg mt-6 ${
                darkTheme ? 'text-gray-200' : 'text-[#32443f]'
              }`}
            >
              Elevate Your Runs with the Ultimate Community and be a member of
              Runs Sphere.
            </p>

            {/* Training */}
            <div className="mt-12 flex items-start gap-4">
              <div className="bg-[#FFC10758] size-12 min-w-12 min-h-12 p-2.5 rounded-full flex justify-center items-center">
                <img className="w-full" src={trainIcon} alt="training" />
              </div>
              <div>
                <h5
                  className={`text-lg font-semibold ${
                    darkTheme && 'text-light2'
                  }`}
                >
                  Run Training
                </h5>
                <p
                  className={`text-justify ${
                    darkTheme ? 'text-gray-300' : 'text-[#32443f]'
                  }`}
                >
                  Be a member and Elevate Your Runs with the Ultimate Community.
                </p>
              </div>
            </div>

            {/* Facilities */}
            <div className="mt-10 flex items-start gap-4">
              <div className="bg-[#28A74551] size-12 min-w-12 min-h-12 p-3 rounded-full flex justify-center items-center">
                <img className="h-full" src={facilitiesIcon} alt="Facilities" />
              </div>
              <div>
                <h5
                  className={`text-lg font-semibold ${
                    darkTheme && 'text-light2'
                  }`}
                >
                  Facilities
                </h5>
                <p
                  className={`text-justify ${
                    darkTheme ? 'text-gray-300' : 'text-[#32443f]'
                  }`}
                >
                  Elevate Your Runs with the Ultimate Community and be a member.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </section>
  );
};

export default Benefit;
