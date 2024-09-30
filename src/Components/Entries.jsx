import { Link } from "./Link";

function Entries({category, title, entry}) {
  return (
    <section className="entries-container">
      <div className="entry">

        <div className="container">

        <Link to="/entry">
        <h1>{title}</h1>
        <p>{entry}</p>
        </Link>

        </div>
      
        <p className="counter"> {'< 1/3 >'}</p>

      </div>
    </section >
  )
}

export default Entries;