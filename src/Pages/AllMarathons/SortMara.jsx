import React from 'react';
import { useAuthContext } from '../../Hooks/useAuthContext';

const SortMara = ({ setSort, setCardPerPage, setCurrentPage }) => {
  const { darkTheme } = useAuthContext();

  return (
    <div className="mb-6 flex justify-end">
      <div className="flex items-center gap-4">
        {/* Card per Page */}
        <div className="flex items-center gap-3">
          <p
            className={`text-lg font-semibold ${
              darkTheme ? 'text-light2' : 'text-dark-green'
            }`}
          >
            Show :{' '}
          </p>
          <select
            onChange={e => {
              setCardPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className={`font-semibold w-24 px-4 py-1.5 border-[1.5px] border-green rounded-md outline-none ${
              darkTheme ? 'bg-dark5 text-light2' : ''
            }`}
            defaultValue={12}
            name="page"
            id="page"
          >
            <option value={8}>8</option>
            <option value={12}>12</option>
            <option value={16}>16</option>
          </select>
        </div>

        {/* Sort By */}
        <div className="group text-center cursor-pointer relative group">
          <p
            className={`font-medium w-28 px-4 py-2 border-[1.5px] border-green rounded-t-md rounded-b-md group-hover:rounded-b-none ${
              darkTheme ? 'bg-[#343434] text-light2' : 'bg-light2 text-gray-800'
            }`}
          >
            Sort By
          </p>

          <ul
            className={`w-28 h-0 group-hover:h-[6.5rem] overflow-hidden font-medium border-x-[1.5px] group-hover:border-b-[1.5px] group-hover:border-green rounded-b-md absolute top-9 right-0 z-10 transition-all duration-300 ${
              darkTheme
                ? 'bg-[#414141] text-light2'
                : 'bg-[#dddddd] text-gray-900'
            }`}
          >
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
