import React from 'react';

const SortMara = ({ handleSort }) => {
  return (
    <div className="mb-6 flex justify-end">
      <div className="group text-center cursor-pointer relative">
        <p className="bg-green text-slate-100 font-medium w-28 px-4 py-2 rounded-t-lg rounded-b-lg group-hover:rounded-b-none">
          Sort By
        </p>

        <ul className="bg-green text-light2 w-28 font-medium rounded-b-lg hidden group-hover:block absolute top-9 right-0 z-10">
          <li
            onClick={() => handleSort('latest')}
            className="hover:text-orange text-nowrap px-4 py-1"
          >
            New-Old
          </li>
          <li
            onClick={() => handleSort('old')}
            className="hover:text-orange text-nowrap px-4 pt-1 pb-2 rounded-b-lg"
          >
            Old-New
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SortMara;
