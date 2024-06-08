// src/ConditionalRenderingComponent.js

import React, { useState } from 'react';

const ConditionalRenderingComponent = () => {
  const [status, setStatus] = useState('idle'); // Possible statuses: 'idle', 'loading', 'success', 'error'

  const handleClick = () => {
    setStatus('loading');
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;
      setStatus(isSuccess ? 'success' : 'error');
    }, 2000);
  };

  let message;
  if (status === 'idle') {
    message = <p>Please click the button to start.</p>;
  } else if (status === 'loading') {
    message = <p>Loading...</p>;
  } else if (status === 'success') {
    message = <p>Operation was successful!</p>;
  } else if (status === 'error') {
    message = <p>Something went wrong. Please try again.</p>;
  }

  return (
    <div>
      {message}
      <button onClick={handleClick}>
        {status === 'loading' ? 'Processing...' : 'Start Operation'}
      </button>
    </div>
  );
};

export default ConditionalRenderingComponent;
