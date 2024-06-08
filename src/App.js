// src/App.js

import React from 'react';
import SimpleComponent from './SimpleComponent';
import CounterComponent from './CounterComponent';
import ToggleButtonComponent from './ToggleButtonComponent';
import ConditionalRenderingComponent from './ConditionalRenderingComponent';
import FormComponent from './FormComponent';
import ExampleComponent from './ExampleComponent';
import MouseTracker from './MouseTracker';
import DataFetcher from './DataFetcher';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Components</h1>
        <SimpleComponent />
        <CounterComponent />
        <ToggleButtonComponent />
        <ConditionalRenderingComponent />
        <FormComponent />
        <ExampleComponent />
        <MouseTracker />
        <DataFetcher />
      </header>
    </div>
  );
}

export default App;
