import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import Categories from '../Components/Categories'
import Aside from '../Components/Aside'
import Entries from '../Components/Entries'
import { nanoid } from 'nanoid'
import entriesTemplate from '../../entriesTemplate'


const allEntries = entriesTemplate.map(entry => {

  const entryArray = entry.entry.split(' ')
  const entryWords = entryArray.slice(0, 113).join(' ')

  

  return <Entries 
  key={nanoid()}
  entry={entryWords}
  category={entry.category}
  title={entry.title}
  />
})

const asideEntries = entriesTemplate.map(entry => {

  const entryArray = entry.entry.split(' ')
  const entryAside = entryArray.slice(0, 40).join(' ')

  return <Aside 
  key={nanoid()}
  entry={entryAside}
  category={entry.category}
  title={entry.title}
  />
})

function Home() {
  return (
    <>
    <Nav />
    <Hero />
    <div className='cat-asd'>

      <div className='cat-ent'>

      <Categories />
      {allEntries}
      </div>
    {asideEntries}
    </div>
    </>
  )
}

export default Home