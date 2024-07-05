import React from 'react';

const GradientTypeSelector = ({ gradientType, onChange }) => (
  <select value={gradientType} onChange={onChange}>
    <option value="linear">Linear</option>
    <option value="radial">Radial</option>
  </select>
);

export default GradientTypeSelector;
