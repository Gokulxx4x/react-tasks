// src/MouseTracker.js

import React from 'react';
import MousePosition from './MousePosition';

const MouseTracker = () => {
  return (
    <MousePosition render={({ x, y }) => (
      <div>
        Mouse position: ({x}, {y})
      </div>
    )} />
  );
};

export default MouseTracker;
