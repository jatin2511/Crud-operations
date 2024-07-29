import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, { id: Date.now(), ...user }]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => user.id === currentUser.id ? updatedUser : user));
    setCurrentUser(null);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const editUser = (user) => {
    setCurrentUser(user);
  };

  return (
    <div >
      <UserForm addUser={addUser} updateUser={updateUser} currentUser={currentUser} />
      <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
};

export default App;