import { Link } from "./Link";

function Entries({id, category, title, entry}) {
  return (
    <section className="entries-container">
      <div className="entry">

        <div className="entries-inside-container">

        <Link to={`/entry/${id}`}>
        <h1>{title}</h1>
        <h3>Categoria: {category}</h3>
        <p>{entry}</p>
        </Link>

        </div>
      

      </div>
    </section >
  )
}

export default Entries;