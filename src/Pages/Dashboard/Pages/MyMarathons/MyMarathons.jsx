import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../../../../Hooks/useAuthContext';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import MyMaraRow from './MyMaraRow';
import UpdateMarathon from './UpdateMarathon';
import Modal from '../../../../components/Modal/Modal';

const MyMarathons = () => {
  const [marathons, setMarathons] = useState([]);
  const [delId, setDelId] = useState(null);
  const [confirmModal, setConfirmModal] = useState(false);
  const [updateMarathonModal, setUpdateMarathonModal] = useState({
    showModal: false,
    marathon: {},
  });
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

  useEffect(() => {
    document.title = 'My Marathons | Dashboard | RunSphere';
  }, []);

  // handle Pre Update
  const handleUpdate = marathon => {
    setUpdateMarathonModal({ showModal: true, marathon: marathon });
  };
  // Update Marathon
  const updateMarathon = updatedMarathon => {
    const { _id, ...updatedMara } = updatedMarathon;

    axiosSecure
      .patch(`${serverUrl}/my_marathon/${_id}`, {
        updatedMarathon: updatedMara,
      })
      .then(
        res =>
          res.data.acknowledged &&
          (loadMarathons(),
          setUpdateMarathonModal({
            showModal: false,
            marathon: {},
          }),
          setModal({
            show: true,
            res: 'success',
            title: 'Marathon Updated',
          }))
      );
  };

  // handle Pre Delete
  const handleDelete = id => {
    setDelId(id);
    setConfirmModal(true);
    setModal({ show: true, res: 'warn', title: 'Delete Marathon?' });
  };
  // Delete Marathon
  const deleteModal = () => {
    axiosSecure
      .delete(`${serverUrl}/marathon/${delId}`)
      .then(
        res =>
          res.data.acknowledged &&
          (loadMarathons(),
          setConfirmModal(false),
          setModal({ show: true, res: 'success', title: 'Marathon Deleted' }))
      );
  };

  // Load marathons
  const loadMarathons = () => {
    axiosSecure
      .get(`${serverUrl}/my_marathons?user_email=${user.email}`)
      .then(res => res.data && setMarathons(res.data));
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
                  handleUpdate={handleUpdate}
                  handleDelete={handleDelete}
                />
              ))}
          </tbody>
        </table>

        {updateMarathonModal.showModal && (
          <UpdateMarathon
            marathon={updateMarathonModal.marathon}
            updateMarathon={updateMarathon}
          />
        )}

        {confirmModal ? (
          <Modal property={modal}>
            <div className="flex gap-4">
              <button
                onClick={deleteModal}
                className="bg-[#ff3d3d] text-white text-lg font-medium px-6 py-2 rounded-lg"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setModal({ ...modal, show: false });
                  setDelId(null);
                  setConfirmModal(false);
                }}
                className="bg-[#979797] text-white text-lg font-medium px-6 py-2 rounded-lg"
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
                setConfirmModal(false);
              }}
              className="bg-green text-white text-lg font-medium px-6 py-2 rounded-lg"
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
