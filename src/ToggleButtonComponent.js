import React, { useState } from 'react';

const ToggleButtonComponent = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'ON' : 'OFF'}
      </button>
      <p>The button is {isOn ? 'ON' : 'OFF'}</p>
    </div>
  );
};

export default ToggleButtonComponent;
