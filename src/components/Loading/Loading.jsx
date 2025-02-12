import React from 'react';
import Lottie from 'lottie-react';
import loadingSpinner from './loading-spinner.json';

const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Lottie className="h-32" animationData={loadingSpinner} />
    </div>
  );
};

export default Loading;
