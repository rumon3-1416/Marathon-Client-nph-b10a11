import React, { useEffect } from 'react';
import { useAuthContext } from '../../../../Hooks/useAuthContext';

const inputClasses =
  'text-sm w-full px-4 py-2 rounded-md border-[1.5px] focus:border-green outline-none transition-all duration-300';

const UpdateApply = ({
  application,
  updateApplication,
  setUpdateApplicationModal,
}) => {
  const { _id, first_name, last_name, age, contact } = application;

  const { darkTheme } = useAuthContext();

  const labelColor = darkTheme ? 'text-gray-300' : 'text-gray-700';
  const inputColor = darkTheme
    ? 'bg-dark3 text-gray-200 border-gray-600'
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

    const applyInfo = {
      _id,
      ...details,
    };

    updateApplication(applyInfo);
  };

  return (
    <div className="bg-[#00000053] w-full min-h-screen max-h-screen backdrop-blur-sm p-8 sm:p-10 md:p-12 fixed inset-0 overflow-hidden flex flex-col justify-center items-center z-50">
      <div
        className={`animate__animated animate__zoomIn px-5 py-8 max-h-full w-full max-w-3xl mx-auto shadow-lg overflow-y-auto rounded-lg ${
          darkTheme ? 'bg-dark5' : 'bg-[#fffcfc]'
        }`}
      >
        <h3
          className={`text-3xl font-bold text-center mb-8 ${
            darkTheme ? 'text-light2' : 'text-gray-800'
          }`}
        >
          Update Application
        </h3>

        <form onSubmit={handleSubmit}>
          {/* First & Last */}
          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="first_name"
                className={`text-sm font-semibold mb-1 ${labelColor}`}
              >
                First Name
              </label>
              <input
                className={`${inputClasses} ${inputColor}`}
                type="text"
                id="first_name"
                name="first_name"
                placeholder="First Name"
                defaultValue={first_name}
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="last_name"
                className={`text-sm font-semibold mb-1 ${labelColor}`}
              >
                Last Name
              </label>
              <input
                className={`${inputClasses} ${inputColor}`}
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Last Name"
                defaultValue={last_name}
                required
              />
            </div>
          </div>

          {/* Age & Contact */}
          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="age"
                className={`text-sm font-semibold mb-1 ${labelColor}`}
              >
                Your Age
              </label>
              <input
                className={`${inputClasses} ${inputColor}`}
                type="text"
                id="age"
                name="age"
                placeholder="Your Age"
                defaultValue={age}
                required
              />
            </div>

            {/* Contact Number */}
            <div className="mb-4 flex flex-col">
              <label
                htmlFor="contact"
                className={`text-sm font-semibold mb-1 ${labelColor}`}
              >
                Contact Number
              </label>
              <input
                className={`${inputClasses} ${inputColor}`}
                type="text"
                id="contact"
                name="contact"
                placeholder="Contact Number"
                defaultValue={contact}
                required
              />
            </div>
          </div>

          {/* Submit */}
          <div className="text-center flex justify-center gap-2">
            <button
              onClick={() =>
                setUpdateApplicationModal({
                  showModal: false,
                  Application: {},
                })
              }
              type="button"
              className="bg-orange text-light2 hover:bg-orange/70 text-sm font-semibold px-6 md:px-10 lg:px-12 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green text-light2 hover:bg-gold2 text-sm font-semibold px-6 md:px-10 lg:px-12 py-2 rounded-md"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateApply;
