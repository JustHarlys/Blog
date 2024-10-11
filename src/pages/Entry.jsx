
import Nav from "../Components/Nav"



function Entry() {


  return (
    <div>
      <Nav />

      <div className="entry-whole-content">

      <h1 className="entry-title">{entry.title}</h1>
      <h3 className="entry-category">Category: {entry.category}</h3>
      <p className="entry-text">{entry.entry}</p>
      </div>
    </div>
  )
}

export default Entry