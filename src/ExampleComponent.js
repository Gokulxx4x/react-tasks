// src/ExampleComponent.js

import React from 'react';
import withLogging from './withLogging';

const ExampleComponent = () => {
  return <div>Example Component</div>;
};

export default withLogging(ExampleComponent);
