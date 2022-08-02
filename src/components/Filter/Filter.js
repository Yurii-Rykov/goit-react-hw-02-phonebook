import React from 'react';

const Filter = ({ onValue, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={onValue} onChange={onChange} />
    </label>
  );
};

export default Filter;
