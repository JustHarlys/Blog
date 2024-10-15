

function Categories({ entriesItems, setEntries, filter, original }) {
  return (

    <>
    <div className="categories">
      {entriesItems.map((val, id) => {
        return (
          <button className="category-btn" 
          onClick={() => filter(val)}
          key={id}
          
          >
            {val}
          </button>
        )
      })}
      <button className="category-btn" onClick={() => setEntries(original)}>
        All
      </button>
    </div>
    </>
  )
}

export default Categories