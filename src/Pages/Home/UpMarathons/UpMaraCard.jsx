import React from 'react';

const UpMaraCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg flex flex-col items-start">
      <img
        className="w-full aspect-[4/3] object-cover rounded-2xl"
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

          <h4 className="text-xl font-semibold mt-3">{title}</h4>

          <p className="text-gray-600 mt-2 mb-4">
            {description?.slice(0, 60)}...
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

export default UpMaraCard;
