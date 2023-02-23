import React from 'react';

export const Filter = ({ value, onChange }) => {
  return (
    <label htmlFor="filter">
      Find contacts by name
      <br />
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
};
