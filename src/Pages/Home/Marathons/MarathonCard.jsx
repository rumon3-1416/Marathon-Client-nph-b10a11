import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../Hooks/useAuthContext';
import Button from '../../../components/Button';

const MarathonCard = ({ marathon }) => {
  const { _id, title, image, description } = marathon;

  const { darkTheme } = useAuthContext();
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
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
      <div className="w-full px-3 pb-5 grow flex flex-col items-start">
        <div className="grow">
          <h4
            className={`text-lg font-bold mb-2 ${
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

        <Button
          onClick={() => navigate(`/marathon_details/${_id}`)}
          className="mt-4 w-full"
        >
          See Details
        </Button>
      </div>
    </motion.div>
  );
};

export default MarathonCard;
