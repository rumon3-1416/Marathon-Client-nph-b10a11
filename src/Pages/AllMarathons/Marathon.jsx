import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../Hooks/useAuthContext';

const Marathon = ({ marathon }) => {
  const { _id, title, image, marathonDate, location, description } = marathon;

  const { darkTheme } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div
      className={`rounded-xl shadow-lg flex flex-col items-start ${
        darkTheme ? 'bg-dark5' : 'bg-white'
      }`}
    >
      <div className="w-full p-4">
        <img
          className="w-full aspect-[4/3] object-cover rounded-lg"
          src={image}
          alt={title}
        />
      </div>

      {/* Desc */}
      <div className="px-6 pb-8 grow flex flex-col items-start">
        <div className="grow">
          <h4
            className={`text-xl font-bold mb-3 ${
              darkTheme ? 'text-light2' : 'text-[#3c3c3c]'
            }`}
          >
            {title}
          </h4>

          <p
            className={`text-sm font-semibold flex justify-between gap-4 ${
              darkTheme ? 'text-gray-200' : 'text-[#464646]'
            }`}
          >
            <span>{location}</span>
            <span>{marathonDate?.split('T')[0]}</span>
          </p>
          <p
            className={`font-medium mt-2 text-justify ${
              darkTheme ? 'text-gray-300' : 'text-gray2'
            }`}
          >
            {description}
          </p>
        </div>

        <button
          onClick={() => navigate(`/marathon_details/${_id}`)}
          className="bg-green text-white hover:bg-gold2 font-medium px-6 py-2.5 mt-4 rounded-lg"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default Marathon;
