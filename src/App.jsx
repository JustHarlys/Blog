import { useEffect, useState } from 'react'
import { EVENTS } from './data/consts'
import './App.css'
import AboutMe from './pages/AboutMe'
import Home from './pages/Home'
import SetEntry from './pages/SetEntry'
import Entry from './pages/Entry'


const {POPSTATE, PUSHSTATE} = EVENTS

function Router ({ routes = [], defaultComponent: DefaultComponent = () => null }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect( () => { 
   const onLocationChange = () => {
     setCurrentPath(window.location.pathname)
   }
 
   window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
   window.addEventListener(POPSTATE, onLocationChange)
 
   return () => {
     window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
     window.removeEventListener(POPSTATE, onLocationChange)
   }
  }, [])

  const Page = routes.find(({path}) => path === currentPath)?.Component

  return Page ? <Page /> : <DefaultComponent/>

}

function App() {

  return (
    <main>

    <Router routes={[
        {
          path: '/',
          Component: Home
        }, 
        {
          path:'/about',
          Component: AboutMe
        },
        {
          path: '/setEntry',
          Component: SetEntry
        },
        {
          path: '/entry',
          Component : Entry
        }
      ]} />

    </main>
  )
}

export default App
