import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../../../../Hooks/useAuthContext';
import Modal from '../../../../components/Modal/Modal';

const MyApply = () => {
  // const [campaigns, setCampaigns] = useState([]);
  // const [delCampId, setDelCampId] = useState(null);
  const [deleted, setDeleted] = useState(false);
  const [modal, setModal] = useState({
    show: false,
    res: '',
    title: '',
  });

  const { darkTheme, serverUrl, user } = useAuthContext();

  useEffect(() => {
    document.title = 'My Campaigns | RunSphere';
  }, []);

  // const handleDelete = id => {
  //   setDelCampId(id);

  //   setModal({ show: true, res: 'warn', title: 'Delete Campaign?' });
  // };

  const deleteModal = () => {
    // del(`${serverUrl}/campaigns/${delCampId}`).then(
    //   res =>
    //     res.acknowledged &&
    //     (get(`${serverUrl}/campaigns?user_email=${user.email}`).then(data =>
    //       setCampaigns(data)
    //     ),
    //     setDeleted(true),
    //     setModal({ show: true, res: 'success', title: 'Campaign Deleted' }))
    // );
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

      {/* Table */}
      <div className="overflow-x-auto mt-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr className={`border border-green ${darkTheme && 'text-light2'}`}>
              <th>No</th>
              <th>Title</th>
              <th>Deadline</th>
              <th>Donation</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          {/* body */}
          {/* <tbody>
            {campaigns.length > 0 &&
              campaigns.map((campaign, index) => (
                <CampaignRow
                  key={campaign._id}
                  campaign={campaign}
                  index={index}
                  handleDelete={handleDelete}
                />
              ))}
          </tbody> */}
        </table>

        {!deleted ? (
          <Modal property={modal}>
            <div className="flex gap-4">
              <button
                onClick={deleteModal}
                className="bg-coral2 text-white text-lg font-medium px-6 py-2 rounded-full"
              >
                Delete
              </button>
              <button
                onClick={() => setModal({ ...modal, show: false })}
                className="bg-gray-500 text-white text-lg font-medium px-6 py-2 rounded-full"
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
              className="bg-teal text-white text-lg font-medium px-6 py-2 rounded-full"
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
