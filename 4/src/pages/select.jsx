import React from 'react';

const MySelect = ({ options, defaultValue, selectedValue, onChange }) => {
  return (
    <select onChange={(event) => onChange(event.target.value)} value={selectedValue}>
      <option value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
