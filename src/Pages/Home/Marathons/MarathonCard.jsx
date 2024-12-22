import React from 'react';

const MarathonCard = ({ marathon }) => {
  const {
    marathon_title: title,
    marathon_image: image,
    location,
    end_registration_date: date,
  } = marathon;

  return (
    <div className="bg-white rounded-2xl shadow-lg flex flex-col items-start">
      <div className="p-4">
        <img
          className="w-full aspect-[4/3] object-cover rounded-2xl"
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
            <span className="font-medium ms-2">{date?.split('T')[0]}</span>
          </p>
        </div>

        <button
          // onClick={handleDonate}
          className="bg-green text-white hover:bg-gold font-medium px-6 py-2.5 rounded-lg"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MarathonCard;
