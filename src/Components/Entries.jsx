import { Link } from "./Link";

function Entries({ id, category, title, entry, isLastEntry }) {

  return (
    <section className="entries-container">
      <div className="entry">
          <div 
            className="entries-inside-container" 
            style={{ borderBottom: isLastEntry ? 'none' : '#333333 solid 1px' }}
          >
            <h3>{category}</h3>
            <h1>{title}</h1>
            <p>{entry}.</p>
        <Link to={`/entry/${id}`}>
        Leer más...
        </Link>
            
          </div>
      </div>
    </section>
  );
}

export default Entries;