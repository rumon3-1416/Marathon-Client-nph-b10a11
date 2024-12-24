import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../../../../Hooks/useAuthContext';
import Modal from '../../../../components/Modal/Modal';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import MyMaraRow from './MyMaraRow';

const MyMarathons = () => {
  const [marathons, setMarathons] = useState([]);
  const [delId, setDelId] = useState(null);
  const [deleted, setDeleted] = useState(false);
  const [modal, setModal] = useState({
    show: false,
    res: '',
    title: '',
  });

  const { darkTheme, serverUrl, user } = useAuthContext();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    document.title = 'My Marathons | RunSphere';

    axiosSecure
      .get(`${serverUrl}/my_marathons?user_email=${user.email}`)
      .then(res => res.data && setMarathons(res.data));
  }, [axiosSecure, serverUrl, user]);

  // handle Pre Delete
  const handleDelete = id => {
    setDelId(id);

    setModal({ show: true, res: 'warn', title: 'Delete Marathon?' });
  };

  // Delete handle
  const deleteModal = () => {
    axiosSecure
      .delete(`${serverUrl}/marathon/${delId}`)
      .then(
        res =>
          res.data.acknowledged &&
          (axiosSecure
            .get(`${serverUrl}/my_marathons?user_email=${user.email}`)
            .then(res => res.data && setMarathons(res.data)),
          setDeleted(true),
          setModal({ show: true, res: 'success', title: 'Campaign Deleted' }))
      );
  };

  return (
    <section>
      <h3
        className={`text-3xl font-bold text-center mb-12 ${
          darkTheme ? 'text-light2' : 'text-gray-800'
        }`}
      >
        My Marathons
      </h3>

      {/* Table */}
      <div className="bg-[#fffcfc] overflow-x-auto mt-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr className={`bg-[#e6e6e6] ${darkTheme && 'text-light2'}`}>
              <th>No</th>
              <th>Title</th>
              <th className="text-center">Distance</th>
              <th>Date</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          {/* body */}
          <tbody>
            {marathons.length > 0 &&
              marathons.map((marathon, index) => (
                <MyMaraRow
                  key={marathon._id}
                  marathon={marathon}
                  index={index}
                  handleDelete={handleDelete}
                />
              ))}
          </tbody>
        </table>

        {!deleted ? (
          <Modal property={modal}>
            <div className="flex gap-4">
              <button
                onClick={deleteModal}
                className="bg-[#ff3d3d] text-white text-lg font-medium px-6 py-2 rounded-full"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setModal({ ...modal, show: false });
                  setDelId(null);
                }}
                className="bg-[#979797] text-white text-lg font-medium px-6 py-2 rounded-full"
              >
                Cancel
              </button>
            </div>
          </Modal>
        ) : (
          <Modal property={modal}>
            <button
              onClick={() => {
                setModal({ ...modal, show: false });
                setDeleted(false);
              }}
              className="bg-green text-white text-lg font-medium px-6 py-2 rounded-full"
            >
              OK
            </button>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default MyMarathons;
