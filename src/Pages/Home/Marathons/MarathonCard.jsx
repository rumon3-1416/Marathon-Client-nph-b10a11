import React from 'react';
import { useNavigate } from 'react-router-dom';

const MarathonCard = ({ marathon }) => {
  const { _id, title, image, location, endDate } = marathon;
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-lg flex flex-col items-start">
      <div className="w-full p-4">
        <img
          className="w-full aspect-[4/3] object-cover rounded-xl"
          src={image}
          alt={title}
        />
      </div>

      {/* Desc */}
      <div className="px-6 pb-8 grow flex flex-col items-start">
        <div className="grow">
          <h4 className="text-xl font-semibold mb-3">{title}</h4>

          <p className="flex flex-wrap items-center">
            <span className="text-dark-green font-medium">Location :</span>
            <span className="font-medium ms-2">{location}</span>
          </p>
          <p className="mb-4 flex flex-wrap items-center">
            <span className="text-dark-green font-medium">
              Registration Ends :
            </span>
            <span className="font-medium ms-2">{endDate?.split('T')[0]}</span>
          </p>
        </div>

        <button
          onClick={() => navigate(`/marathon_details/${_id}`)}
          className="bg-green text-white hover:bg-gold2 font-medium px-6 py-2.5 rounded-lg"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MarathonCard;
