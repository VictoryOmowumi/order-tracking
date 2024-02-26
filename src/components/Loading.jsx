import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen bg-primary-color">
      <div className="loader"></div>
      <p className="text-white text-xl font-medium">Loading...</p>
    </div>
  );
};

export default Loading;
