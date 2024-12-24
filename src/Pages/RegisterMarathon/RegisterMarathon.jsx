import React, { useEffect, useState } from 'react';
import MainLayout from '../../Layouts/MainLayout';
import { useAuthContext } from '../../Hooks/useAuthContext';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Modal from '../../components/Modal/Modal';
import { useParams } from 'react-router-dom';

const RegisterMarathon = () => {
  const [marathon, setMarathon] = useState({});
  const [modal, setModal] = useState({
    show: false,
    res: '',
    title: '',
  });
  const { _id, title, marathonDate, user_email } = marathon;

  const { darkTheme, serverUrl, user } = useAuthContext();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  const labelColor = darkTheme ? 'text-gray-300' : 'text-gray-700';
  const inputColor = darkTheme
    ? 'bg-dark3 text-gray-200'
    : 'bg-[#f1f1f1] text-gray-800';

  useEffect(() => {
    axiosSecure
      .get(`${serverUrl}/marathon/${id}`)
      .then(res => setMarathon(res.data));
  }, [axiosSecure, serverUrl, id]);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const details = Object.fromEntries(formData.entries());

    axiosSecure
      .post(`${serverUrl}/register_marathon/${_id}`, { data: details })
      .then(res => {
        res.data?.acknowledged &&
          (setModal({
            show: true,
            res: 'success',
            title: 'Registration Successful!',
          }),
          form.reset());
      });
  };

  return (
    <div className="bg-greenBg pt-12 pb-24">
      <MainLayout>
        <section className="bg-[#fffcfc] px-8 py-10 rounded-xl shadow-lg">
          <h3
            className={`text-3xl font-bold text-center mb-12 ${
              darkTheme ? 'text-light2' : 'text-gray-800'
            }`}
          >
            Register Marathon
          </h3>

          <form onSubmit={handleSubmit}>
            {/* Title */}
            <div className="mb-6 flex flex-col">
              <label
                htmlFor="title"
                className={`font-semibold mb-2 ${labelColor}`}
              >
                Marathon Title
              </label>
              <input
                className={`w-full px-4 py-3 rounded-lg outline-none ${inputColor}`}
                id="title"
                type="text"
                name="title"
                defaultValue={title}
                readOnly
              />
            </div>

            {/* marathon Date */}
            <div className="mb-6 flex flex-col">
              <label
                htmlFor="date"
                className={`font-semibold mb-2 ${labelColor}`}
              >
                Marathon Start
              </label>
              <input
                className={`w-full px-4 py-3 rounded-lg outline-none ${inputColor}`}
                id="date"
                type="text"
                name="date"
                defaultValue={marathonDate?.split('T')[0]}
                readOnly
              />
            </div>

            {/* First Name */}
            <div className="mb-6 flex flex-col">
              <label
                htmlFor="first_name"
                className={`font-semibold mb-2 ${labelColor}`}
              >
                First Name
              </label>
              <input
                className={`w-full px-4 py-3 rounded-lg outline-none ${inputColor}`}
                type="text"
                id="first_name"
                name="first_name"
                placeholder="First Name"
                required
              />
            </div>

            {/* Last Name */}
            <div className="mb-6 flex flex-col">
              <label
                htmlFor="last_name"
                className={`font-semibold mb-2 ${labelColor}`}
              >
                Last Name
              </label>
              <input
                className={`w-full px-4 py-3 rounded-lg outline-none ${inputColor}`}
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Last Name"
                required
              />
            </div>

            {/* Age */}
            <div className="mb-6 flex flex-col">
              <label
                htmlFor="age"
                className={`font-semibold mb-2 ${labelColor}`}
              >
                Your Age
              </label>
              <input
                className={`w-full px-4 py-3 rounded-lg outline-none ${inputColor}`}
                type="number"
                id="age"
                name="age"
                placeholder="Your Age"
                required
              />
            </div>

            {/* Contact Number */}
            <div className="mb-6 flex flex-col">
              <label
                htmlFor="contact"
                className={`font-semibold mb-2 ${labelColor}`}
              >
                Contact Number
              </label>
              <input
                className={`w-full px-4 py-3 rounded-lg outline-none ${inputColor}`}
                type="number"
                id="contact"
                name="contact"
                placeholder="Contact Number"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-10 flex flex-col">
              <label
                htmlFor="email"
                className={`font-semibold mb-2 ${labelColor}`}
              >
                Email
              </label>
              <input
                className={`w-full px-4 py-3 rounded-lg outline-none ${inputColor}`}
                type="text"
                id="email"
                name="email"
                defaultValue={user_email}
                readOnly
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-green text-light2 hover:bg-gold2 text-xl font-semibold px-12 py-2.5 rounded-xl"
              >
                Register
              </button>
            </div>
          </form>

          <Modal property={modal}>
            <button
              onClick={() => setModal({ ...modal, show: false })}
              className="bg-green text-white text-lg font-medium px-6 py-2 rounded-xl"
            >
              OK
            </button>
          </Modal>
        </section>
      </MainLayout>
    </div>
  );
};

export default RegisterMarathon;
