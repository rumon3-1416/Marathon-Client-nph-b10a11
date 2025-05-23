import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../../../../Hooks/useAuthContext';
import Modal from '../../../../components/Modal/Modal';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import UpdateApply from './UpdateApply';
import MyApplyRow from './MyApplyRow';
import ApplySearch from './ApplySearch';

const MyApply = () => {
  const [applications, setApplications] = useState([]);
  const [delId, setDelId] = useState(null);
  const [confirmModal, setConfirmModal] = useState(false);
  const [updateApplicationModal, setUpdateApplicationModal] = useState({
    showModal: false,
    application: {},
  });
  const [modal, setModal] = useState({
    show: false,
    res: '',
    title: '',
  });

  const { darkTheme, serverUrl, user } = useAuthContext();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    document.title = 'My Applications | RunSphere';

    axiosSecure
      .get(`${serverUrl}/applications?user_email=${user.email}`)
      .then(res => res.data && setApplications(res.data));
  }, [axiosSecure, serverUrl, user]);

  useEffect(() => {
    document.title = 'My Apply | Dashboard | RunSphere';
  }, []);

  // handle Pre Update
  const handleUpdate = application => {
    setUpdateApplicationModal({ showModal: true, application: application });
  };
  // Update Application
  const updateApplication = updatedApplication => {
    const { _id, ...updatedApply } = updatedApplication;
    axiosSecure
      .patch(`${serverUrl}/application/${_id}`, {
        updatedApplication: updatedApply,
      })
      .then(
        res =>
          res.data.acknowledged &&
          (loadApplications(),
          setUpdateApplicationModal({
            showModal: false,
            Application: {},
          }),
          setModal({
            show: true,
            res: 'success',
            title: 'Application Updated',
          }))
      );
  };

  // handle Pre Delete
  const handleDelete = id => {
    setDelId(id);
    setConfirmModal(true);
    setModal({ show: true, res: 'warn', title: 'Delete Application?' });
  };
  // Delete Application
  const deleteModal = () => {
    axiosSecure.delete(`${serverUrl}/application/${delId}`).then(
      res =>
        res.data.acknowledged &&
        (loadApplications(),
        setConfirmModal(false),
        setModal({
          show: true,
          res: 'success',
          title: 'Application Deleted',
        }))
    );
  };

  // Load Applications
  const loadApplications = () => {
    axiosSecure
      .get(`${serverUrl}/applications?user_email=${user.email}`)
      .then(res => res.data && setApplications(res.data));
  };

  return (
    <section>
      <h3
        className={`text-3xl font-bold text-center mb-12 ${
          darkTheme ? 'text-light2' : 'text-gray-800'
        }`}
      >
        My Apply List
      </h3>

      {/* Search */}
      <ApplySearch setApplications={setApplications} />

      {/* Table */}
      <div className="overflow-x-auto mt-4">
        {applications.length > 0 ? (
          <table className="table bg-white">
            {/* head */}
            <thead>
              <tr
                className={`border-none ${
                  darkTheme ? 'text-light2 bg-dark5' : 'bg-[#e6e6e6]'
                }`}
              >
                <th>No</th>
                <th>Title</th>
                <th className="text-center">Name</th>
                <th>Contact</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>

            {/* body */}
            <tbody>
              {applications.length > 0 &&
                applications.map((application, index) => (
                  <MyApplyRow
                    key={application._id}
                    application={application}
                    index={index}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                  />
                ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center">
            <h2
              className={`text-2xl font-semibold ${
                darkTheme ? 'text-gray-200' : 'text-dark5'
              }`}
            >
              No Data Found!
            </h2>
            <p className={`mt-2 ${darkTheme ? 'text-gray-300' : ''}`}>
              Apply Marathons to see here.
            </p>
          </div>
        )}

        {updateApplicationModal.showModal && (
          <UpdateApply
            application={updateApplicationModal.application}
            updateApplication={updateApplication}
            setUpdateApplicationModal={setUpdateApplicationModal}
          />
        )}

        {confirmModal ? (
          <Modal property={modal}>
            <div className="flex gap-4">
              <button
                onClick={deleteModal}
                className="bg-[#ff3d3d] text-white text-lg font-medium px-6 py-2 rounded-md"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setModal({ ...modal, show: false });
                  setDelId(null);
                  setConfirmModal(false);
                }}
                className="bg-[#979797] text-white text-lg font-medium px-6 py-2 rounded-md"
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
              className="bg-green text-white text-lg font-medium px-6 py-2 rounded-md"
            >
              OK
            </button>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default MyApply;
