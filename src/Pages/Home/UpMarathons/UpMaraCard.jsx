import React from 'react';

import clockIcon from '../../../assets/icons/clock.png';
import gpsIcon from '../../../assets/icons/location.png';

const UpMaraCard = ({ marathon }) => {
  const {
    marathon_title: title,
    marathon_image: image,
    description,
    running_distance: distance,
    end_registration_date: date,
    location,
  } = marathon;

  return (
    <div className="bg-white rounded-2xl shadow-lg flex flex-col items-start">
      <img
        className="w-full aspect-[4/3] object-cover rounded-2xl mb-4"
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

          <h4 className="text-xl font-semibold mt-3 mb-1">{title}</h4>
          <p className="font-medium">
            Distance :{' '}
            <span className="text-dark-green font-semibold">{distance}</span>
          </p>
          <p className="text-gray-600 text-justify mt-3">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default UpMaraCard;
