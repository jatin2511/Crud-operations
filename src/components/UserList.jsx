import React, { useState } from 'react';

const UserList = ({ users, deleteUser, editUser }) => {
  const [showConfirm, setShowConfirm] = useState(null);

  const handledelete = (userId) => {
    setShowConfirm(userId);
  };

  const confirmdelete = () => {
    deleteUser(showConfirm);
    setShowConfirm(null);
  };

  const canceldelete = () => {
    setShowConfirm(null);
  };

  return (
    <div className="relative">
    {/* confirmation popup */}
      {showConfirm !== null && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <p className="text-lg font-semibold mb-4">Are you sure you want to delete this user?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmdelete}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none transition duration-150"
              >
                Yes
              </button>
              <button
                onClick={canceldelete}
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 focus:outline-none transition duration-150"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* userlist */}
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="flex justify-between items-center p-4 bg-gray-100 rounded shadow-sm">
            <span>{user.name} - {user.email} - {user.phone}</span>
            <div className="space-x-2">
              <button
                onClick={() => editUser(user)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-150"
              >
                Edit
              </button>
              <button
                onClick={() => handledelete(user.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-150"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
