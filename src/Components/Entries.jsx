import { Link } from "./Link";

function Entries({id, category, title, entry}) {

  function handleClick () {
    console.log(id)
  }

  return (
    <section className="entries-container">
      <div className="entry">


        <Link to={`/entry/${id}`}>
        <div className="entries-inside-container" onClick={handleClick}>

        <h1>{title}</h1>
        <h3>Categoria: {category}</h3>
        <p>{entry}.</p>

        </div>
        </Link>
      

      </div>
    </section >
  )
}

export default Entries;