import React from 'react';

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="text-red-500 text-center my-4">
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;