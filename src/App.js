import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CardList from './CardList';

function App() {
  const [citizens, setCitizens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://10.52.10.181:3000/api/allUsers')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setCitizens(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <CardList data={citizens} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
