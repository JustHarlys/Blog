import { useEffect, useState } from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

function Entry({ entryId }) {
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEntry() {
      try {
        const response = await fetch(`https://blog-production-1b45.up.railway.app/entry/${entryId}`);
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

  function formatEntryText(text) {
    const lines = text.split("\n");

    return lines.map((line, index) => (
      <span key={index} className='span-text'>
        {line}
        <br />
      </span>
    ));
  }

  if (loading) {
    return <p>Cargando entrada...</p>;
  }

  if (!entry) {
    return <p>No entry found.</p>;
  }

  return (
    <div>
      <Nav />

      <div className='entry-whole-content'>
        <h1>{entry.title}</h1>
        <h3>Categoría  : {entry.category}</h3>
        <p className='entry-text'>{formatEntryText(entry.entry)}</p>
      </div>

      <Footer />
    </div>
  );
}

export default Entry;
