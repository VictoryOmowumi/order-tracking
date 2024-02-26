import React from 'react';

const Error = ({ message }) => {
    return (
        <div className="flex flex-col gap-4 items-center justify-center h-screen bg-primary-color text-white">
            <h2>Error: {message}</h2>
            <p>
                Please check your internet connection and try again.
            </p>
        </div>
    );
};

export default Error;
