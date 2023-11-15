import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to the server endpoint
        // const response = await fetch('https://sturdy-spoon-gj65w4447ww2v6qx-5000.app.github.dev');
        const response = await fetch('https://sturdy-spoon-gj65w4447ww2v6qx-5000.app.github.dev');


        if (!response.ok) {
          // Handle non-successful responses
          throw new Error(`Server responded with status: ${response.status}`);
        }

        // Parse the JSON response
        const result = await response.json();
        setData(result);
      } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Error fetching data:', error.message);
        setError('Loi.khong lay duoc du lieu');
      } finally {
        // Set loading to false once the request is complete
        setLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once after the initial render

  return (
    <div>
      <h1>React App</h1>
      {loading && <p>Loading data...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && <p>Data from server: {data.message}</p>}
    </div>
  );
}

export default App;
