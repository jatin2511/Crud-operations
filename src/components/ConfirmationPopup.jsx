import React from 'react';

const ConfirmationPopup = ({ message, onConfirm, onCancel }) => {
  if (!message) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 p-4 rounded-lg shadow-lg z-50">
      <div className="bg-white p-6 rounded-lg text-center">
        <p className="text-lg font-semibold mb-4">{message}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
          >
            Yes
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 focus:outline-none"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;