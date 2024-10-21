import { useEffect, useState } from "react"
import { Link } from "./Link"
import { useLocation } from "react-router-dom"

function Nav() {

  const [rutaActual, setRutaActual] = useState(window.location.pathname)

  useEffect(() => {
    const handleLocationChange = () => {
      setRutaActual(window.location.pathname)
    }

    window.addEventListener("popstate", handleLocationChange)

    return () => {
      window.removeEventListener("popstate", handleLocationChange)
    }

  }, [])


  return (
    <nav className='nav-container'>

        <div>

        <h1 className='logo-text'>Harlys's Blog</h1>
        </div>


        <ul className='nav-items'>

            <li className={`nav-item ${rutaActual === '/' ? 'selected-nav' : ''}`}>
              <Link to="/">Home</Link> 
            </li>
            <li className={`nav-item ${rutaActual === '/about' ? 'selected-nav' : '' }`}>
              <Link to="/about">About me</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav