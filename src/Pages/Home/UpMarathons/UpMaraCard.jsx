import React from 'react';

import clockIcon from '../../../assets/icons/clock.png';
import gpsIcon from '../../../assets/icons/location.png';
import { useAuthContext } from '../../../Hooks/useAuthContext';

const UpMaraCard = ({ marathon }) => {
  const {
    marathon_title: title,
    marathon_image: image,
    description,
    running_distance: distance,
    end_registration_date: date,
    location,
  } = marathon;

  const { darkTheme } = useAuthContext();

  return (
    <div
      className={`rounded-xl shadow-lg flex flex-col items-start ${
        darkTheme ? 'bg-dark5' : 'bg-white'
      }`}
    >
      <img
        className="w-full aspect-[4/3] object-cover rounded-xl mb-4"
        src={image}
        alt={title}
      />

      {/* Desc */}
      <div className="px-6 pb-8 grow flex flex-col items-start">
        <div className="grow">
          <div className="flex flex-wrap items-center gap-2">
            <div className="bg-[#28A74524] px-3 py-1 rounded-md inline-flex items-center gap-1">
              <img className="h-5" src={clockIcon} alt="time" />
              <p className="text-green">{date?.split('T')[0]}</p>
            </div>
            <div className="bg-[#ec932d24] px-3 py-1 rounded-md inline-flex items-center gap-1">
              <img className="h-5" src={gpsIcon} alt="time" />
              <p className="text-orange">{location}</p>
            </div>
          </div>

          <h4
            className={`text-xl font-semibold mt-3 mb-1 ${
              darkTheme ? 'text-light2' : ''
            }`}
          >
            {title}
          </h4>
          <p className={`font-medium ${darkTheme ? 'text-gray-300' : ''}`}>
            Distance{' '}
            <span
              className={`font-semibold ${
                darkTheme ? 'text-gray-200' : 'text-dark-green'
              }`}
            >
              {distance}
            </span>
          </p>
          <p
            className={`text-justify mt-3 ${
              darkTheme ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpMaraCard;
