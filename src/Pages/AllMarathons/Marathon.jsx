import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../Hooks/useAuthContext';
import Button from '../../components/Button';

const Marathon = ({ marathon }) => {
  const { _id, title, image, marathonDate, location, description } = marathon;

  const { darkTheme } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div
      className={`rounded-md shadow-lg flex flex-col items-start ${
        darkTheme ? 'bg-dark5' : 'bg-white'
      }`}
    >
      <div className="w-full p-2">
        <img
          className="w-full aspect-[4/3] object-cover rounded-sm"
          src={image}
          alt={title}
        />
      </div>

      {/* Desc */}
      <div className="px-4 pb-6 grow flex flex-col items-start">
        <div className="grow">
          <h4
            className={`text-lg font-bold mb-3 ${
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
            className={`text-sm font-medium mt-2 ${
              darkTheme ? 'text-gray-300' : 'text-gray2'
            }`}
          >
            {description}
          </p>
        </div>

        <Button
          onClick={() => navigate(`/marathon_details/${_id}`)}
          className="mt-4"
        >
          See Details
        </Button>
      </div>
    </div>
  );
};

export default Marathon;
