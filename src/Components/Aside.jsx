import { Link } from "./Link"

function Aside({id, category, title, entry}) {

  return (
    
        <div className="aside-entry">

            <Link to={`/entry/${id}`}> 
            <div className="container">
          
            <h1>{title}</h1>
            <h3>Categoría: {category}</h3>
            <p>{entry}.</p>
        
            </div>
            </Link>
        </div>
  )
}

export default Aside