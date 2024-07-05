import React from 'react';
import ntc from 'ntcjs';

const ColorPicker = ({ color, onChange }) => {
  const [colorName, setColorName] = React.useState(ntc.name(color)[1]);

  const handleChange = (e) => {
    const newColor = e.target.value;
    setColorName(ntc.name(newColor)[1]);
    onChange(e);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    alert("Color code copied to clipboard!");
  };

  return (
    <div className="color-picker">
      <label>
        Choose color:
        <input type="color" value={color} onChange={handleChange} />
      </label>
      <div className="color-info">
        <p>Color Code: <span onClick={copyToClipboard} style={{cursor: 'pointer'}}>{color}</span></p>
        <p>Color Name: {colorName}</p>
      </div>
    </div>
  );
};

export default ColorPicker;
