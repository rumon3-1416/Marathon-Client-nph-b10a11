import React, { useEffect, useState } from 'react';
import MainLayout from '../../Layouts/MainLayout';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../Hooks/useAuthContext';
import Modal from '../../components/Modal/Modal';

import { IoEyeOutline } from 'react-icons/io5';
import { FaRegEyeSlash } from 'react-icons/fa';
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
  const { emailPassSignIn, googleSignIn } = useAuthContext();

  const desired = location.state?.pathname || '/';

  useEffect(() => {
    document.title = 'Login | RunSphere';
  }, []);

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
        setErrMessage(err.message),
          setModal({ show: true, res: 'error', title: 'Log In failed' });
      });
  };

  return (
    <div className="bg-greenBg py-8">
      <MainLayout>
        <section className="min-h-[calc(95vh-5rem)] flex justify-center items-center">
          <div className="text-[#403F3F] bg-[#fffcfc] w-full md:w-4/5 max-w-md px-5 md:px-6 py-6 md:py-8 mt-8 rounded-xl shadow-lg">
            {/* Email Password Sign In */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Email */}
              <input
                className="bg-[#F3F3F3] w-full px-5 py-3 outline-none focus:border-[1.5px] border-green rounded-md"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
              />

              {/* Password */}
              <div className="relative">
                <input
                  className="bg-[#F3F3F3] w-full px-5 py-3 outline-none focus:border-[1.5px] border-green rounded-md"
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

            <p className="text-[#706F6F] text-sm text-center font-semibold mt-4">
              Don’t Have An Account ?{' '}
              <Link className="text-orange whitespace-nowrap" to="/signup">
                Register
              </Link>
            </p>

            {/* or border */}
            <div className="my-3 grid grid-cols-[1fr,_40px,_1fr] items-center">
              <div className="border border-[#8d8b8b]"></div>
              <p className="text-[#403F3F] text-xl font-medium text-center">
                or
              </p>
              <div className="border border-[#8d8b8b]"></div>
            </div>

            {/* Google Sign In */}
            <button
              onClick={() => handlePopup('google')}
              className="w-full font-semibold px-5 py-2.5 border-[1.5px] border-dark-green hover:border-gold rounded-full flex justify-center items-center gap-2 sm:gap-4"
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
