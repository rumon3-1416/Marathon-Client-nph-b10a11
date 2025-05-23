import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useAuthContext } from '../../Hooks/useAuthContext';
import Container from '../../Layouts/Container';
import Modal from '../../components/Modal/Modal';
import Timer from './Timer';

const MarathonDetails = () => {
  const [marathon, setMarathon] = useState({});
  const [modal, setModal] = useState({
    show: false,
    res: '',
    title: '',
  });

  const {
    _id,
    title,
    location,
    distance,
    image,
    description,
    endDate,
    marathonDate,
    register_count,
  } = marathon;

  const { serverUrl, darkTheme } = useAuthContext();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    document.title = 'Details Marathon | RunSphere';

    axiosSecure
      .get(`${serverUrl}/marathon/${id}`)
      .then(res => setMarathon(res.data));
  }, [axiosSecure, serverUrl, id]);

  const handleRegister = () => {
    if (
      new Date(endDate) >= new Date() &&
      new Date(marathonDate) >= new Date()
    ) {
      navigate(`/register_marathon/${_id}`);
    } else {
      setModal({ show: true, res: 'error', title: 'Deadline has Passed!' });
    }
  };

  return (
    <div className="bg-greenBg pt-24 pb-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {' '}
          <div
            className={`p-6 shadow-lg rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8 ${
              darkTheme ? 'bg-dark5' : 'bg-white'
            }`}
          >
            <img
              className="
        w-full aspect-video md:aspect-square lg:aspect-[4/3] xl:aspect-video object-cover rounded-lg"
              src={image}
              alt={title}
            />
            {/* Description */}
            <div className="flex flex-col justify-between items-start">
              {endDate && <Timer date={endDate} />}

              <div>
                {/* Head */}
                <h2
                  className={`text-2xl font-bold mb-4 ${
                    darkTheme ? 'text-light2' : 'text-gray-800'
                  }`}
                >
                  {title}
                </h2>
                <p
                  className={`${
                    darkTheme ? 'text-gray-300' : 'text-gray-600'
                  } mb-6`}
                >
                  {description}
                </p>

                {/* Info */}
                {/* Distance */}
                <p
                  className={`${
                    darkTheme ? 'text-gray-200' : 'text-gray-700'
                  } mb-1.5`}
                >
                  Running Distance :{' '}
                  <span className="font-semibold">{distance}</span>
                </p>
                {/* Marathon date */}
                <p
                  className={`${
                    darkTheme ? 'text-gray-200' : 'text-gray-700'
                  } mb-1.5`}
                >
                  Marathon Date :{' '}
                  <span className="font-semibold">
                    {marathonDate?.split('T')[0]}
                  </span>
                </p>
                {/* End */}
                <p
                  className={`${
                    darkTheme ? 'text-gray-200' : 'text-gray-700'
                  } mb-1.5`}
                >
                  Registration End :{' '}
                  <span className="font-semibold">
                    {endDate?.split('T')[0]}
                  </span>
                </p>
                {/* Location */}
                <p
                  className={`${
                    darkTheme ? 'text-gray-200' : 'text-gray-700'
                  } mb-1.5`}
                >
                  Location : <span className="font-semibold">{location}</span>
                </p>
                {/* Count */}
                <p
                  className={`${
                    darkTheme ? 'text-gray-200' : 'text-gray-700'
                  } mb-8`}
                >
                  Registration Count :{' '}
                  <span className="font-semibold">{register_count}</span>
                </p>
              </div>

              {/* Register Button */}
              <button
                onClick={handleRegister}
                className="bg-green text-light2 hover:bg-gold2 font-medium px-9 py-2 mt-auto mb-2 rounded-lg"
              >
                Register
              </button>
            </div>

            <Modal property={modal}>
              <button
                onClick={() => setModal({ ...modal, show: false })}
                className="bg-green text-white text-lg font-medium px-6 py-2 rounded-md"
              >
                OK
              </button>
            </Modal>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default MarathonDetails;
