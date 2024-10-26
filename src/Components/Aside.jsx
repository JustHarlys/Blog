import { Link } from "./Link"

function Aside({id, category, title, entry}) {

  return (
    
        <div className="aside-entry">

            <Link to={`/entry/${id}`}> 
            <div className="container">
          
            <h3>{category}</h3>
            <h1>{title}</h1>
            <p>{entry}.</p>
        
            </div>
            </Link>
        </div>
  )
}

export default Aside