import React from 'react';
const ProgressBar = ({ signalStrength }) => {
  return (
    <div className="wifi-progress-bar">
      <div className={`wifi-bar ${signalStrength >= 1 ? 'active' : ''}`} />
      <div className={`wifi-bar ${signalStrength >= 2 ? 'active' : ''}`} />
      <div className={`wifi-bar ${signalStrength >= 3 ? 'active' : ''}`} />
    </div>
  );
};

export default ProgressBar;
