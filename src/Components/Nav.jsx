import { Link } from "./Link"


function Nav() {
  return (
    <nav className='nav-container'>

        <div>

        <h1 className='logo-text'>Harlys</h1>
        </div>


        <ul className='nav-items'>

            <li className='nav-item selected'>
              <Link to="/">Home</Link> 
            </li>
            <li className='nav-item'>
              <Link to="/about">About me</Link>
            </li>
            <li className='nav-item'>
              <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav