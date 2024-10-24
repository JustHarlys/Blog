import { Link } from "./Link";

function Entries({id, category, title, entry}) {


  return (
    <section className="entries-container">
      <div className="entry">


        <Link to={`/entry/${id}`}>
        <div className="entries-inside-container">

        <h1>{title}</h1>
        <h3>Categoría: {category}</h3>
        <p>{entry}.</p>

        </div>
        </Link>
      


      </div>
    </section >
  )
}

export default Entries;