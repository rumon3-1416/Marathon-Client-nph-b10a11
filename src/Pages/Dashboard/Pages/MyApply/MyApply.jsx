import React from 'react';
import { useAuthContext } from '../../../../Hooks/useAuthContext';

const MyApply = () => {
  const { darkTheme } = useAuthContext();

  return (
    <section>
      <h3
        className={`text-3xl font-bold text-center mb-12 ${
          darkTheme ? 'text-light2' : 'text-gray-800'
        }`}
      >
        My Apply List
      </h3>
    </section>
  );
};

export default MyApply;
