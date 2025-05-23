import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../../Layouts/Container';
import { useAuthContext } from '../../Hooks/useAuthContext';
import Marathon from './Marathon';
import SortMara from './SortMara';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Loading from '../../components/Loading/Loading';

const AllMarathons = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [marathons, setMarathons] = useState([]);
  const [totalMarathons, setTotalMarathons] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(12);
  const [sort, setSort] = useState(null);
  const totalPages = Math.ceil(totalMarathons / cardPerPage);
  const pagesArray = [...Array(totalPages).keys()];

  const { darkTheme, serverUrl } = useAuthContext();
  const axiosSecure = useAxiosSecure();

  // Count Total docs
  useEffect(() => {
    axiosSecure
      .get(`${serverUrl}/marathons_count`)
      .then(res => setTotalMarathons(res.data.count));
  }, [serverUrl, axiosSecure]);

  // load Marathons data
  useEffect(() => {
    setIsLoading(true);

    const conditionalLink = sort
      ? `${serverUrl}/all_marathons?limit=${cardPerPage}&page=${currentPage}&sort=${sort}`
      : `${serverUrl}/all_marathons?limit=${cardPerPage}&page=${currentPage}`;

    axiosSecure.get(conditionalLink).then(res => setMarathons(res.data));

    setIsLoading(false);
  }, [currentPage, cardPerPage, sort, axiosSecure, serverUrl]);

  useEffect(() => {
    document.title = 'Marathons | RunSphere';
  }, []);

  return !isLoading ? (
    <div className="bg-greenBg pt-24 pb-16">
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
              Explore All Marathons
            </h1>

            <SortMara
              setSort={setSort}
              setCardPerPage={setCardPerPage}
              setCurrentPage={setCurrentPage}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
              {marathons.map(marathon => (
                <Marathon key={marathon._id} marathon={marathon} />
              ))}
            </div>

            {/* Pagination */}
            <div className="text-gray2 sm:text-lg md:text-xl font-semibold pt-12 flex justify-center items-center gap-3">
              <p
                onClick={() => {
                  currentPage > 1 && setCurrentPage(currentPage - 1);
                }}
                className={`hover:text-green cursor-pointer ${
                  darkTheme ? 'text-gray-200' : ''
                }`}
              >
                Prev
              </p>
              {pagesArray.map(num => (
                <button
                  onClick={() => setCurrentPage(num + 1)}
                  className={`px-2 sm:px-3.5 sm:py-1 rounded-lg border-2 border-light-green ${
                    currentPage === num + 1
                      ? darkTheme
                        ? 'bg-greenBg text-gray-400'
                        : 'bg-greenBg text-green'
                      : darkTheme
                      ? 'bg-goldBg text-gray-200'
                      : 'bg-white'
                  }`}
                  key={num}
                >
                  {num + 1}
                </button>
              ))}
              <p
                onClick={() => {
                  currentPage < totalPages && setCurrentPage(currentPage + 1);
                }}
                className={`hover:text-green cursor-pointer ${
                  darkTheme ? 'text-gray-200' : ''
                }`}
              >
                Next
              </p>
            </div>
          </section>
        </motion.div>
      </Container>
    </div>
  ) : (
    <Loading />
  );
};

export default AllMarathons;
