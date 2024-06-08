// src/DataFetcher.js

import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage errors

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result); // Store fetched data in state
      } catch (error) {
        setError(error); // Store error in state
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchData();

    // Cleanup function logs when the component unmounts
    return () => {
      console.log('Component unmounted');
    };
  }, []); // Empty array means this runs only once when the component mounts

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Data Fetcher Component</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataFetcher;
