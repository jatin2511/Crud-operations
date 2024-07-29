import React, { useState } from 'react';
import ValidationPopup from './ValidationPopup';

const UserForm = ({ addUser, updateUser, currentUser }) => {
  const [name, setName] = useState(currentUser ? currentUser.name : '');
  const [email, setEmail] = useState(currentUser ? currentUser.email : '');
  const [phone, setPhone] = useState(currentUser ? currentUser.phone : '');
  const [error, setError] = useState('');

  const validateemail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatephone = (phone) => /^[0-9]{10}$/.test(phone);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!validateemail(email)) {
      setError('Invalid Email');
      return;
    }
    if (!validatephone(phone)) {
      setError('Invalid Phone No');
      return;
    }
    setError('');
    if (currentUser) {
      updateUser({ name, email, phone });
    } else {
      addUser({ name, email, phone });
    }
    setName('');
    setEmail('');
    setPhone('');
  };

  const handleclosepopup = () => {
    setError('');
  };

  return (
    <>
      <form className='flex flex-col items-center gap-8 mt-8 text-2xl' onSubmit={handlesubmit}>    
            <input className='border-2 px-4 py-2' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input className='border-2 px-4 py-2' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input className='border-2 px-4 py-2' type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
        <button className='bg-green-700 text-white px-4 py-2 rounded-xl hover:scale-95'  type="submit">{currentUser ? 'Update' : 'Add'} User</button>
      </form>
      <ValidationPopup message={error} onClose={handleclosepopup} />
    </>
  );
};

export default UserForm;
