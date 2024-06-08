import React from 'react';

const SimpleComponent = () => {
  return (
    <div>
      <input type="text" placeholder="Type something..." />
      <button onClick={() => alert('Button Clicked!')}>Click Me</button>
    </div>
  );
};

export default SimpleComponent;
