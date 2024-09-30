import Nav from "../Components/Nav"
import { text } from "../../text"


function Entry() {
  return (
    <div>
      <Nav />

      <div className="entry-whole-content">

      <h1 className="entry-title">Entry Title</h1>
      <h3 className="entry-category">Category: Category</h3>
      <p className="entry-text">{text}</p>
      </div>
    </div>
  )
}

export default Entry