import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useAuthContext } from '../../../../Hooks/useAuthContext';
import Modal from '../../../../components/Modal/Modal';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const AddMarathon = () => {
  const [modal, setModal] = useState({
    show: false,
    res: '',
    title: '',
  });
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [marathonDate, setMarathonDate] = useState(new Date());
  const createDate = new Date();

  const { darkTheme, serverUrl, user } = useAuthContext();
  const axiosSecure = useAxiosSecure();

  const labelColor = darkTheme ? 'text-gray-300' : 'text-gray-700';
  const inputColor = darkTheme
    ? 'bg-dark3 text-gray-200'
    : 'bg-[#f1f1f1] text-gray-800';

  useEffect(() => {
    document.title = 'Add Marathon | Dashboard | RunSphere';
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const details = Object.fromEntries(formData.entries());

    const marathonInfo = {
      ...details,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      marathonDate: marathonDate.toISOString(),
      createDate: createDate.toISOString(),
      register_count: 0,
      user_name: user?.displayName,
      user_email: user?.email,
    };

    axiosSecure
      .post(`${serverUrl}/add_marathon`, { marathon: marathonInfo })
      .then(
        res =>
          res.data.acknowledged &&
          (setModal({ show: true, res: 'success', title: 'Marathon Added' }),
          form.reset(),
          setStartDate(new Date()),
          setEndDate(new Date()),
          setMarathonDate(new Date()))
      );
  };

  return (
    <section>
      <h3
        className={`text-3xl font-bold text-center mb-12 ${
          darkTheme ? 'text-light2' : 'text-gray-800'
        }`}
      >
        Add Marathon
      </h3>

      <form
        onSubmit={handleSubmit}
        className="bg-[#fffcfc] px-8 py-10 rounded-xl shadow-lg"
      >
        {/* Title */}
        <div className="mb-6 flex flex-col">
          <label htmlFor="title" className={`font-semibold mb-2 ${labelColor}`}>
            Marathon Title
          </label>
          <input
            className={`w-full px-4 py-3 rounded-lg outline-none ${inputColor}`}
            id="title"
            type="text"
            name="title"
            placeholder="Marathon Title"
            required
          />
        </div>

        {/* Start & End */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <p className={`font-semibold mb-2 ${labelColor}`}>
              Registration Start
            </p>
            <DatePicker
              className={`w-full px-4 py-3 rounded-lg outline-none ${inputColor}`}
              selected={startDate}
              onChange={date => setStartDate(date)}
            />
          </div>

          <div className="flex flex-col">
            <p className={`font-semibold mb-2 ${labelColor}`}>
              Registration End
            </p>
            <DatePicker
              className={`w-full px-4 py-3 rounded-lg outline-none ${inputColor}`}
              selected={endDate}
              onChange={date => setEndDate(date)}
            />
          </div>
        </div>

        {/* marathon Date & Distance */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <p className={`font-semibold mb-2 ${labelColor}`}>Marathon Start</p>
            <DatePicker
              className={`w-full px-4 py-3 rounded-lg outline-none ${inputColor}`}
              selected={marathonDate}
              onChange={date => setMarathonDate(date)}
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="distance"
              className={`font-semibold mb-2 ${labelColor}`}
            >
              Running Distance
            </label>
            <select
              className={`w-full px-4 py-3 rounded-lg outline-none  ${inputColor}`}
              defaultValue=""
              name="distance"
              id="distance"
              required
            >
              <option value="" disabled>
                Select Distance
              </option>
              <option value="3km">3km</option>
              <option value="5km">5km</option>
              <option value="10km">10km</option>
              <option value="15km">15km</option>
              <option value="20km">20km</option>
              <option value="30km">30km</option>
            </select>
          </div>
        </div>

        {/* Location */}
        <div className="mb-6 flex flex-col">
          <label
            htmlFor="location"
            className={`font-semibold mb-2 ${labelColor}`}
          >
            Location
          </label>
          <input
            className={`w-full px-4 py-3 rounded-lg outline-none ${inputColor}`}
            type="text"
            id="location"
            name="location"
            placeholder="Marathon Location"
            required
          />
        </div>

        {/* Image */}
        <div className="mb-6 flex flex-col">
          <label htmlFor="image" className={`font-semibold mb-2 ${labelColor}`}>
            Marathon Image
          </label>
          <input
            className={`w-full px-4 py-3 rounded-lg outline-none ${inputColor}`}
            type="text"
            id="image"
            name="image"
            placeholder="Marathon Image URL"
            required
          />
        </div>

        {/* description */}
        <div className="mb-6 flex flex-col">
          <label
            htmlFor="description"
            className={`font-semibold mb-2 ${labelColor}`}
          >
            Description
          </label>
          <textarea
            className={`w-full px-4 py-3 rounded-lg outline-none resize-none ${inputColor}`}
            id="description"
            name="description"
            placeholder="Write a short description about you marathon"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-green text-light2 hover:bg-gold2 text-xl font-semibold px-12 py-2.5 rounded-lg"
          >
            Add
          </button>
        </div>
      </form>

      <Modal property={modal}>
        <button
          onClick={() => setModal({ ...modal, show: false })}
          className="bg-green text-white text-lg font-medium px-6 py-2 rounded-lg"
        >
          OK
        </button>
      </Modal>
    </section>
  );
};

export default AddMarathon;
