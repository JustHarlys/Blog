import { useEffect, useState } from 'react';
import Nav from '../Components/Nav';

function Entry({ entryId }) {
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEntry() {
      try {
        const response = await fetch(`http://localhost:3001/entry/${entryId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch entry');
        }
        const data = await response.json();
        setEntry(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching entry:', error);
        setLoading(false); 
      }
    }

    fetchEntry();
  }, [entryId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!entry) {
    return <p>No entry found.</p>; // Muestra un mensaje si no se encontró ninguna entrada
  }

  return (
    <div>
      <Nav />

      <div className='entry-whole-content'>

      <h1>{entry.title}</h1>
      <h3>Category: {entry.category}</h3>
      <p className='entry-text'>{entry.entry}</p>
      </div>
    </div>
  );
}

export default Entry;
