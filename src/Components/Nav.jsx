

function Nav() {
  return (
    <nav className='nav-container'>

        <div>

        <h1 className='logo-text'>Harlys</h1>
        </div>


        <ul className='nav-items'>

            <a href=""><li className='nav-item selected'>Home</li></a>
            <a href=""><li className='nav-item'>About me</li></a>
            <a href=""><li className='nav-item'>Contact</li></a>
        </ul>
    </nav>
  )
}

export default Nav