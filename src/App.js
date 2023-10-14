import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [boxsArr, setBoxsArr] = useState([]);
  return (
    <div className="page">
      <Form
        boxsArr={boxsArr}
        setBoxsArr={setBoxsArr}
      />
      <Display
        boxsArr={boxsArr}
      />
    </div>
  );
}

export default App;
