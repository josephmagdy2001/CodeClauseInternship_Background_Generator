import React from 'react';

const BackgroundPreview = ({ style }) => (
  <div className="background-preview" style={{ ...style, position: 'relative', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)',padding: '10px', borderRadius: '5px' }}>
      <code>{`background: ${style.background};`}</code>
    </div>
  </div>
);

export default BackgroundPreview;
