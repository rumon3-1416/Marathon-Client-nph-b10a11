import React, { useEffect } from 'react';
import { useAuthContext } from '../../../../Hooks/useAuthContext';

const Profile = () => {
  const { user, darkTheme } = useAuthContext();

  useEffect(() => {
    document.title = 'Profile | RunSphere';
  }, []);

  return (
    <section>
      <h3
        className={`text-3xl font-bold ms-4 mb-12 ${
          darkTheme ? 'text-light2' : 'text-gray-800'
        }`}
      >
        My Profile
      </h3>

      <div className="">
        <div className="flex items-center gap-8">
          <img
            className="bg-white w-40 max-w-40 p-1 aspect-square object-cover border-4 border-lightBlue rounded-full"
            src={user?.photoURL}
            alt=""
          />

          <div className="">
            <p className="text-green text-4xl font-bold">{user?.displayName}</p>
            <p
              className={`text-lg font-semibold mt-2 ${
                darkTheme && 'text-gray-200'
              }`}
            >
              User of RunSphere
            </p>
          </div>
        </div>

        <div
          className={`${
            darkTheme ? 'bg-dark5 text-gray-100' : 'bg-white'
          } p-10 mt-10 rounded-2xl shadow-xl`}
        >
          <div className="text-left text-lg font-medium overflow-hidden">
            <div className="flex flex-wrap gap-2">
              <p className="text-nowrap">Name :</p>
              <p>{user?.displayName}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <p className="text-nowrap">Email :</p>
              <p className="text-wrap">{user?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
