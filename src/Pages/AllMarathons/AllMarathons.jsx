import React, { useEffect, useState } from 'react';
import MainLayout from '../../Layouts/MainLayout';
import { useAuthContext } from '../../Hooks/useAuthContext';
import Marathon from './Marathon';
import SortMara from './SortMara';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const AllMarathons = () => {
  const [marathons, setMarathons] = useState([]);
  const [totalMarathons, setTotalMarathons] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(9);
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
    const conditionalLink = sort
      ? `${serverUrl}/all_marathons?limit=${cardPerPage}&page=${currentPage}&sort=${sort}`
      : `${serverUrl}/all_marathons?limit=${cardPerPage}&page=${currentPage}`;

    axiosSecure.get(conditionalLink).then(res => setMarathons(res.data));
  }, [currentPage, cardPerPage, sort, axiosSecure, serverUrl]);

  useEffect(() => {
    document.title = 'Marathons | RunSphere';
  }, []);

  return (
    <div className="bg-greenBg py-16">
      <MainLayout>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {marathons.map(marathon => (
              <Marathon key={marathon._id} marathon={marathon} />
            ))}
          </div>

          {/* Pagination */}
          <div className="text-gray sm:text-lg md:text-xl font-semibold pt-12 flex justify-center items-center gap-3">
            <p
              onClick={() => {
                currentPage > 1 && setCurrentPage(currentPage - 1);
              }}
              className="hover:text-green cursor-pointer"
            >
              Prev
            </p>
            {pagesArray.map(num => (
              <button
                onClick={() => setCurrentPage(num + 1)}
                className={`px-2 sm:px-3.5 sm:py-1 rounded-lg border-2 border-light-green ${
                  currentPage === num + 1
                    ? 'bg-light-green text-green'
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
              className="hover:text-green cursor-pointer"
            >
              Next
            </p>
          </div>
        </section>
      </MainLayout>
    </div>
  );
};

export default AllMarathons;
