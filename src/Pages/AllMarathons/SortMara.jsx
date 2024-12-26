import React from 'react';

const SortMara = ({ setSort, setCardPerPage, setCurrentPage }) => {
  return (
    <div className="mb-6 flex justify-end">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <p className="text-dark-green text-lg font-semibold">Show : </p>
          <select
            onChange={e => {
              setCardPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="font-semibold w-24 px-4 py-1.5 border-2 border-green rounded-lg outline-none"
            defaultValue={9}
            name="page"
            id="page"
          >
            <option value={6}>6</option>
            <option value={9}>9</option>
            <option value={12}>12</option>
            <option value={15}>15</option>
          </select>
        </div>

        <div className="group text-center cursor-pointer relative">
          <p className="bg-green text-slate-100 font-medium w-28 px-4 py-2 rounded-t-lg rounded-b-lg group-hover:rounded-b-none">
            Sort By
          </p>

          <ul className="bg-green text-light2 w-28 font-medium rounded-b-lg hidden group-hover:block absolute top-9 right-0 z-10">
            <li
              onClick={() => setSort(null)}
              className="hover:text-orange text-nowrap px-4 py-1"
            >
              Default
            </li>
            <li
              onClick={() => setSort('latest')}
              className="hover:text-orange text-nowrap px-4 py-1"
            >
              New-Old
            </li>
            <li
              onClick={() => setSort('old')}
              className="hover:text-orange text-nowrap px-4 pt-1 pb-2 rounded-b-lg"
            >
              Old-New
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SortMara;
