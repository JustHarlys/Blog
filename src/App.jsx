import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Categories from './Components/Categories'
import Aside from './Components/Aside'
import Entries from './Components/Entries'
import './App.css'

function App() {

  return (
    <>
    <Nav />
    <Hero />
    <div className='cat-asd'>

      <div className='cat-ent'>

      <Categories />
      <Entries />
      </div>
    <Aside />
    </div>
    </>
  )
}

export default App
