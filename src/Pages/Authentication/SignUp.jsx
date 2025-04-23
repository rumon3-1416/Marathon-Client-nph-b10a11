import React, { useEffect, useState } from 'react';
import Container from '../../Layouts/Container';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../Hooks/useAuthContext';
import Modal from '../../components/Modal/Modal';

import { IoEyeOutline } from 'react-icons/io5';
import { FaRegEyeSlash } from 'react-icons/fa';
import googleIcon from '../../assets/icons/google.png';

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [passErr, setPassErr] = useState(null);
  const [errMessage, setErrMessage] = useState(null);
  const [modal, setModal] = useState({
    show: false,
    res: '',
    title: '',
  });

  const navigate = useNavigate();
  const {
    setLoading,
    darkTheme,
    emailPassSignUp,
    googleSignIn,
    updateUserProfile,
  } = useAuthContext();
  const inputColor = darkTheme
    ? 'bg-dark3 text-gray-200'
    : 'bg-[#f1f1f1] text-gray-800';

  // Form Submit handler
  const handleSubmit = e => {
    e.preventDefault();

    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photo.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    const regex = /^(?=.*[a-z])(?=.*[A-Z])/;

    if (password.length < 6 || !regex.test(password) || !terms) {
      // Password check
      if (password.length < 6) {
        setPassErr('Password must have at least 6 characters!');
      } else if (!regex.test(password)) {
        setPassErr(
          'Password must have at least one Uppercase & Lowercase letter!'
        );
      } else {
        setPassErr(null);
      }
      // Terms check
      if (!terms) {
        setErrMessage('Please accept term & conditions!');
      } else {
        setErrMessage(null);
      }
    } else {
      // Create & Update user
      emailPassSignUp(email, password)
        .then(res => {
          setErrMessage(null);

          updateUserProfile(res.user, { displayName, photoURL })
            .then(() => {
              setLoading(false);
              setErrMessage(null);
              setModal({
                show: true,
                res: 'success',
                title: 'Register Successful',
              });
              e.target.reset();
            })
            .catch(err => setErrMessage(err.message));
        })
        .catch(err => {
          setErrMessage(err.message);
          setModal({ show: true, res: 'error', title: 'Register Failed' });
        });
    }
  };

  // Popup Log In Handler
  const handlePopup = () => {
    googleSignIn()
      .then(() => {
        setErrMessage(null);
        setModal({ show: true, res: 'success', title: 'Register Successful' });
      })
      .catch(err => {
        setErrMessage(err.message);
        setModal({ show: true, res: 'error', title: 'Register Failed' });
      });
  };

  useEffect(() => {
    document.title = 'Register | RunSphere';
  }, []);

  return (
    <div className="bg-greenBg py-8">
      <Container>
        <section className="min-h-[calc(95vh-7rem)] flex justify-center items-center">
          <div
            className={`w-full md:w-4/5 max-w-md px-5 md:px-6 py-6 md:py-8 rounded-xl shadow-lg ${
              darkTheme ? 'text-light2 bg-dark5' : 'text-[#403F3F] bg-[#fffcfc]'
            }`}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name & Photo */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  className={`w-full px-5 py-3 outline-none focus:border-[1.5px] border-green rounded-md ${inputColor}`}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
                <input
                  className={`w-full px-5 py-3 outline-none focus:border-[1.5px] border-green rounded-md ${inputColor}`}
                  id="photo"
                  name="photo"
                  type="text"
                  placeholder="Photo URL"
                  required
                />
              </div>

              {/* Email */}
              <input
                className={`bg-[#F3F3F3] w-full px-5 py-3 outline-none focus:border-[1.5px] border-green rounded-md ${inputColor}`}
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
                {passErr && <p className="text-red-500">{passErr}</p>}
              </div>
              {/* Terms */}
              <div className="flex items-center gap-2.5">
                <input
                  className="w-5 h-5 outline-none accent-green"
                  type="checkbox"
                  name="terms"
                  id="terms"
                />
                <p className="text-sm">
                  Accept our{' '}
                  <span className="font-semibold">Terms & Conditions.</span>
                </p>
              </div>
              {/* Error message */}
              {errMessage && <p className="text-red-500">{errMessage}</p>}
              {/* Submit */}
              <button
                className="bg-green hover:bg-gold2 text-white font-semibold px-5 py-3 rounded-lg"
                type="submit"
              >
                Register
              </button>
            </form>

            <p
              className={`text-sm text-center font-semibold mt-4 ${
                darkTheme ? 'text-gray-200' : 'text-[#706F6F]'
              }`}
            >
              Already Have An Account ?{' '}
              <Link className="text-orange whitespace-nowrap" to="/signin">
                Log In
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
              onClick={() => handlePopup('google')}
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
                !errMessage && navigate('/');
              }}
              className="bg-green text-white text-lg font-medium px-6 py-2 rounded-lg"
            >
              OK
            </button>
          </Modal>
        </section>
      </Container>
    </div>
  );
};

export default SignUp;
