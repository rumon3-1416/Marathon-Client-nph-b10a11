import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Container from '../../../Layouts/Container';
import { useAuthContext } from '../../../Hooks/useAuthContext';
import MarathonCard from './MarathonCard';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Marathons = () => {
  const [marathons, setMarathons] = useState([]);

  const { serverUrl, darkTheme } = useAuthContext();

  useState(() => {
    axios
      .get(`${serverUrl}/marathons?limit=4`)
      .then(res => res.data && setMarathons(res.data));
  }, [serverUrl]);

  return (
    <div className="bg-greenBg pt-16 pb-10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <section id="marathons">
            <h1
              className={`text-4xl leading-[44px] font-semibold mb-4 ${
                darkTheme ? 'text-light2' : 'text-dark'
              }`}
            >
              Our Marathons
            </h1>
            <p
              className={`text-lg max-w-[480px] mb-10 ${
                darkTheme ? 'text-gray-200' : 'text-[#32443f]'
              }`}
            >
              Elevate Your Runs with the Ultimate Community and be a member of
              Runs Sphere.
            </p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {marathons.map(marathon => (
                  <MarathonCard key={marathon._id} marathon={marathon} />
                ))}
              </div>
            </motion.div>
          </section>
        </motion.div>
      </Container>
    </div>
  );
};

export default Marathons;
