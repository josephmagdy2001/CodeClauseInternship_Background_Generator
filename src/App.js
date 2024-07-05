import React, { useState } from "react";
 import ColorPicker from "./components/ColorPicker";
import GradientTypeSelector from "./components/GradientTypeSelector";
import BackgroundPreview from "./components/BackgroundPreview";
import "./App.css";

const App = () => {
 

  const [color1, setColor1] = useState("#ff0000");
  const [color2, setColor2] = useState("#0000ff");
  const [gradientType, setGradientType] = useState("linear");

  
  const handleColor1Change = (e) => setColor1(e.target.value);
  const handleColor2Change = (e) => setColor2(e.target.value);
  const handleGradientTypeChange = (e) => setGradientType(e.target.value);

 
  const backgroundStyle = {
    background: `${gradientType}-gradient(${color1}, ${color2})`,
  };
  return (
    <div className="App">
      <nav className="Logo"> &#128640;Joe</nav>
      <h1>Background Generator</h1>

      <div className="controls">
        <ColorPicker color={color1} onChange={handleColor1Change} />
        <ColorPicker color={color2} onChange={handleColor2Change} />
        <GradientTypeSelector
          gradientType={gradientType}
          onChange={handleGradientTypeChange}
        />
      </div>

      <BackgroundPreview style={backgroundStyle} />

      <div className="content">
        <h2>Color Generator</h2>
        <p>
          This tool allows you to generate custom color gradients for your
          backgrounds. Use the color pickers above to select your desired colors
          and choose between linear or radial gradients.
        </p>
        <img
          src="https://img.freepik.com/free-photo/man-solo-traveling-backpacker-3d-illustration_183364-80873.jpg"
          width={250}
          alt="img"
        />
      </div>
      <div className="api_search_icon"></div>
      <footer className="footer">
        <p> CopyRight &copy;2024 Joseph Magdy . All rights reserved.</p>
        <div className="social-icons">
          <a href="https://github.com/josephmagdy2001" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/josephmagdy/" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" />
          </a>
        </div>
      </footer>
    </div>
    
  );
};

export default App;