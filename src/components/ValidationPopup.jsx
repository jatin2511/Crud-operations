import React from 'react';

const ValidationPopup = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 p-4 rounded-lg shadow-lg z-50">
      <div className="bg-white p-6 rounded-lg text-center">
        <p className="text-lg font-semibold mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ValidationPopup;