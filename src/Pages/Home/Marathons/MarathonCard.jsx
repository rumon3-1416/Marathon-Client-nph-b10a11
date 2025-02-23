import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../Hooks/useAuthContext';

const MarathonCard = ({ marathon }) => {
  const { _id, title, image, description } = marathon;

  const { darkTheme } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div
      className={`rounded-xl shadow-lg flex flex-col items-start ${
        darkTheme ? 'bg-dark5' : 'bg-white'
      }`}
    >
      <div className="w-full p-3">
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
              darkTheme ? 'text-gray-200' : 'text-[#3c3c3c]'
            }`}
          >
            {title}
          </h4>

          <p
            className={`text-sm font-medium ${
              darkTheme ? 'text-gray-300' : 'text-gray2'
            }`}
          >
            {description}
          </p>
        </div>

        <button
          onClick={() => navigate(`/marathon_details/${_id}`)}
          className="bg-green text-white hover:bg-gold2 font-medium px-6 py-2 mt-4 rounded-lg transition-all duration-200"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MarathonCard;
