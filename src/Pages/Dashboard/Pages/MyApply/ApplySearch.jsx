import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useAuthContext } from '../../../../Hooks/useAuthContext';

const ApplySearch = ({ setApplications }) => {
  const axiosSecure = useAxiosSecure();
  const { serverUrl, user } = useAuthContext();

  const handleSearch = e => {
    e.preventDefault();

    axiosSecure
      .get(
        `${serverUrl}/search_apply?user_email=${user.email}&search=${e.target.value}`
      )
      .then(res => setApplications(res.data));
  };

  return (
    <div className="mb-6">
      <input
        onChange={handleSearch}
        className="px-3 py-1.5 border-2 border-[#6d9f78] rounded-lg outline-none"
        type="text"
        name="search"
        id="search"
        placeholder="Search"
      />
    </div>
  );
};

export default ApplySearch;
