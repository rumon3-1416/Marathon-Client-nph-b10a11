import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../../../../Hooks/useAuthContext';
import DatePicker from 'react-datepicker';

const UpdateModal = ({ marathon, updateMarathon }) => {
  const {
    _id,
    title,
    distance,
    location,
    image,
    description,
    startDate: start,
    endDate: end,
    marathonDate: mara,
  } = marathon;

  const [startDate, setStartDate] = useState(new Date(start));
  const [endDate, setEndDate] = useState(new Date(end));
  const [marathonDate, setMarathonDate] = useState(new Date(mara));

  const { darkTheme, user } = useAuthContext();

  const labelColor = darkTheme ? 'text-gray-300' : 'text-gray-700';
  const inputColor = darkTheme
    ? 'bg-dark3 text-gray-200'
    : 'bg-[#f1f1f1] text-gray-800';

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const details = Object.fromEntries(formData.entries());

    const marathonInfo = {
      _id,
      ...details,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      marathonDate: marathonDate.toISOString(),
      register_count: 0,
      user_name: user?.displayName,
      user_email: user.email,
    };

    updateMarathon(marathonInfo);
  };

  return (
    <div className="bg-[#00000053] w-full min-h-screen max-h-screen backdrop-blur-sm p-8 sm:p-10 md:p-12 fixed inset-0 overflow-hidden flex flex-col justify-center items-center z-50">
      <div
        className={`animate__animated animate__zoomIn px-8 py-10 max-h-full w-full max-w-[1232px] mx-auto shadow-lg overflow-y-auto rounded-xl ${
          darkTheme ? 'bg-dark5' : 'bg-[#fffcfc]'
        }`}
      >
        <h3
          className={`text-3xl font-bold text-center mb-12 ${
            darkTheme ? 'text-light2' : 'text-gray-800'
          }`}
        >
          Update Marathon
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
              placeholder="Marathon Title"
              defaultValue={title}
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
              <p className={`font-semibold mb-2 ${labelColor}`}>
                Marathon Start
              </p>
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
                defaultValue={distance}
                name="distance"
                id="distance"
                required
              >
                <option value="" disabled>
                  Select Distance
                </option>
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
              defaultValue={location}
              required
            />
          </div>

          {/* Image */}
          <div className="mb-6 flex flex-col">
            <label
              htmlFor="image"
              className={`font-semibold mb-2 ${labelColor}`}
            >
              Marathon Image
            </label>
            <input
              className={`w-full px-4 py-3 rounded-lg outline-none ${inputColor}`}
              type="text"
              id="image"
              name="image"
              placeholder="Marathon Image URL"
              defaultValue={image}
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
              defaultValue={description}
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
