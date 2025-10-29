import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAccount } from './customerSlice';

const CreateCustomer = () => {
  const [fullName, setFullName] = useState('');
  const [nationalId, setNationalId] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!fullName || !nationalId) return;
    dispatch(createAccount(fullName, nationalId));
  };
  return (
    <div>
      <h2>Create New Customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          ></input>
        </div>
        <div>
          <label>national ID</label>
          <input
            value={nationalId}
            onChange={(event) => setNationalId(event.target.value)}
          ></input>
        </div>
        <button onClick={handleClick}>Create new Customer</button>
      </div>
    </div>
  );
};
export default CreateCustomer;
