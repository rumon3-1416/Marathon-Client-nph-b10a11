import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainLayout from '../../../Layouts/MainLayout';
import { useAuthContext } from '../../../Hooks/useAuthContext';

const NewsLetter = () => {
  const { darkTheme } = useAuthContext();

  return (
    <div className="bg-greenBg py-20">
      <MainLayout>
        <div className="px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2
              className={`text-2xl font-semibold mb-2 ${
                darkTheme ? 'text-light2' : 'text-dark-green'
              }`}
            >
              Join Our Newsletter
            </h2>
            <p
              className={`font-medium max-w-[440px] ${
                darkTheme ? 'text-gray-300' : 'text-gray2'
              }`}
            >
              Push your email and be part of a vibrant community of runners.
              Subscribe now for an unforgettable journey.
            </p>
          </div>

          <form
            onSubmit={e => {
              e.preventDefault();
              toast.success('Subscription successful!');
              e.target.reset();
            }}
            className="flex items-center"
          >
            <input
              className={`w-[10rem] sm:w-[15rem] md:w-[10rem] lg:w-[15rem] xl:w-[20rem] px-6 py-3 border-2 border-green outline-none rounded-s-lg ${
                darkTheme ? 'bg-[#343434]' : ''
              }`}
              type="email"
              name="subscribe"
              id="subscribe"
              placeholder="Email"
              required
            />
            <button
              type="submit"
              className="bg-green text-white font-semibold px-6 py-3 border-2 border-green rounded-e-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </MainLayout>

      <ToastContainer pauseOnFocusLoss={false} />
    </div>
  );
};

export default NewsLetter;
