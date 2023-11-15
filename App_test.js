// src/App.js
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>React App</h1>
      <p>{data ? data.message : 'Loading...'}</p>
    </div>
  );
}

export default App;
