import React from 'react';
import { useNavigate } from 'react-router-dom';

const MarathonCard = ({ marathon }) => {
  const { _id, title, image, description } = marathon;

  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-lg flex flex-col items-start">
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
          <h4 className="text-[#3c3c3c] text-xl font-bold mb-3">{title}</h4>

          <p className="text-gray font-medium">{description}</p>
        </div>

        <button
          onClick={() => navigate(`/marathon_details/${_id}`)}
          className="bg-green text-white hover:bg-gold2 font-medium px-6 py-2 mt-4 rounded-lg"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MarathonCard;
