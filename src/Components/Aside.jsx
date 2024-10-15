import { Link } from "./Link"

function Aside({category, title, entry}) {
  return (
    
        <div className="aside-entry">


            <div className="container">
          
            <h1>{title}</h1>
            <h3>Category: {category}</h3>
            <p>{entry}.</p>
        
            </div>
        </div>
  )
}

export default Aside