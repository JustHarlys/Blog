import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import Aside from '../Components/Aside'
import Entries from '../Components/Entries'
import { nanoid } from 'nanoid'
import Footer from '../Components/Footer'
import { useEffect, useState } from 'react'
import Categories from '../Components/Categories'


function Home() {

 

  const [entries, setEntries] = useState([])
  const [originalEntries, setOriginalEntries] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    async function fetchEntries() {
      try {
        const res = await fetch(`http://localhost:3001/getEntries`);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        } 

        const data = await res.json();
        setEntries(data);
        setOriginalEntries(data)
      } catch (err) {
        console.log('Error during fetch', err)
      }
    }

    fetchEntries();
  }, [])

  const entriesItems = [...new Set(originalEntries.map((value) => value.category))]



  const itemsPerPage = 3;
  const totalPages = Math.ceil(entries.length / itemsPerPage)
  const slicedEntries = [...originalEntries].reverse().slice(0,3)
  const asideEntries = slicedEntries.map(entry => {
  const entryArray = entry.entry.split(' ')
  const entryAside = entryArray.slice(0, 40).join(' ')

  return <Aside 
  key={nanoid()}
  entry={entryAside}
  category={entry.category}
  title={entry.title}
  />
  })


  const currentEntries = entries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )


  const allEntries = currentEntries.map(entry => {


    const entryArray = entry.entry.split(' ')
    const entryWords = entryArray.slice(0, 113).join(' ')
  
  
    return <Entries 
    key={nanoid()}
    id={entry.id}
    entry={entryWords}
    category={entry.category}
    title={entry.title}
    />
  })


  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }


    function filterEntry(curcat) {
      const newEntry = originalEntries.filter((newVal) => newVal.category === curcat);
      setEntries(newEntry)
      setCurrentPage(1)
    }

  return (

    
    <>
    <Nav />
    <Hero />

    <div className='cat-asd'>

      <div className='cat-ent'>


      <Categories entries={entries} entriesItems={entriesItems} setEntries={setEntries} filter={filterEntry} original={originalEntries}/>


      {allEntries}
      {entries != 0 &&
      <div style={{textAlign: 'center'}}>
      <button onClick={prevPage} disabled={currentPage === 1} className='menu-buttons'>
        {'<'}
      </button>
      <span>{`${currentPage} / ${totalPages}`}</span>
      <button onClick={nextPage} disabled={currentPage === totalPages} className='menu-buttons'>
        {'>'}
      </button>
      </div>
      }


      </div>

      <aside className="latest-entries">  
      <h3>Últimas Entradas</h3>
      {asideEntries}
      </aside>

    </div>


    <Footer />
    </>
  )
}

export default Home