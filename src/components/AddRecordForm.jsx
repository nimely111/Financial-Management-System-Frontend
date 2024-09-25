// src/components/AddRecordForm.js
import React, { useState } from 'react';

const AddRecordForm = ({ addRecord }) => {
  const [date, setDate] = useState('');
  const [isPaid, setIsPaid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date) {
      addRecord({ date, isPaid });
      setDate('');
      setIsPaid(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-4'>
        <label htmlFor='date' className='block text-gray-700 font-bold mb-2'>
          Select Date
        </label>
        <input
          type='date'
          id='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className='border rounded w-full py-2 px-3'
        />
      </div>

      <div className='mb-4'>
        <label className='block text-gray-700 font-bold mb-2'>
          Payment Status
        </label>
        <input
          type='checkbox'
          id='isPaid'
          checked={isPaid}
          onChange={(e) => setIsPaid(e.target.checked)}
        />
        <label htmlFor='isPaid' className='ml-2'>
          Paid
        </label>
      </div>

      <button
        type='submit'
        className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full'
      >
        Add Record
      </button>
    </form>
  );
};

export default AddRecordForm;
