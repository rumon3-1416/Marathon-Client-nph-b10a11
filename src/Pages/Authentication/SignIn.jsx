import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoEyeOutline } from 'react-icons/io5';
import { FaRegEyeSlash } from 'react-icons/fa';

import { useAuthContext } from '../../Hooks/useAuthContext';
import MainLayout from '../../Layouts/MainLayout';
import Modal from '../../components/Modal/Modal';
import googleIcon from '../../assets/icons/google.png';

const SignIn = () => {
  const [showPass, setShowPass] = useState(false);
  const [errMessage, setErrMessage] = useState(null);
  const [modal, setModal] = useState({
    show: false,
    res: '',
    title: '',
  });

  const navigate = useNavigate();
  const location = useLocation();
  const { darkTheme, emailPassSignIn, googleSignIn } = useAuthContext();
  const inputColor = darkTheme
    ? 'bg-dark3 text-gray-200'
    : 'bg-[#f1f1f1] text-gray-800';

  const desired = location.state?.pathname || '/';

  // Email Password Log In Handler
  const handleSubmit = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    emailPassSignIn(email, password)
      .then(() => {
        setErrMessage(null);
        setModal({ show: true, res: 'success', title: 'Log In Successful' });
      })
      .catch(err => {
        setErrMessage(err.message);
        setModal({ show: true, res: 'error', title: 'Log In Failed' });
      });
  };

  // Popup Log In Handler
  const handlePopup = () => {
    googleSignIn()
      .then(() => {
        setErrMessage(null);
        setModal({ show: true, res: 'success', title: 'Log In Successful' });
      })
      .catch(err => {
        setErrMessage(err.message);
        setModal({ show: true, res: 'error', title: 'Log In failed' });
      });
  };

  useEffect(() => {
    document.title = 'Login | RunSphere';
  }, []);

  return (
    <div className="bg-greenBg py-8">
      <MainLayout>
        <section className="min-h-[calc(95vh-7rem)] flex justify-center items-center">
          <div
            className={`w-full md:w-4/5 max-w-md px-5 md:px-6 py-6 md:py-8 rounded-xl shadow-lg ${
              darkTheme ? 'text-light2 bg-dark5' : 'text-[#403F3F] bg-[#fffcfc]'
            }`}
          >
            {/* Email Password Sign In */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Email */}
              <input
                className={`w-full px-5 py-3 outline-none focus:border-[1.5px] border-green rounded-md ${inputColor}`}
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
              />

              {/* Password */}
              <div className="relative">
                <input
                  className={`w-full px-5 py-3 outline-none focus:border-[1.5px] border-green rounded-md ${inputColor}`}
                  id="password"
                  name="password"
                  type={showPass ? `text` : `password`}
                  placeholder="Password"
                  required
                />
                <button
                  onClick={() => setShowPass(!showPass)}
                  className="absolute top-4 right-4 rounded-full"
                  type="button"
                >
                  {showPass ? (
                    <IoEyeOutline className="text-2xl" />
                  ) : (
                    <FaRegEyeSlash className="text-2xl" />
                  )}
                </button>
              </div>

              {/* Error message */}
              <p className="text-red-500">{errMessage || ''}</p>

              {/* Submit */}
              <button
                className="bg-green hover:bg-gold2 text-white font-semibold px-5 py-2.5 rounded-lg"
                type="submit"
              >
                Log In
              </button>
            </form>

            <p
              className={`text-sm text-center font-semibold mt-4 ${
                darkTheme ? 'text-gray-200' : 'text-[#706F6F]'
              }`}
            >
              Don’t Have An Account ?{' '}
              <Link className="text-orange whitespace-nowrap" to="/signup">
                Register
              </Link>
            </p>

            {/* or border */}
            <div className="my-3 grid grid-cols-[1fr,_40px,_1fr] items-center">
              <div className="border border-[#8d8b8b]"></div>
              <p
                className={`text-xl font-medium text-center ${
                  darkTheme ? 'text-gray-300' : 'text-[#403F3F]'
                }`}
              >
                or
              </p>
              <div className="border border-[#8d8b8b]"></div>
            </div>

            {/* Google Sign In */}
            <button
              onClick={handlePopup}
              className={`w-full font-semibold px-5 py-2.5 border-[1.5px] hover:border-gold rounded-full flex justify-center items-center gap-2 sm:gap-4 ${
                darkTheme ? 'border-gray-300' : 'border-dark-green'
              }`}
            >
              <img className="w-6 sm:w-8" src={googleIcon} alt="G" />
              <span>Continue With Google</span>
            </button>
          </div>

          <Modal property={modal}>
            <button
              onClick={() => {
                setModal({ ...modal, show: false });
                !errMessage && navigate(desired);
              }}
              className="bg-green text-white text-lg font-medium px-6 py-2 rounded-lg"
            >
              OK
            </button>
          </Modal>
        </section>
      </MainLayout>
    </div>
  );
};

export default SignIn;
